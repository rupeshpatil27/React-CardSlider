import React from "react";
import "./Card.css";

const Card = ({ item }) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="image">
          <img src={item.img} draggable="false" />
        </div>
        <div className="info">
          <span className="name">{item.title}</span>
          <span className="price">{item.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
