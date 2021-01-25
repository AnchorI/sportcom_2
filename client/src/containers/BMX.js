import BMX from '../components/BMX';
import * as teamActions from '../actions/team';
import * as ridersActions from '../actions/rider';


import {connect} from "react-redux";
import {bindActionCreators} from "redux";




const mapStateToProps = ({team, riders}) => ({

    team : team.item,
    riders : riders.item,
    isReadyCat: team.isReadyTeam,
});
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(teamActions, dispatch)
    , ...bindActionCreators(ridersActions, dispatch)
});



export default connect(mapStateToProps,mapDispatchToProps)(BMX);
