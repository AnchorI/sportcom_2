import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as ridersActions from '../actions/rider';
import Rider from '../containers/cart';
import {Grid, Image,Card} from "semantic-ui-react";
import * as categoryActions from "../actions/Category";



const Team =(props) => {
    const {name , img, id, riderId,  isReady} = props;
    let {riders} = props;
    if(riders === null){
        riders = [];
    }
    const FiltredRiders = riders.filter(e=>riderId.find(i=>i === e.userId));
    return(

            <Grid.Column>
            <h2>{name}</h2>
            <Image size='tiny' src={img}/>

                <Card.Group>
            {

                !isReady ? "Загрузка членов команды...":
                FiltredRiders.map( rider => (

                <Rider {...rider}></Rider>

                ))

            }</Card.Group>
            </Grid.Column>

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
