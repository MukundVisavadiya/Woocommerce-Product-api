import React from 'react'
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchProduct } from '../state/action/Product'
import ProductItem from './ProductItem';
import Spinner from './Spinner';

function Product(props) {

    const apiData = useSelector((state) => state.product);
    console.log("This is my apidata", apiData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            fetchProduct()
        );
    }, []);

    return (
        <>
            <h2 className="text-center" style={{ marginTop: '50px' }}>STATIONERY SHOP</h2>
            <div className="container">
                <div className="row py-4">
                    {apiData.loading && <Spinner />}
                    {apiData.products.map((element) => {
                        return (
                            <div className="col-md-4" key={element && element.id}>
                                <ProductItem
                                    title={element && element.name}
                                    imgUrl={element && element.images[0].src}
                                    url={element && element.slug}
                                    reprice={element && element.regular_price}
                                    saleprice={element && element.sale_price}
                                    source={element && (element.stock_status === 'instock') ? "SALE" : "OUT OF STOCK"}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>

    )
}

export default Product

