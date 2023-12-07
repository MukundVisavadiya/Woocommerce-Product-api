import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    FETCH_SINGLE_PRODUCTS_REQUEST,
    FETCH_SINGLE_PRODUCTS_SUCCESS,
    FETCH_SINGLE_PRODUCTS_FAILURE,
    SET_TOTAL_PAGES,
    SET_TOTAL_PRODUCTS
} from "./action.type";


export const fetchProduct = (page, per_page) => {
    return async (dispatch) => {

        dispatch({
            type: FETCH_PRODUCTS_REQUEST,
        });

        const API_URL = 'https://192.168.1.12/search/wp-json/wc/v3';
        const CONSUMER_KEY = 'ck_271b048e59d30d7c94cbc4e0249255c7462bd1ae';
        const CONSUMER_SECRET = 'cs_d691153996449038f21fda35c19d455a816e77d1';

        const url = `${API_URL}/products?page=${page}&per_page=${per_page}&consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`;

        try {
            let data = await fetch(url, {
                method: 'get',
                headers: {}
            });
            let headers = data.headers;
            let totalProducts = headers.get('X-Wp-Total');
            let totalPages = headers.get('X-Wp-Totalpages');

            dispatch(setTotalProducts(totalProducts));
            dispatch(setTotalPages(totalPages));

            let parseData = await data.json();

            dispatch({
                type: FETCH_PRODUCTS_SUCCESS,
                payload: parseData,
            });
        } catch (error) {
            dispatch({
                type: FETCH_PRODUCTS_FAILURE,
                payload: {
                    error,
                },
            });
        }

    };
};

export const setTotalProducts = (totalProducts) => ({
    type: SET_TOTAL_PRODUCTS,
    payload: totalProducts,
});

export const setTotalPages = (totalPages) => ({
    type: SET_TOTAL_PAGES,
    payload: totalPages,
});


export const fetchSingleProduct = (slug) => {
    return async (dispatch) => {

        dispatch({
            type: FETCH_SINGLE_PRODUCTS_REQUEST,
        });

        const API_URL = 'https://192.168.1.12/search/wp-json/wc/v3';
        const CONSUMER_KEY = 'ck_271b048e59d30d7c94cbc4e0249255c7462bd1ae';
        const CONSUMER_SECRET = 'cs_d691153996449038f21fda35c19d455a816e77d1';

        const url = `${API_URL}/products?slug=${slug}&consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`;

        try {
            let data = await fetch(url);
            let parseData = await data.json();
            console.log('Header DATA', parseData)
            dispatch({
                type: FETCH_SINGLE_PRODUCTS_SUCCESS,
                payload: parseData,
            });
        } catch (error) {
            dispatch({
                type: FETCH_SINGLE_PRODUCTS_FAILURE,
                payload: {
                    error,
                },
            });
        }

    };
};