import {
    FETCH_CART_DETAIL_REQUEST,
    FETCH_CART_DETAIL_SUCCESS,
    FETCH_CART_DETAIL_FAILURE
} from "../../action/Product/action.type";

const initialState = {
    Item: {},
    ItemLoading: false,
    ItemError: null,
};

const cartReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case FETCH_CART_DETAIL_REQUEST:
            return {
                ...state,
                ItemLoading: true,
                ItemError: null
            };

        case FETCH_CART_DETAIL_SUCCESS:
            return {
                ...state,
                ItemLoading: false,
                Item: action.payload,
                ItemError: null
            };

        case FETCH_CART_DETAIL_FAILURE:
            return {
                ...state,
                ItemLoading: false,
                ItemError: action.payload
            };

        default:
            return state;
    }
}

export default cartReducer;