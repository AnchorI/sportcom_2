import React, {Component} from "react";
import axios from "axios";
import Category from './category';
import {NavLink} from 'react-router-dom';
import { Grid,Container } from 'semantic-ui-react'
export default class App extends Component{
    componentDidMount() {
        const {setCat} = this.props;
        axios.get('http://localhost:1234/categories/get').then(({data})=>{
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
               <NavLink to='/admin'>Admin</NavLink>
                    <Grid><Grid.Row columns={3}>
                {!isReadyCat ? "Загрузка..." : category.map(category =>(
                    <Category {...category}></Category>
                ))}</Grid.Row></Grid>
            </Container>

        </div>

        )

        }

}

