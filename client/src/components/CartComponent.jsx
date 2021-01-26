import React from 'react';

const CartComponent = ({name, id, img, removeFromCart}) => {
    return(

        <div>

                <img src={img} />
                <h3>{name}</h3>
            <button content='Удалить' onClick={removeFromCart.bind(this, id)}> Убрать из списка</button>

        </div>

    );
};
export default CartComponent;