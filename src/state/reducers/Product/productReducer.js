import {
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_FAILURE,
    FETCH_SINGLE_PRODUCTS_REQUEST,
    FETCH_SINGLE_PRODUCTS_SUCCESS,
    FETCH_SINGLE_PRODUCTS_FAILURE
} from "../../action/Product/action.type";

const initialState = {
    products: [],
    loading: false,
    error: null,
};

const productReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: null
            };

        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case FETCH_SINGLE_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_SINGLE_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: null
            };

        case FETCH_SINGLE_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
}

export default productReducer;

