import { combineReducers } from "redux";
import productReducer from './productReducer';
import singleProductReducer from './singleProductReducer';
import cartReducer from "./cartReducer";
import addToCartReducer from "./addToCartReducer"
import removeItemReducer from "./removeItemReducer";
import updateQuantityReducer from "./updateQuantityReducer";



const rootReducer = combineReducers({
    product: productReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer,
    addItem: addToCartReducer,
    removeItem: removeItemReducer,
    updateQuantity: updateQuantityReducer
});

export default rootReducer;