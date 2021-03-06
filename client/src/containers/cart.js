import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Rider from "../components/rider";
import * as cartActions from '../actions/cart'



const mapStateToProps = ({ cart }) => ({
    addedCount : 0,
});
const mapDispatchToProps = dispatch => ({...bindActionCreators(cartActions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(Rider);
