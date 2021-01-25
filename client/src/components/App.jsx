import React, {Component} from "react";
import axios from "axios";
import Category from './category';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Bmx from '../containers/BMX'
export default class App extends Component{
    componentDidMount() {
        const {setCat} = this.props;
        axios.get('/data/category.json').then(({data})=>{
            setCat(data);
        })
    }

    render() {
        const { isReadyCat} = this.props;
        let {category} = this.props;


        if(category == null){
            category = [];
        }
        console.log(category);
        return(
            <div>
                <Router>
                <Switch>
                <Route exact path="/">
                {!isReadyCat ? "Загрузка..." : category.map(category =>(
                    <Category {...category}></Category>
                ))}
                </Route>
                <Route  path="/BMX" component={Bmx}/>
                    <Route  path="/FMX" />
                    <Route  path="/SCOOTER" />
                </Switch>
                </Router>
            </div>
        );
    }
}

const Children = (props) =>{
    const {id} = this.props;
    return(<div>{id}</div>)
};
