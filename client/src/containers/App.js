import App from '../components/App'
import * as categoryActions from '../actions/Category';
import {connect} from "react-redux";

import {bindActionCreators} from "redux";


const mapStateToProps = ({category}) => ({

    category : category.item,
    isReadyCat: category.isReadyCat,
});
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(categoryActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
