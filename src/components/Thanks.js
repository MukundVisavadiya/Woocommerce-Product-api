import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getOrderList } from '../state/action/Product';

function Thanks() {

    const { order_id } = useParams();
    const dispatch = useDispatch();
    const orderData = useSelector((state) => state.orderData);
    console.log(orderData);

    useEffect(() => {
        dispatch(
            getOrderList(order_id)
        );
    }, []);

    if (!orderData.orderDataItem || !orderData.orderDataItem.items) {
        return <div>
            <h2 className='text-center mt-5'>
                Error: Invalid data structure
            </h2>
        </div>;
    }

    return (
        <>
            <div className='container py-5'>
                <div>
                    <h2 className='text-center'>Thank You. Your Order has Been Received.</h2>
                </div>
                <div className='py-4'>
                    <table className="table table-hover border border-dark">
                        <thead>
                            <tr>
                                <th>ORDER NUMBER</th>
                                <th>TOTAL</th>
                                <th>EMAIL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{orderData.orderDataItem.id}</td>
                                <td>{orderData && (orderData?.orderDataItem?.totals?.total_price / 100).toFixed(2)}</td>
                                <td>{orderData?.orderDataItem?.billing_address?.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h2 className='text-center'>Order Details</h2>
                <div className='py-4'>
                    <table className="table table-hover border border-dark">
                        <thead>
                            <tr>
                                <th>PRODUCT</th>
                                <th>TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderData && orderData.orderDataItem && orderData.orderDataItem.items.map((element, index) => (
                                <tr key={index}>
                                    <td>{element && element.name} × {element && element.quantity}</td>
                                    <td>{element && (element.prices.price / 100).toFixed(2)}</td>
                                </tr>
                            ))}
                            <tr>
                                <th>Total</th>
                                <td>{(orderData.orderDataItem.totals.total_price / 100).toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h2 className='text-center'>Billing Address</h2>
                <div className='border border-dark'>
                    <p style={{ margin: '0', padding: '5px 10px' }}>{orderData.orderDataItem.billing_address.first_name}{orderData.orderDataItem.billing_address.last_name}</p>
                    <p style={{ margin: '0', padding: '5px 10px' }}>{orderData.orderDataItem.billing_address.address_1}</p>
                    <p style={{ margin: '0', padding: '5px 10px' }}>{orderData.orderDataItem.billing_address.address_2}</p>
                    <p style={{ margin: '0', padding: '5px 10px' }}>{orderData.orderDataItem.billing_address.city}{orderData.orderDataItem.billing_address.postcode}</p>
                    <p style={{ margin: '0', padding: '5px 10px' }}>{orderData.orderDataItem.billing_address.state}</p>
                    <p style={{ margin: '0', padding: '5px 10px' }}>{orderData.orderDataItem.billing_address.phone}</p>
                </div>
            </div>
        </>
    )
}

export default Thanks
