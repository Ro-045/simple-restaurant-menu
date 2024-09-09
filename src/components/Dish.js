import React from 'react';
import "./dish.css";

function Dish(props) {
  return (
    <div className="dish" style={{ width: "40%",marginBottom:"50px"}}>
      <img src={props.dishImg} alt="Dish Image"/>
      <div className="dishdetails">
        <div className="headingPriceWrapper">
            <h3>{props.title}</h3>
            <h3>{props.price}</h3>
        </div>
        <hr/>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Dish;