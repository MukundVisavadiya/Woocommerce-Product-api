import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { archiveAddToCart } from '../state/action/Product';

function ProductItem(props) {
    let { title, imgUrl, url, reprice, saleprice, source, productId } = props;

    const dispatch = useDispatch();
    const addtoitem = useSelector((state) => state.addItem);

    return (
        <>

            <div className="my-3">
                <div className="card">
                    <Link
                        rel="noreferrer"
                        to={url}
                        style={{ textDecoration: "none" }}
                    >
                        <img
                            className="card-img-top"
                            src={
                                !imgUrl
                                    ? "https://www.livemint.com/lm-img/img/2023/11/19/1600x900/Narendra_Modi_Stadium_1700394893087_1700394903499.jpg"
                                    : imgUrl
                            }
                            alt="Card image cap"
                        />
                    </Link>
                    <div className="card-body">
                        <Link
                            rel="noreferrer"
                            to={url}
                            style={{ textDecoration: "none" }}
                        >
                            <h5 className="card-title" style={{ color: "Black", textAlign: "center" }}>
                                {title}
                                <span className="badge rounded-pill bg-danger" style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: 10, top: 10 }}>
                                    {source}
                                </span>
                            </h5>
                        </Link>
                        <div style={{ textAlign: "center", padding: "10px 0px" }}>
                            <p className="card-text" style={{ textDecoration: "line-through", display: "inline" }} > ₹ {reprice}</p>
                            <p className="card-text" style={{ display: "inline" }}> ₹ {saleprice}</p>
                        </div>
                        <div style={{ textAlign: "center" }} key="productId">
                            <button
                                className="button butt" onClick={() => {
                                    dispatch(
                                        archiveAddToCart(productId, 1)
                                    );
                                }} disabled={source === 'OUT OF STOCK'}>
                                Add to Cart
                            </button>
                            <div>
                                {addtoitem.cartPageLink && addtoitem.AddToCartItem.items.map((element) => {
                                    return (
                                        element && (element.id === productId) ? <Link style={{ color: 'black', textDecoration: 'none' }} to="/cart">
                                            View Cart {element && element.quantity}
                                        </Link> : ''
                                    )
                                })
                                }
                            </div>



                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductItem

