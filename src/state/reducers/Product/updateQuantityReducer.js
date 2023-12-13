import {
    UPDATE_CART_QUANTITY_REQUEST,
    UPDATE_CART_QUANTITY_SUCCESS,
    UPDATE_CART_QUANTITY_FAILURE
} from "../../action/Product/action.type";

const initialState = {
    updateItemQuantity: {},
    updateQuantityLoading: false,
    updateQuantityError: null,
};

const updateQuantityReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case UPDATE_CART_QUANTITY_REQUEST:
            return {
                ...state,
                updateQuantityLoading: true,
                updateQuantityError: null
            };

        case UPDATE_CART_QUANTITY_SUCCESS:
            return {
                ...state,
                updateQuantityLoading: false,
                updateItemQuantity: action.payload,
                updateQuantityError: null
            };

        case UPDATE_CART_QUANTITY_FAILURE:
            return {
                ...state,
                updateQuantityLoading: false,
                updateQuantityError: action.payload
            };

        default:
            return state;
    }
}

export default updateQuantityReducer;