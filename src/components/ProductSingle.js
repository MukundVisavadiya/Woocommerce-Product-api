import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchSingleProduct } from '../state/action/Product'
import Spinner from './Spinner';
import Singleitem from './Singleitem';
import { convert } from 'html-to-text';

function ProductSingle(props) {
    const { slug } = useParams();

    const apiData = useSelector((state) => state.product);
    const dispatch = useDispatch();
    console.log("single", apiData);

    useEffect(() => {
        dispatch(
            fetchSingleProduct(slug)
        );
    }, []);

    return (
        <>
            {apiData.loading && <Spinner />}
            {apiData.products.map((element) => {

                const options = {
                    wordwrap: 130,
                };
                const html = element.description;
                const text = convert(html, options);
                return (
                    <div className='container py-5'>
                        <div key={element && element.id}>
                            <Singleitem
                                imageLink={element && element.images[0].src}
                                Prodtitle={element && element.name}
                                reprice={element && element.regular_price}
                                saleprice={element && element.sale_price}
                                description={element && text}
                                category={element && element.categories[0].name}
                                source={element && (element.stock_status === 'instock') ? "SALE" : "OUT OF STOCK"}
                                imageLink2={element && element.images[1].src}
                                imageLink3={element && element.images[2].src}
                            />
                        </div>
                    </div>
                );
            })}

        </>

    )
}

export default ProductSingle
