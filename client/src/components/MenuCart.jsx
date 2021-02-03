import React from 'react';
import CartComponent from "./CartComponent";
import {Link} from "react-router-dom";
import {Button,Grid} from "semantic-ui-react";

const MenuCart = ( {items,Loaded}) => {

    return(
        <div className='footer_container'>
            <h1>Добавленные Райдеры:</h1>

            <Grid divided>
            {items.map(rider => <CartComponent {...rider}/>)}
            </Grid>

        <Link to='/CheckOut'><Button basic color='red'>Checkout</Button></Link>

            </div>
    );
};
export default MenuCart;