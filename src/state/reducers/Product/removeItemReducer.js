import {
    REMOVE_CART_ITEM_REQUEST,
    REMOVE_CART_ITEM_SUCCESS,
    REMOVE_CART_ITEM_FAILURE
} from "../../action/Product/action.type";

const initialState = {
    removeItem: {},
    removeItemLoading: false,
    removeItemError: null,
};

const removeItemReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case REMOVE_CART_ITEM_REQUEST:
            return {
                ...state,
                removeItemLoading: true,
                removeItemError: null
            };

        case REMOVE_CART_ITEM_SUCCESS:
            return {
                ...state,
                removeItemLoading: false,
                removeItem: action.payload,
                removeItemError: null
            };

        case REMOVE_CART_ITEM_FAILURE:
            return {
                ...state,
                removeItemLoading: false,
                removeItemError: action.payload
            };

        default:
            return state;
    }
}

export default removeItemReducer;