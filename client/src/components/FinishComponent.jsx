import React from "react";
import { Image, Item,Container } from 'semantic-ui-react'


const FinishComponent = (props) => {
    const {name,rider1,phone,rider2,rider3,rider4, data1, data2,email} = props;
    return (
    <Container>
    <Item>
    <Item.Content>
        <Item.Header as='a'>{name}</Item.Header>
        <Item.Meta>{phone}</Item.Meta>
        <Item.Meta>{email}</Item.Meta>
        <Item.Description>
            <Item.Meta>{rider1}</Item.Meta>
            <Item.Meta>{rider2}</Item.Meta>
            <Item.Meta>{rider3}</Item.Meta>
            <Item.Meta>{rider4}</Item.Meta>
        </Item.Description>
        <Item.Extra>С {data1} по {data2}</Item.Extra>
    </Item.Content>
    </Item></Container>


    );
};
export default FinishComponent;