import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as cartActions from '../actions/cart'
import CheckoutPage from "../components/checkoutPage";




const mapStateToProps = ({ cart }) => ({
    items:  cart.item,

});
const mapDispatchToProps = dispatch => ({...bindActionCreators(cartActions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
