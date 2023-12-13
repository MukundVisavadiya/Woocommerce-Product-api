import {
    REMOVE_CART_ITEM_REQUEST,
    REMOVE_CART_ITEM_SUCCESS,
    REMOVE_CART_ITEM_FAILURE,
    RESET_REMOVE_CART_ITEM
} from "../../action/Product/action.type";

const initialState = {
    removeItem: {},
    removeItemLoading: false,
    removeItemError: false,
    removeItemSuccess: false
};

const removeItemReducer = (state = initialState, action) => {

    switch (action.type) {
        case REMOVE_CART_ITEM_REQUEST:
            return {
                ...state,
                removeItem: {},
                removeItemLoading: true,
                removeItemError: false,
                removeItemSuccess: false
            };

        case REMOVE_CART_ITEM_SUCCESS:
            return {
                ...state,
                removeItemLoading: false,
                removeItem: action.payload,
                removeItemError: false,
                removeItemSuccess: true
            };

        case REMOVE_CART_ITEM_FAILURE:
            return {
                ...state,
                removeItem: action.payload,
                removeItemLoading: false,
                removeItemError: true,
                removeItemSuccess: false
            };

        case RESET_REMOVE_CART_ITEM:
            return initialState;

        default:
            return state;
    }
}

export default removeItemReducer;