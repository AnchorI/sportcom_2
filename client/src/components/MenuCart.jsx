import React from 'react';
import CartComponent from "./CartComponent";
import {Link} from "react-router-dom";

const MenuCart = ( {items,Loaded}) => {

    return(
        <footer>
        <div className='Card_Menu_Container'>
            {items.map(rider => <CartComponent {...rider}/>)}
        </div>
        <Link to='/CheckOut'><button onClick={Loaded.bind(null , false)}>Checkout</button></Link>
        </footer>
    );
};
export default MenuCart;