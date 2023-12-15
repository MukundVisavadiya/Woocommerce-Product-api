import {
    POST_PLACE_CHECKOUT_REQUEST,
    POST_PLACE_CHECKOUT_SUCCESS,
    POST_PLACE_CHECKOUT_FAILURE
} from "../../action/Product/action.type";

const initialState = {
    placeOrderItem: {},
    placeOrderLoading: false,
    placeOrderError: false,
    placeOrderSuccess: false,
};

const placeOrderReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case POST_PLACE_CHECKOUT_REQUEST:
            return {
                ...state,
                placeOrderItem: {},
                placeOrderLoading: true,
                placeOrderError: false,
                placeOrderSuccess: false,
            };

        case POST_PLACE_CHECKOUT_SUCCESS:
            return {
                ...state,
                placeOrderItem: action.payload,
                placeOrderLoading: false,
                placeOrderError: false,
                placeOrderSuccess: true,
            };

        case POST_PLACE_CHECKOUT_FAILURE:
            return {
                ...state,
                placeOrderItem: action.payload,
                placeOrderLoading: false,
                placeOrderError: true,
                placeOrderSuccess: false,
            };

        default:
            return state;
    }
}

export default placeOrderReducer;