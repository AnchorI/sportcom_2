import React from 'react';
import {Card, Image, Button} from "semantic-ui-react";

const Rider = (props) => {
    const {name, id, img, addToCart} = props;

    return(
        <Card>
            <Image floated='right'
                   size='mini' src={img}/>
            <Card.Header>{name}</Card.Header>
            <Button basic color ='green' onClick={addToCart.bind(this, props)}>Добавить в список</Button>

        </Card>

    );

};


export default Rider;