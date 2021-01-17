import React from 'react';
import CartComponent from "./CartComponent";
const MenuCart = ( {items}) => {
    return(
        <footer>
        <div className='Card_Menu_Container'>
            {items.map(rider => <CartComponent {...rider}/>)}
        </div></footer>
    );
};
export default MenuCart;