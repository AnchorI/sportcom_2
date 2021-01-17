import {combineReducers} from "redux";
import riders from "./riders";
import cart from './cart'
import filter from "./filter";
export default combineReducers({
    riders,
    cart,
    filter,
    });