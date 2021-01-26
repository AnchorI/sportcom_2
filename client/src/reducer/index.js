import team from './team';
import category from "./category";
import riders from "./riders";
import cart from './cart';
import {combineReducers} from "redux";

export default combineReducers({
    category,
    team,
    riders,
    cart
});