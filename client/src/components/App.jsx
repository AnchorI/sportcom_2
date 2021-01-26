import React, {Component} from "react";
import axios from "axios";
import Category from './category';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Bmx from '../containers/BMX'
import { Grid,Container } from 'semantic-ui-react'
import CheckoutPage from "../containers/CheckoutPage";
import MenuCart from "../containers/MenuCart";
export default class App extends Component{
    componentDidMount() {
        const {setCat} = this.props;
        axios.get('/data/category.json').then(({data})=>{
            setCat(data);
        })
    }
    state={
        isLoaded: true
    };

    Loaded = (value) => this.setState({isLoaded : value});

    render() {
        const { isReadyCat} = this.props;
        let {category} = this.props;
        const {isLoaded} = this.state;

        if(category == null){
            category = [];
        }
        console.log(category);
        if(isLoaded){return(<div>
           <Container>
                <Router>
                <Switch>
                <Route exact path="/">
                    <Grid><Grid.Row columns={3}>
                {!isReadyCat ? "Загрузка..." : category.map(category =>(
                    <Category {...category}></Category>
                ))}</Grid.Row></Grid>
                </Route>
                <Route  path="/BMX" component={Bmx}/>
                    <Route  path="/FMX" />
                    <Route  path="/SCOOTER" />
                </Switch>
                </Router>

            </Container>
            <MenuCart Loaded={this.Loaded}/>
        </div>

        );}else if(!isLoaded){
            return (<div>
                <CheckoutPage Loaded={this.Loaded}/>
            </div>)
        }
    }
}

