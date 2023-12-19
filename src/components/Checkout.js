import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCart } from '../state/action/Product';
import { useEffect, useState } from 'react';
import { getCheckout } from '../state/action/Product';
import { placeCheckoutOrder } from '../state/action/Product';
import { useNavigate } from "react-router-dom";
import emptyCart from "./emptyCart.svg";


function Checkout() {

    const navigate = useNavigate();


    const [showOrder, setShowOrder] = useState(false);
    const [droupDownIcon, setDroupDownIcon] = useState();
    const dispatch = useDispatch();
    const apiData = useSelector((state) => state.cart);
    const cartData = apiData.Item.items;
    console.log("Cart api", cartData);
    const getCheckOut = useSelector((state) => state.getCheckout);
    console.log("CheckOut api", getCheckOut);
    const placeOrder = useSelector((state) => state.placeOrder);
    console.log('placeOrder', placeOrder);
    const order_id = getCheckOut.checkoutDetailItem.order_id;

    useEffect(() => {
        if (placeOrder.placeOrderSuccess === true) {
            navigate(`/thank-you/${order_id}`);
        }
    }, [placeOrder.placeOrderSuccess, navigate]);

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        company: '',
        address_1: '',
        address_2: '',
        city: '',
        state: '',
        postcode: '',
        country: '',
        email: '',
        phone: '',
    });

    const [payment, setPayment] = useState();
    const [note, setNote] = useState();
    const [showCoupon, setShowCoupon] = useState(false);

    const couponCode = () => {
        if (showCoupon === false) {
            setShowCoupon(true);
        }
        else {
            setShowCoupon(false);
        }
    }

    const handleNote = (e) => {
        let note_value = e.target.value;
        setNote(note_value);
    }

    const handlePayment = (e) => {
        let payment_value = e.target.value;
        setPayment(payment_value);
    }

    const handleFormChange = (e) => {
        let field_name = e.target.name;
        let field_value = e.target.value;
        setFormData(prev => ({ ...prev, [field_name]: field_value }));
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(
            placeCheckoutOrder(formData, note, payment)
        )
    }

    useEffect(() => {
        dispatch(
            getCheckout()
        );
    }, []);

    const OrderSummary = () => {
        if (showOrder === false) {
            setShowOrder(true);
            setDroupDownIcon(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
            </svg>)

        }
        else {
            setShowOrder(false);
            setDroupDownIcon(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            </svg>)
        }
    };

    useEffect(() => {
        dispatch(
            fetchCart()
        );
    }, []);

    if (cartData && cartData.length === 0) {
        return (
            <>
                <div className='empty-cart'>
                    <img className='cartImage' src={emptyCart} />
                </div>
                <h6 style={{ textAlign: 'center', paddingTop: '10px' }}>Your Cart is Currently Empty! <br></br>So You are Not Checkout</h6>
                <Link style={{ textAlign: 'center' }} className="nav-link" to="/shop">Shop</Link>

            </>
        )
    }
    else {

        return (
            <div style={{ paddingBottom: '100px' }} className='container'>
                <h2 className="text-center" style={{ marginTop: '50px', marginBottom: '50px' }}>CHECKOUT</h2>
                <div className='row'>
                    <div className='col-12 col-md-6' style={{ marginRight: '100px' }}>
                        <form onSubmit={onSubmit}>
                            <div className='pb-5'>
                                <h4 className="form-label">Contact information</h4>
                                <div className="form-text pb-1">We'll use this email to send you details and updates about your order.</div>
                                <input type="email" name="email" className="form-control" value={formData.email} onChange={handleFormChange} placeholder="Email Address" />
                            </div>
                            <div className='pb-5'>
                                <h4 className="form-label">Shipping Address</h4>
                                <div className="form-text pb-1">Enter the address where you want your order delivered.</div>
                                <div className='row'>
                                    <div className="col">
                                        <input type="text" className="form-control" name="first_name" value={formData.first_name} onChange={handleFormChange} placeholder="First name" />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" name="last_name" value={formData.last_name} onChange={handleFormChange} placeholder="Last name" />
                                    </div>
                                    <div className='col-12 pt-4'>
                                        <input type="text" className="form-control" name="address_1" value={formData.address_1} onChange={handleFormChange} id="Address" placeholder="Address" />
                                    </div>
                                    <div className='col-12 pt-4'>
                                        <input type="text" className="form-control" name="address_2" value={formData.address_2} onChange={handleFormChange} placeholder="Apartment, suite, etc. (optional)" />
                                    </div>
                                    <div className="col-6 pt-4">
                                        <input type="text" className="form-control" name="country" value={formData.country} onChange={handleFormChange} placeholder="Country/Region" />
                                    </div>
                                    <div className="col-6 pt-4">
                                        <input type="text" className="form-control" name="city" value={formData.city} onChange={handleFormChange} placeholder="City" />
                                    </div>
                                    <div className="col-6 pt-4">
                                        <input type="text" className="form-control" name="state" value={formData.state} onChange={handleFormChange} placeholder="State" />
                                    </div>
                                    <div className="col-6 pt-4">
                                        <input type="text" className="form-control" name="postcode" value={formData.postcode} onChange={handleFormChange} placeholder="PIN Code" />
                                    </div>
                                    <div className="col-12 pt-4">
                                        <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleFormChange} placeholder='Phone (Optionl)' />
                                    </div>
                                </div>
                            </div>
                            <div className='pb-5'>
                                <h4 className="form-label">Shipping options</h4>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <p>Free Shipping</p> ₹ 0.0
                                </div>
                            </div>
                            <div className='pb-5'>
                                <h4 className="form-label">Payment Options</h4>
                                <div>
                                    <input className="form-check-input" type="radio" name="payment" value="bacs" checked={payment === 'bacs'} onChange={handlePayment} /> Direct bank transfer
                                </div>
                                <div>
                                    <input className="form-check-input" type="radio" name="payment" value="cheque" checked={payment === 'cheque'} onChange={handlePayment} /> Check payments
                                </div>
                                <div>
                                    <input className="form-check-input" type="radio" name="payment" value="cod" checked={payment === 'cod'} onChange={handlePayment} /> Cash on delivery
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Add a note to your order</label>
                                <textarea className="form-control" rows="3" name="customer_note" value={note} onChange={handleNote}></textarea>
                            </div>
                            <div className="form-text pb-3">By proceeding with your purchase you agree to our Terms and Conditions and Privacy Policy</div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderTop: '1px solid', paddingTop: '10px' }} >
                                <Link className='button butt' to='/cart' >Return to Cart</Link>
                                <button className='button butt'>Place Order</button>
                            </div>
                        </form>
                    </div>
                    <div className='col-12 col-md-4'>
                        <div className='border-top border-dark order-droup-down'>
                            <button className='add-coupon' onClick={OrderSummary}>Order Summary</button>
                            {droupDownIcon}
                        </div>
                        {showOrder && (
                            cartData && cartData.length && cartData.map((element) => {

                                let formattedRegularPrice = (element.prices.regular_price / 100).toFixed(2);
                                let formattedSalePrice = (element.prices.sale_price / 100).toFixed(2);
                                let totalPrice = (element.totals.line_total / 100).toFixed(2);

                                return (
                                    <div className='row border-top border-dark' key={element && element.id}>

                                        <div className='col-12 col-md-4'>
                                            <span class="order-quantity">{element && element.quantity}</span>
                                            <img style={{ width: '100%', height: '100%', padding: '10px' }} src={element && element.images[0].src} alt="Product Image" />
                                        </div>
                                        <div className='col-12 col-md-6'>
                                            <p className='pt-2 m-0'>{element && element.name}</p>
                                            <p className="card-text" style={{ textDecoration: "line-through", display: "inline", fontSize: "14px" }} > ₹ {element && formattedRegularPrice}</p>
                                            <p className="card-text" style={{ display: "inline", fontSize: "14px" }}> ₹ {element && formattedSalePrice}</p>
                                            <p style={{ fontSize: '14px' }}>{element && element.description.replace(/<[^>]+>/g, '').slice(0, 88)}</p>
                                        </div>
                                        <div className='col-12 col-md-2'>
                                            <p style={{ margin: '0', fontSize: '12px', paddingTop: '10px' }}>₹ {element && totalPrice}</p>
                                        </div>
                                    </div>
                                )
                            })
                        )}
                        <div className='border-top border-bottom border-dark'>
                            <button className='add-coupon' onClick={couponCode}>Add a coupon</button>
                            {
                                showCoupon &&
                                <form onSubmit={onSubmit}>
                                    <div className="input-group input-group my-3">
                                        <input type="text" className="form-control" name='coupon_code' />
                                        <button type='submit' className='btn btn-primary'>Apply</button>
                                    </div>
                                </form>
                            }
                        </div>
                        <div className='border-bottom border-dark section-cart'>
                            <h6 style={{ padding: '10px 0px 4px 18px' }}>SUB TOTAL</h6>
                            <h5 style={{ padding: '10px 18px 4px 0px' }}>₹ {apiData.Item && apiData.Item.totals && (apiData.Item.totals.total_items / 100).toFixed(2)}</h5>
                        </div>
                        <div className='border-bottom border-dark section-cart'>
                            <h6 style={{ padding: '10px 0px 4px 18px' }}>SHIPPING</h6>
                            <h5 style={{ padding: '10px 18px 4px 0px' }}>₹ 0.0</h5>
                        </div>
                        {apiData.Item.coupons &&
                            <div className='border-bottom border-dark section-cart'>
                                <h6 style={{ padding: '10px 0px 4px 18px' }}>Discount</h6>
                                <h5 style={{ padding: '10px 18px 4px 0px', color: 'green' }}>- ₹ {apiData.Item && apiData.Item.coupons && (apiData.Item.coupons[0].totals.total_discount / 100).toFixed(2)}</h5>
                            </div>}
                        <div className='section-cart'>
                            <h6 style={{ padding: '10px 0px 4px 18px' }}>TOTAL</h6>
                            <h5 style={{ padding: '10px 18px 4px 0px' }}>₹ {apiData.Item && apiData.Item.totals && (apiData.Item.totals.total_price / 100).toFixed(2)}</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Checkout
