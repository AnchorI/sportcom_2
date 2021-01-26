import React from 'react';
import {Card, Button, Image} from "semantic-ui-react";

const CartComponent = ({name, id, img, removeFromCart}) => {
    return(

        <Card>
            <Card.Content>
                <Image floated='right'
                       size='mini' src={img} />
                <Card.Header>{name}</Card.Header>
            <Button basic color='red' content='Удалить' onClick={removeFromCart.bind(this, id)}> Убрать из списка</Button>
            </Card.Content>
        </Card>

    );
};
export default CartComponent;