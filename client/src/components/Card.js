import React from "react";
// import './Card.css';
import { Link } from "react-router-dom";

function Card({ id, name,image, size, color, outerLayer, linning, filling, washinginfo}) {
  return (
    <div class="card">
      <img src={image} alt={name} class="card-img-top"></img>
    
    <div class="card-body">
    <button type="button" class="btn btn-secondary">Add to Cart</button>
    <p class="card-text">{name}</p>
    <p class="card-text">{size}</p>
    <p class="card-text">{color}</p>
   </div>
    </div>
  );
}

export default Card;
