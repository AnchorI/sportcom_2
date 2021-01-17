import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';
import MenuCart from "../component/MenuCart";
import * as cartActions from '../actions/cart'
import uniqBy from 'lodash/uniqBy';



const mapStateToProps = ({ cart }) => ({
    items:  cart.item,

});
const mapDispatchToProps = dispatch => ({...bindActionCreators(cartActions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(MenuCart);
