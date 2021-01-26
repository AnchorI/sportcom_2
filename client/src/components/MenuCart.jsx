import React from 'react';
import CartComponent from "./CartComponent";
import {Link} from "react-router-dom";
import {Button,Grid} from "semantic-ui-react";

const MenuCart = ( {items,Loaded}) => {

    return(
        <footer>
            <Grid columns={3} divided>
                <Grid.Row>

            {items.map(rider => <CartComponent {...rider}/>)}
        </Grid.Row>
            </Grid>
        <Link to='/CheckOut'><Button basic color='red' onClick={Loaded.bind(null , false)}>Checkout</Button></Link>

            </footer>
    );
};
export default MenuCart;