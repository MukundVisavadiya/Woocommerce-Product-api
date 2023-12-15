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
    // console.log(orderData.orderDataItem.totals.total_price);
    console.log();

    useEffect(() => {
        dispatch(
            getOrderList(order_id)
        );
    }, []);

    return (
        <>
            <div className='container py-5'>
                <div className='border border-dark'>
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
                <div className='border border-dark'>
                    <h2 className='text-center'>Order Details</h2>
                </div>
            </div>
        </>
    )
}

export default Thanks
