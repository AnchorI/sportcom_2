import React from 'react';
import {Card, Button, Image,Grid} from "semantic-ui-react";

const CartComponent = ({name, id, img, removeFromCart}) => {
    return(

        <Grid.Column width={3}>
        <Card>
            <Card.Content>
                <Image floated='right'
                       size='mini' src={img} />

                 <h2>{name}</h2>
            <Button basic color='red' content='Удалить' onClick={removeFromCart.bind(this, id)}> Убрать из списка</Button>
            </Card.Content>
        </Card>
        </Grid.Column>

    );
};
export default CartComponent;