import React from 'react';
import {Card, Image, Button} from "semantic-ui-react";

const Rider = (props) => {
    const {name, id, img, addToCart} = props;

    return(
        <div className='rider-container'>
            <div className='Rider-Cart'>
                <div>
                    <img className='Rider-Img' src={img}/></div>

                <div>
                    <h4>{name}</h4>
                </div><div><button className='button-rider' onClick={addToCart.bind(this, props)}>Добавить в список</button></div></div>


        </div>

    );

};


export default Rider;