import React from 'react';
import {Card, Image} from "semantic-ui-react";

const Rider  = (rider) => {
    const {name, title, img, addToCart} = rider;
    return(
        <div>
            <Card>
                <Image src={img}  wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{name}</Card.Header>

                    <Card.Description>
                        {title}
                    </Card.Description>
                </Card.Content>
                <button onClick={addToCart.bind(this, rider)}> Добавить в корзину </button>
            </Card>

        </div>
    );
};

export default Rider;