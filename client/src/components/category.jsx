import React from "react";
import {NavLink} from "react-router-dom";
const Category = (props) => {
    return(
        <NavLink to={props.name}>
        <div className='card'>
            <img src={props.img} alt={props.id}/>
            <h3>{props.name}</h3>

        </div>
        </NavLink>
    )
};

export default Category;