import {
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_FAILURE,
    SET_TOTAL_PAGES,
    SET_TOTAL_PRODUCTS
} from "../../action/Product/action.type";

const initialState = {
    products: [],
    loading: false,
    error: null,
    totalProducts: null,
    totalPage: null,
    page: 1,
};

const productReducer = (state = initialState, action) => {

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

        case SET_TOTAL_PAGES:
            return {
                ...state,
                totalPage: action.payload
            };

        case SET_TOTAL_PRODUCTS:
            return {
                ...state,
                totalProducts: action.payload
            }

        default:
            return state;
    }
}

export default productReducer;

