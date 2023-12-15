import {
    GET_ORDER_DATA_REQUEST,
    GET_ORDER_DATA_SUCCESS,
    GET_ORDER_DATA_FAILURE
} from "../../action/Product/action.type";

const initialState = {
    orderDataItem: {},
    orderDataLoading: false,
    orderDataError: false,
    orderDataSuccess: false,
};

const orderDataReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case GET_ORDER_DATA_REQUEST:
            return {
                ...state,
                orderDataItem: {},
                orderDataLoading: true,
                orderDataError: false,
                orderDataSuccess: false,
            };

        case GET_ORDER_DATA_SUCCESS:
            return {
                ...state,
                orderDataItem: action.payload,
                orderDataLoading: false,
                orderDataError: false,
                orderDataSuccess: true,
            };

        case GET_ORDER_DATA_FAILURE:
            return {
                ...state,
                orderDataItem: action.payload,
                orderDataLoading: false,
                orderDataError: true,
                orderDataSuccess: false,
            };

        default:
            return state;
    }
}

export default orderDataReducer;