import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCart } from '../state/action/Product';
import CartItem from './CartItem';
import Spinner from './Spinner';
import emptyCart from './emptyCart.svg'
import { Link } from 'react-router-dom';
import { applyCoupon } from '../state/action/Product';

function Cart() {

    const dispatch = useDispatch();
    const [showCoupon, setShowCoupon] = useState(false);
    const [code, setCode] = useState();
    const apiData = useSelector((state) => state.cart);
    const cartData = apiData.Item.items;
    // console.log(apiData.Item.coupons[0].totals.total_discount);

    const applyCouponapiresponse = useSelector((state) => state.applyCoupon);
    console.log('applyCouponDetail', applyCouponapiresponse)

    useEffect(() => {
        dispatch(
            fetchCart()
        );
    }, []);

    const couponCode = () => {
        if (showCoupon === false) {
            setShowCoupon(true);
        }
        else {
            setShowCoupon(false);
        }
    }

    const handleCode = (e) => {
        let code_value = e.target.value;
        setCode(code_value);
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(
            applyCoupon(code)
        )
    }

    if (cartData && cartData.length === 0) {
        return (
            <>
                <div className='empty-cart'>
                    <img className='cartImage' src={emptyCart} />
                </div>
                <h6 style={{ textAlign: 'center', paddingTop: '10px' }}>Your Cart is Currently Empty!</h6>
                <Link style={{ textAlign: 'center' }} className="nav-link" to="/shop">Shop</Link>

            </>
        )
    }
    else {
        return (
            <>
                <div style={{ paddingBottom: '100px' }}>
                    <h2 className="text-center" style={{ marginTop: '50px', marginBottom: '50px' }}>STATIONERY CART</h2>
                    {apiData.ItemLoading && <Spinner />}
                    {!apiData.ItemLoading && <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-md-10 border-bottom border-dark'>
                                <h6>PRODUCT</h6>
                            </div>
                            <div className='col-12 col-md-2 border-bottom border-dark '>
                                <h6 className='d-flex justify-content-end'>TOTAL</h6>
                            </div>
                        </div>
                    </div>}

                    {!apiData.ItemLoading && cartData && cartData.length && cartData.map((element) => {

                        let formattedRegularPrice = (element.prices.regular_price / 100).toFixed(2);
                        let formattedSalePrice = (element.prices.sale_price / 100).toFixed(2);
                        let save = formattedRegularPrice - formattedSalePrice
                        let totalPrice = (element.totals.line_total / 100).toFixed(2);

                        return (
                            <>
                                <div key={element && element.key}>
                                    <CartItem
                                        itemKey={element.key}
                                        cardImage={element && element.images[0].src}
                                        ProductTitle={element && element.name}
                                        singleUrl={element && `/shop/${element.name}`}
                                        reprice={element && formattedRegularPrice}
                                        saleprice={element && formattedSalePrice}
                                        savePrice={save}
                                        cartDescription={element && element.description.replace(/<[^>]+>/g, '')}
                                        PriceTotal={element && totalPrice}
                                        ItemCount={element && element.quantity}
                                    />
                                </div>
                            </>
                        );

                    })}

                    <div className='container'>
                        <div className="row">
                            <div className='col-12 col-md-6'>
                                <p className="card-text d-flex justify-content-end mt-5" style={{ paddingRight: '10px', marginBottom: '0px' }}>CART TOTALS</p>
                                <div className='border-top border-bottom border-dark'>
                                    <button className='add-coupon' onClick={couponCode}>Add a coupon</button>
                                    {
                                        showCoupon &&
                                        <form onSubmit={onSubmit}>
                                            <div className="input-group input-group my-3">
                                                <input type="text" className="form-control" name='coupon_code' value={code} onChange={handleCode} />
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
                                <div className='border-bottom border-dark section-cart'>
                                    <h6 style={{ padding: '10px 0px 4px 18px' }}>FREE SHIPPING</h6>
                                    <h5 style={{ padding: '10px 18px 4px 0px' }}>₹ 0.0</h5>
                                </div>
                                {/* {apiData.Item.coupons &&
                                    <>
                                        <div className='border-bottom border-dark section-cart'>
                                            <h6 style={{ padding: '10px 0px 4px 18px' }}>Discount</h6>
                                            <h5 style={{ padding: '10px 18px 4px 0px', color: 'green' }}>- ₹ {apiData.Item && apiData.Item.coupons && (apiData.Item.coupons[0].totals.total_discount / 100).toFixed(2)}</h5>
                                        </div>
                                    </>

                                } */}
                                <div className='section-cart'>
                                    <h6 style={{ padding: '10px 0px 4px 18px' }}>TOTAL</h6>
                                    <h5 style={{ padding: '10px 18px 4px 0px' }}>₹ {apiData.Item && apiData.Item.totals && (apiData.Item.totals.total_price / 100).toFixed(2)}</h5>
                                </div>
                                <Link className='button butt' to='/checkout' >Proceed to Checkout</Link>
                            </div>
                        </div>

                    </div>

                </div>
            </>
        )
    }
}

export default Cart
