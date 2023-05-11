
import { combineReducers } from "redux";
import {productReducer,categoryReducer} from "./ecommerce";
import { cartReducer } from "./cartReducer";

export default combineReducers({
    Product:productReducer,
    Category:categoryReducer,
    Cart:cartReducer,
});