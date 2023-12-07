import { combineReducers } from "redux";
import productReducer from './productReducer';
import singleProductReducer from './singleProductReducer';


const rootReducer = combineReducers({
    product: productReducer,
    singleProduct: singleProductReducer
});

export default rootReducer;