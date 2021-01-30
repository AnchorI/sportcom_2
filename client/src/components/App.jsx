import React, {Component} from "react";
import axios from "axios";
import Category from './category';
import {Route} from 'react-router-dom';
import  CategoryPage from '../components/CategoryPage'
import { Grid,Container } from 'semantic-ui-react'
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


    render() {
        const { isReadyCat} = this.props;
        let {category} = this.props;

        if(category == null){
            category = [];
        }
        console.log(category);
        return(<div>
           <Container>
                    <Grid><Grid.Row columns={3}>
                {!isReadyCat ? "Загрузка..." : category.map(category =>(
                    <Category {...category}></Category>
                ))}</Grid.Row></Grid>
            </Container>
            <MenuCart/>
        </div>

        )

        }

}

