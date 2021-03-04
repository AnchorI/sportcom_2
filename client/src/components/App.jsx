import React, {Component} from "react";
import axios from "axios";
import Category from './category';
import {NavLink} from 'react-router-dom';
import { Grid,Container } from 'semantic-ui-react';

import Instagram from '../img/Instagram.png';
import Facebook from '../img/Facebook.png';
import Twitter from '../img/Twitter.png';
import Whatsapp from '../img/WhatsApp.png';

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

        return(
            <div className='Main-Container'>
                <NavLink to='/admin/'>Admin</NavLink>
                <div className='Container'>
                <div className='Header-Content'><h2>TextText</h2>
                    <div className='Link'>
                    <a href='https://www.instagram.com/'><img src={Instagram} alt="Inst"/></a>
                    <a href=""><img src={Facebook} alt="Facebook"/></a>
                   <a href=""><img src={Twitter} alt="Twitter"/></a>
                    <a href=""><img src={Whatsapp} alt="WhatsApp"/></a></div>
                </div>
                <div className='Content-Wrapper'>


                {!isReadyCat ? "Загрузка..." : category.map(category =>(
                    <Category {...category}></Category>
                ))}
                </div></div>

            </div>)

        }

}

