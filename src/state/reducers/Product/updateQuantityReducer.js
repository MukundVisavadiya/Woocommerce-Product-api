import {
    UPDATE_CART_QUANTITY_REQUEST,
    UPDATE_CART_QUANTITY_SUCCESS,
    UPDATE_CART_QUANTITY_FAILURE,
    RESET_UPDATE_QUANTITY
} from "../../action/Product/action.type";

const initialState = {
    updateItemQuantity: {},
    updateQuantityLoading: false,
    updateQuantityError: false,
    updateSuccess: false
};

const updateQuantityReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_CART_QUANTITY_REQUEST:
            return {
                ...state,
                updateQuantityLoading: true,
                updateItemQuantity: {},
                updateQuantityError: false,
                updateSuccess: false
            };

        case UPDATE_CART_QUANTITY_SUCCESS:
            return {
                ...state,
                updateQuantityLoading: false,
                updateItemQuantity: action.payload,
                updateQuantityError: false,
                updateSuccess: true
            };

        case UPDATE_CART_QUANTITY_FAILURE:
            return {
                ...state,
                updateQuantityLoading: false,
                updateItemQuantity: action.payload,
                updateQuantityError: true,
                updateSuccess: false
            };

        case RESET_UPDATE_QUANTITY:
            return initialState

        default:
            return state;
    }
}

export default updateQuantityReducer;