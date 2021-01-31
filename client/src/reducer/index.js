import team from './team';
import category from "./category";
import riders from "./riders";
import cart from './cart';
import Admin from "./Admin";
import {combineReducers} from "redux";

export default combineReducers({
    category,
    team,
    riders,
    cart,
    Admin
});