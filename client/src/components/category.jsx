import React from "react";
import {NavLink} from "react-router-dom";


const Category = (props) => {


    return(
        <div className='Category-card'>
        <NavLink to={`/category/${props.name}/`}>

            <img src={props.img} alt=""/>
            <h3 className='Category-Name'>{props.name}</h3>

        </NavLink></div>

    )
};

export default Category;