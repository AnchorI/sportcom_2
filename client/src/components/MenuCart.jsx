import React from 'react';
import CartComponent from "./CartComponent";
import {Link} from "react-router-dom";
import {Button,Grid} from "semantic-ui-react";

const MenuCart = ( {items,Loaded}) => {

    return(
        <div className='footer_container'>
            <Grid><Grid.Column width={14}>
            <Grid>
            {items.map(rider => <CartComponent {...rider}/>)}
            </Grid></Grid.Column>

               <Grid.Column width={1}> <Link className='Check-Button' to='/CheckOut'><Button basic color='red'>Checkout</Button></Link> </Grid.Column></Grid>
                <div className='Taburetka'><a  href='taburetka.tech'>Taburetka.ink</a></div>
            </div>
    );
};
export default MenuCart;