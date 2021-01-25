import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as ridersActions from '../actions/rider';
import Rider from './rider'
import * as categoryActions from "../actions/Category";
import App from "./App";


const Team =(props) => {
    const {name , img, id, riderId,  isReady} = props;
    let {riders} = props;
    if(riders === null){
        riders = [];
    }
    console.log(riderId);
    return(
        <div className='Team'>
            <h2>{name}</h2>
            <img src={img} alt={id}/>
            <div>
            {

                !isReady ? "Загрузка членов команды...":
                riders.map(function e (cur,i,rider){
                    console.log(rider[i].id === riderId[i]);
                    if(rider[i].id === riderId[i]){
                        return <Rider {...rider[i]}></Rider>
                    }
                })

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
