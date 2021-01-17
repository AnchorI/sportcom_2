import React from 'react';
import s from './moduleCss/category.module.css'
const Category = (props) => {
    return(
      <div className={s.categoryContainer}>
          <h3>{props.catName}</h3>
          <p>{props.title}</p>
          <a href={props.catName}>{props.catName}</a>
      </div>
    );
};
export default Category;