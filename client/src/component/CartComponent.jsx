import { Item , Button} from 'semantic-ui-react'

const CartComponent = ({name, _id, img, removeFromCart}) => {
    return(

        <Item.Group divided>
            <Item>
                <Item.Image size='tiny' src={img} />
                <Item.Content verticalAlign='middle'>{name}</Item.Content>
                <Button content='Удалить' onClick={removeFromCart.bind(this, _id)}/>
            </Item>
        </Item.Group>

    );
};
export default CartComponent;