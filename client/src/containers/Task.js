import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';
import Task from "../components/Task";
import * as adminActions from '../actions/admin'




const mapStateToProps = ({ Admin }) => ({
    item:  Admin.item,

});
const mapDispatchToProps = dispatch => ({...bindActionCreators(adminActions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
