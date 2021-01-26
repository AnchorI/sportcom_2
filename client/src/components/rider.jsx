import React from 'react';
const Rider = (props) => {
    const {name, id, img, addToCart} = props;

    return(
        <div>
            <img src={img} alt=""/>
            <h3>{name}</h3>
            <button onClick={addToCart.bind(this, props)}>Добавить в список</button>

        </div>

    );

};


export default Rider;