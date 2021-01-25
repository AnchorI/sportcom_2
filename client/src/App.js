import React, {Component} from 'react'
import {connect} from "react-dedux";

class App extends Component{
    render() {
        return(
            <div>

            </div>
        );
    }
}
const mapStateToProps = ({}) => ({
    team : team.item,
});
const dispatchToProps = {}
export default connect(mapStateToProps,
dispatch =>({})) (App);
