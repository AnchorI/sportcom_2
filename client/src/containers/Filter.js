import {connect} from "react-redux";
import Filter from '../component/Filter';
import {bindActionCreators} from "redux";
import * as filterActions from "../actions/filter";


const mapStateToProps = ({ filter }) => ({
   filterBy: filter.filterBy,

});
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filterActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

