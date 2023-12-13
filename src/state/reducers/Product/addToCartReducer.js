import {
    ADD_TO_CART_ITEM_REQUEST,
    ADD_TO_CART_ITEM_SUCCESS,
    ADD_TO_CART_ITEM_FAILURE
} from "../../action/Product/action.type";

const initialState = {
    AddToCartItem: {},
    AddToCartItemLoading: false,
    AddToCartItemError: null,
    cartPageLink: false
};

const addToCartReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case ADD_TO_CART_ITEM_REQUEST:
            return {
                ...state,
                AddToCartItemLoading: true,
                AddToCartItemError: null,
                cartPageLink: false
            };

        case ADD_TO_CART_ITEM_SUCCESS:
            return {
                ...state,
                AddToCartItemLoading: false,
                AddToCartItem: action.payload,
                AddToCartItemError: null,
                cartPageLink: true
            };

        case ADD_TO_CART_ITEM_FAILURE:
            return {
                ...state,
                AddToCartItemLoading: false,
                AddToCartItemError: action.payload,
                cartPageLink: false
            };

        default:
            return state;
    }
}

export default addToCartReducer;