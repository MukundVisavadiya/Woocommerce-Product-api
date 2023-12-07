import React from 'react'
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchProduct } from '../state/action/Product'
import ProductItem from './ProductItem';
import Spinner from './Spinner';

function Product(props) {

    const [Page, setPage] = useState(1);
    // all product api call
    const apiData = useSelector((state) => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            fetchProduct(Page, props.per_page,)
        );
    }, []);

    const handlePrevious = () => {
        setPage(Page - 1);
        dispatch(
            fetchProduct(Page - 1, props.per_page,)
        );
    };

    const handleNext = () => {
        setPage(Page + 1);
        dispatch(
            fetchProduct(Page + 1, props.per_page)
        );
    };

    const handlePageClick = (currentPage) => {
        setPage(currentPage);
        dispatch(fetchProduct(currentPage, props.per_page));
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= apiData.totalPage; i++) {
            pageNumbers.push(
                <button key={i} onClick={() => handlePageClick(i)} className={Page === i ? 'btn btn-primary text-white mx-2' : 'btn btn-info text-white mx-2'}>
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

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
                                    url={element && `/shop/${element.slug}`}
                                    reprice={element && element.regular_price}
                                    saleprice={element && element.sale_price}
                                    source={element && (element.stock_status === 'instock') ? "SALE" : "OUT OF STOCK"}
                                />
                            </div>

                        );
                    })}
                </div>
                <div className="container justify-content-center py-5 pagination" >
                    <button
                        type="button"
                        disabled={Page <= 1}
                        className="btn btn-info text-white mx-2"
                        onClick={handlePrevious}
                    >
                        &larr; Previous
                    </button>
                    {renderPageNumbers()}
                    <button
                        type="button"
                        disabled={
                            Page + 1 >
                            Math.ceil(apiData.totalProducts / props.per_page)
                        }
                        className="btn btn-info text-white mx-2"
                        onClick={handleNext}
                    >
                        Next &rarr;
                    </button>
                </div>
            </div>
        </>

    )
}

export default Product

