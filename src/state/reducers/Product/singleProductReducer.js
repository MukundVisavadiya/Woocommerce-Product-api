import {
    FETCH_SINGLE_PRODUCTS_REQUEST,
    FETCH_SINGLE_PRODUCTS_SUCCESS,
    FETCH_SINGLE_PRODUCTS_FAILURE
} from "../../action/Product/action.type";

const initialState = {
    singleProducts: {},
    SingleProLoading: false,
    SingleProError: null,
};

const singleProductReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_SINGLE_PRODUCTS_REQUEST:
            return {
                ...state,
                SingleProLoading: true,
                SingleProError: null
            };

        case FETCH_SINGLE_PRODUCTS_SUCCESS:
            return {
                ...state,
                SingleProLoading: false,
                singleProducts: action.payload,
                SingleProError: null
            };

        case FETCH_SINGLE_PRODUCTS_FAILURE:
            return {
                ...state,
                SingleProLoading: false,
                SingleProError: action.payload
            };

        default:
            return state;
    }
}

export default singleProductReducer;