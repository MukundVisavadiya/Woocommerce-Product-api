import {
    POST_APPLY_COUPON_REQUEST,
    POST_APPLY_COUPON_SUCCESS,
    POST_APPLY_COUPON_FAILURE
} from '../../action/Product/action.type';

const initialState = {
    applyCouponItem: {},
    applyCouponLoading: false,
    applyCouponError: false,
    applyCouponSuccess: false,
};

const applyCouponReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case POST_APPLY_COUPON_REQUEST:
            return {
                ...state,
                applyCouponItem: {},
                applyCouponLoading: true,
                applyCouponError: false,
                applyCouponSuccess: false,
            };

        case POST_APPLY_COUPON_SUCCESS:
            return {
                ...state,
                applyCouponItem: action.payload,
                applyCouponLoading: false,
                applyCouponError: false,
                applyCouponSuccess: true,
            };

        case POST_APPLY_COUPON_FAILURE:
            return {
                ...state,
                applyCouponItem: action.payload.applyCouponError,
                applyCouponLoading: false,
                applyCouponError: true,
                applyCouponSuccess: false,
            };

        default:
            return state;
    }
}

export default applyCouponReducer;