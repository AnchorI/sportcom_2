import React, {Component} from 'react'
//import {connect} from "react-dedux";
import Checkout from "./checkout";

class App extends Component{
    render() {
        return(
            <div>
            <Checkout></Checkout>
            </div>
        );
    }
}
// const mapStateToProps = ({}) => ({
//     team : team.item,
// });
// const dispatchToProps = {}
export default App;
