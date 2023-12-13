import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeCartItem } from '../state/action/Product'
import { updateCartQuantity } from '../state/action/Product'
import { fetchCart } from '../state/action/Product';
import { useEffect } from 'react'
import { RESET_UPDATE_QUANTITY, RESET_REMOVE_CART_ITEM } from '../state/action/Product/action.type'

function CartItem(props) {
    let { cardImage, ProductTitle, singleUrl, saleprice, reprice, savePrice, cartDescription, PriceTotal, ItemCount, itemKey } = props
    const dispatch = useDispatch();
    const removeItem = useSelector((state) => state.removeItem);
    const updateQuantity = useSelector((state) => state.updateQuantity);

    useEffect(() => {
        if (updateQuantity && updateQuantity.updateSuccess) {
            dispatch(
                fetchCart()
            )
            dispatch({ type: RESET_UPDATE_QUANTITY });
        }
    }, [updateQuantity]);

    useEffect(() => {
        if (removeItem && removeItem.removeItemSuccess) {
            dispatch(
                fetchCart()
            )
            dispatch({ type: RESET_REMOVE_CART_ITEM });
        }
    })

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-10 border-bottom border-dark'>
                        <div className="row">
                            <div className='col-12 col-md-4'>
                                <img style={{ width: '100%', height: '100%', padding: '10px' }} src={cardImage} alt="Product Image" />
                            </div>
                            <div className='col-12 col-md-8'>
                                <Link className='text-dark' to={singleUrl}><h4 className='pt-2'>{ProductTitle}</h4></Link>
                                <p className="card-text" style={{ textDecoration: "line-through", display: "inline", fontSize: "18px" }} > ₹ {reprice}</p>
                                <p className="card-text" style={{ display: "inline", fontSize: "18px" }}> ₹ {saleprice}</p>
                                <h6 className="card-save">SAVE ₹ {savePrice}</h6>
                                <p style={{ fontSize: '18px' }}>{cartDescription}</p>
                                <div className='item-counter'>
                                    <button className='Counter' disabled={ItemCount === 1} onClick={() => {
                                        dispatch(
                                            updateCartQuantity(itemKey, ItemCount - 1)
                                        );
                                    }} >-</button>
                                    {ItemCount}
                                    <button className='Counter' onClick={() => {
                                        dispatch(
                                            updateCartQuantity(itemKey, ItemCount + 1)
                                        );
                                    }} >+</button>
                                </div>
                                <button className='remove-item-button' onClick={() => {
                                    dispatch(
                                        removeCartItem(itemKey)
                                    );
                                }}>Remove Item</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-2 border-bottom border-dark '>
                        <p className='pt-2' style={{ float: 'right' }}>₹ {PriceTotal}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem
