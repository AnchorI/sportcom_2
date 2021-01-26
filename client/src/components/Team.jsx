import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as ridersActions from '../actions/rider';
import Rider from '../containers/cart';
import * as categoryActions from "../actions/Category";
import App from "./App";


const Team =(props) => {
    const {name , img, id, riderId,  isReady} = props;
    let {riders} = props;
    if(riders === null){
        riders = [];
    }
    const FiltredRiders = riders.filter(e=>riderId.find(i=>i === e.id));
    return(
        <div className='Team'>
            <h2>{name}</h2>
            <img src={img} alt={id}/>
            <div>
            {

                !isReady ? "Загрузка членов команды...":
                FiltredRiders.map( rider => (

                <Rider {...rider}></Rider>

                ))

            }</div>
        </div>
    )


};

const mapStateToProps = ({riders}) => ({

    riders : riders.item,
    isReady: riders.isReady,
});
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(ridersActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Team);
