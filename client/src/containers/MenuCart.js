import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';
import MenuCart from "../components/MenuCart";
import * as cartActions from '../actions/cart'




const mapStateToProps = ({ cart }) => ({
    items:  cart.item,

});
const mapDispatchToProps = dispatch => ({...bindActionCreators(cartActions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(MenuCart);
