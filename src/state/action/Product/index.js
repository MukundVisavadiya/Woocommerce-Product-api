import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    FETCH_SINGLE_PRODUCTS_REQUEST,
    FETCH_SINGLE_PRODUCTS_SUCCESS,
    FETCH_SINGLE_PRODUCTS_FAILURE,
    SET_TOTAL_PAGES,
    SET_TOTAL_PRODUCTS,
    FETCH_CART_DETAIL_REQUEST,
    FETCH_CART_DETAIL_SUCCESS,
    FETCH_CART_DETAIL_FAILURE,
    ADD_TO_CART_ITEM_REQUEST,
    ADD_TO_CART_ITEM_SUCCESS,
    ADD_TO_CART_ITEM_FAILURE,
    REMOVE_CART_ITEM_REQUEST,
    REMOVE_CART_ITEM_SUCCESS,
    REMOVE_CART_ITEM_FAILURE,
    UPDATE_CART_QUANTITY_REQUEST,
    UPDATE_CART_QUANTITY_SUCCESS,
    UPDATE_CART_QUANTITY_FAILURE
} from "./action.type";


export const fetchProduct = (page, per_page) => {
    return async (dispatch) => {

        dispatch({
            type: FETCH_PRODUCTS_REQUEST,
        });

        const API_URL = 'https://192.168.1.12/search/wp-json/wc/v3';
        const CONSUMER_KEY = 'ck_c62b10d9d26ea29df0c85a1f61d1b9190212bcee';
        const CONSUMER_SECRET = 'cs_c73819658d4f330f709878668e343076ac627d9a';

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
        const CONSUMER_KEY = 'ck_c62b10d9d26ea29df0c85a1f61d1b9190212bcee';
        const CONSUMER_SECRET = 'cs_c73819658d4f330f709878668e343076ac627d9a';

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


export const fetchCart = () => {
    return async (dispatch) => {

        dispatch({
            type: FETCH_CART_DETAIL_REQUEST,
        });

        const API_URL = 'https://192.168.1.12/search/wp-json/wc/store/v1';
        const CONSUMER_KEY = 'ck_c62b10d9d26ea29df0c85a1f61d1b9190212bcee';
        const CONSUMER_SECRET = 'cs_c73819658d4f330f709878668e343076ac627d9a';

        const url = `${API_URL}/cart?consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`

        try {
            let data = await fetch(url, {
                method: "GET",
                ContentType: 'application/json',
            });
            let parseData = await data.json();
            dispatch({
                type: FETCH_CART_DETAIL_SUCCESS,
                payload: parseData,
            });
        } catch (error) {
            dispatch({
                type: FETCH_CART_DETAIL_FAILURE,
                payload: {
                    error,
                },
            });
        }

    };
};

export const archiveAddToCart = (productId, counter) => {
    return async (dispatch) => {

        dispatch({
            type: ADD_TO_CART_ITEM_REQUEST,
        });

        const API_URL = 'https://192.168.1.12/search/wp-json/wc/store/v1';
        const CONSUMER_KEY = 'ck_c62b10d9d26ea29df0c85a1f61d1b9190212bcee';
        const CONSUMER_SECRET = 'cs_c73819658d4f330f709878668e343076ac627d9a';

        const url = `${API_URL}/cart/add-item?id=${productId}&quantity=${counter}&consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`

        try {
            let data = await fetch(url, {
                method: "POST",
                headers: {
                }
            });
            let parseData = await data.json();

            dispatch({
                type: ADD_TO_CART_ITEM_SUCCESS,
                payload: parseData,
            });
        } catch (error) {
            dispatch({
                type: ADD_TO_CART_ITEM_FAILURE,
                payload: {
                    error,
                },
            });
        }

    };
};

export const removeCartItem = (itemKey) => {
    return async (dispatch) => {

        dispatch({
            type: REMOVE_CART_ITEM_REQUEST,
        });

        const API_URL = 'https://192.168.1.12/search/wp-json/wc/store/v1';
        const CONSUMER_KEY = 'ck_c62b10d9d26ea29df0c85a1f61d1b9190212bcee';
        const CONSUMER_SECRET = 'cs_c73819658d4f330f709878668e343076ac627d9a';

        const url = `${API_URL}/cart/remove-item?key=${itemKey}&consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`

        try {
            let data = await fetch(url, {
                method: "POST",
                headers: {
                }
            });
            let parseData = await data.json();

            dispatch({
                type: REMOVE_CART_ITEM_SUCCESS,
                payload: parseData,
            });
        } catch (error) {
            dispatch({
                type: REMOVE_CART_ITEM_FAILURE,
                payload: {
                    error,
                },
            });
        }

    };
};

export const updateCartQuantity = (itemKey, quantity) => {
    return async (dispatch) => {

        dispatch({
            type: UPDATE_CART_QUANTITY_REQUEST,
        });

        const API_URL = 'https://192.168.1.12/search/wp-json/wc/store/v1';
        const CONSUMER_KEY = 'ck_c62b10d9d26ea29df0c85a1f61d1b9190212bcee';
        const CONSUMER_SECRET = 'cs_c73819658d4f330f709878668e343076ac627d9a';

        const url = `${API_URL}/cart/update-item?key=${itemKey}&quantity=${quantity}&consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`

        try {
            let data = await fetch(url, {
                method: "POST",
                headers: {
                }
            });
            let parseData = await data.json();

            dispatch({
                type: UPDATE_CART_QUANTITY_SUCCESS,
                payload: parseData,
            });
        } catch (error) {
            dispatch({
                type: UPDATE_CART_QUANTITY_FAILURE,
                payload: {
                    error,
                },
            });
        }

    };
};



