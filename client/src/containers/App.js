import {connect} from 'react-redux';
import {setRiders} from "../actions/rider";

import App from '../component/App'

const mapStateToProps = ({ riders }) => ({
    riders: riders.item,
    isReady: riders.isReady
});
const mapDispatchToProps = dispatch => ({setRiders : riders => dispatch(setRiders(riders))});

export default connect(mapStateToProps, mapDispatchToProps)(App);
