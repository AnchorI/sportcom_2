import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';
import  adminPage from "../components/adminPage";
import * as adminActions from '../actions/admin';




const mapStateToProps = ({ Admin }) => ({
    task:  Admin.item,
    isReadyAdmin: Admin.isReadyAdmin
});
const mapDispatchToProps = dispatch => ({...bindActionCreators(adminActions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(adminPage);
