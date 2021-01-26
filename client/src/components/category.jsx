import React from "react";
import {NavLink} from "react-router-dom";
import {Grid, Image} from "semantic-ui-react";

const Category = (props) => {
    return(
        <Grid.Column>
        <NavLink to={props.name}>
            <Image size='medium'   src={props.img} alt={props.id}/>
            <h3>{props.name}</h3>


        </NavLink>
        </Grid.Column>
    )
};

export default Category;