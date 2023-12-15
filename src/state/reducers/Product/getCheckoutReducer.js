import {
    GET_CHECKOUT_REQUEST,
    GET_CHECKOUT_SUCCESS,
    GET_CHECKOUT_FAILURE
} from "../../action/Product/action.type";

const initialState = {
    checkoutDetailItem: {},
    checkoutDetaiLoading: false,
    checkoutDetaiError: false,
    checkoutDetailSuccess: false,
};

const getCheckoutReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case GET_CHECKOUT_REQUEST:
            return {
                ...state,
                checkoutDetailItem: {},
                checkoutDetaiLoading: true,
                checkoutDetaiError: false,
                checkoutDetailSuccess: false,
            };

        case GET_CHECKOUT_SUCCESS:
            return {
                ...state,
                checkoutDetailItem: action.payload,
                checkoutDetaiLoading: false,
                checkoutDetaiError: false,
                checkoutDetailSuccess: true,
            };

        case GET_CHECKOUT_FAILURE:
            return {
                ...state,
                checkoutDetailItem: action.payload,
                checkoutDetaiLoading: false,
                checkoutDetaiError: true,
                checkoutDetailSuccess: false,
            };

        default:
            return state;
    }
}

export default getCheckoutReducer;