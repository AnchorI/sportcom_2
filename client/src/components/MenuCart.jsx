import React, {useState} from 'react';
import CartComponent from "./CartComponent";
import {Link} from "react-router-dom";
import {Button,Grid} from "semantic-ui-react";
import Modal from './modalWindow/modal';
import CheckoutPage from "../containers/checkout";

const MenuCart = ( {items,Loaded}) => {
    const [modalActive, setModalActive] = useState(false);
    return(
        <div className='footer_container'>
            <Grid><Grid.Column width={14}>
            <Grid>
            {items.map(rider => <CartComponent {...rider}/>)}
            </Grid></Grid.Column>

               <Grid.Column width={1}> <Button basic color='red' onClick={()=> setModalActive(true)}>Checkout</Button> </Grid.Column></Grid>
                <div className='Taburetka'><a  href='taburetka.tech'>Taburetka.ink</a></div>
            <Modal active={modalActive} setActive={setModalActive}>
                <CheckoutPage/>
            </Modal>
            </div>
    );
};
export default MenuCart;