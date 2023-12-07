import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchSingleProduct } from '../state/action/Product'
import Spinner from './Spinner';
import Singleitem from './Singleitem';

function ProductSingle() {
    const { slug } = useParams();

    const apiData = useSelector((state) => state.singleProduct);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            fetchSingleProduct(slug)
        );
    }, []);

    const element = apiData.singleProducts[0];

    return (
        <>
            {apiData.SingleProLoading && <Spinner />}
            <div className='container py-5'>
                <div key={element && element.id}>
                    <Singleitem
                        imageLink={element && element.images.length > 0 ? element.images[0].src : ''}
                        Prodtitle={element && element.name}
                        reprice={element && element.regular_price}
                        saleprice={element && element.sale_price}
                        description={element && element.description.replace(/<[^>]+>/g, '')}
                        category={element && element.categories[0].name}
                        source={element && (element.stock_status === 'instock') ? "SALE" : "OUT OF STOCK"}
                        imageLink2={element && element.images.length > 1 ? element.images[1].src : ''}
                        imageLink3={element && element.images.length > 2 ? element.images[2].src : ''}
                    />
                </div>
            </div>
        </>

    )
}

export default ProductSingle
