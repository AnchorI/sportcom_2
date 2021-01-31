import React from "react";
import {Link} from "react-router-dom";


class taskCard extends React.Component {
  render(){
  const { name,  _id, Phone } = this.props;

  return (
    <Link to={`${_id}`}>
    <div className="Card_Container">
      <h3>{name}</h3>
      <h3>{_id}</h3>
      <h2>{Phone}</h2>
    </div>
    </Link>
  );}
};

export default taskCard;
