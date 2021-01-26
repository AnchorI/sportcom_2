import React from 'react';
import axios from "axios";
import {Grid} from "semantic-ui-react";
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import FinishComponent from './FinishComponent';
class Finish extends React.Component{
    state={
        data: []
    };
    componentDidMount() {
        axios.get('/data/checkout.json').then(({data})=>{
            this.setState({data: data});
        })
    }

    render() {
        const {data} = this.state;
        console.log(data);
        return(

            <Grid columns="3">
                <Grid.Row>
                    {!data ? <Segment>
                        <Dimmer active>
                            <Loader />
                        </Dimmer>

                        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                    </Segment> : data.map(data => (
                        <FinishComponent {...data}/>
                    )) }
                </Grid.Row>
            </Grid>
        );
    }
}

export default Finish;