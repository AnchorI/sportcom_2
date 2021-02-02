import React from "react";
import {NavLink} from "react-router-dom";


class taskCard extends React.Component {
  render(){
  const { name,  _id, Phone } = this.props;

  return (
    <NavLink to={`${_id}`}>
    <div className="Card_Container">

      <div className="Card_Header"><h4>{_id}</h4></div>
      <div className="Card_Content">

      <h3>{name}</h3>
      <h4>{Phone}</h4>
      </div>
    </div>
    </NavLink>
  );}
};

export default taskCard;
