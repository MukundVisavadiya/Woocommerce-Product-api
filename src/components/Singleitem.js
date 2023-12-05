import React, { useState } from 'react'
import Product from './Product'
import { Link } from 'react-router-dom';

function Singleitem(props) {
    let { imageLink, Prodtitle, reprice, saleprice, description, category, source, imageLink2, imageLink3 } = props

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        if (counter !== 0) {
            setCounter(counter - 1);
        }
    };

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <img
                            style={{ width: "100%", height: "100%", maxHeight: "650px" }}
                            src={
                                !imageLink
                                    ? "Product Image"
                                    : imageLink
                            }
                        />
                        <span className="badge rounded-pill bg-danger" style={{ display: "flex", justifyContent: "flex-end", position: "absolute", left: 330, top: 120 }}>{source}</span>
                        <div className='row' style={{ padding: "18px 6px 0px 0px" }}>
                            <div className='col-12 col-md-3'>
                                <img
                                    style={{ width: "100%", height: "100%", }}
                                    src={
                                        !imageLink2
                                            ? "Product Image"
                                            : imageLink2
                                    }
                                />
                            </div>
                            <div className='col-12 col-md-3'>
                                <img
                                    style={{ width: "100%", height: "100%", }}
                                    src={
                                        !imageLink3
                                            ? "Product Image"
                                            : imageLink3
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <h2 style={{ padding: "20px 10px" }}>{Prodtitle} </h2>
                        <h2 style={{ textDecoration: "line-through", display: "inline", padding: "20px 10px" }} >₹ {reprice}</h2>
                        <h2 style={{ display: "inline", padding: "20px 10px" }}> ₹ {saleprice}</h2>
                        <p style={{ padding: "20px 10px" }}>{description}</p>
                        <div style={{ padding: "20px 10px" }}>
                            <button className='increment-decrement-button' onClick={increment}>+</button>
                            <span className="counter">{counter}</span>
                            <button className='increment-decrement-button' onClick={decrement}>-</button>
                            <Link
                                rel="noreferrer"
                                to='/'
                                className="button butt"
                                target="_blank"
                                style={{ marginLeft: "28px" }}
                            >
                                Add to Cart
                            </Link>
                        </div>
                        <h4 style={{ padding: "20px 10px" }} >Category: {category}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Singleitem
