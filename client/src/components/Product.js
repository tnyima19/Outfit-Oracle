import React from "react";
// import './Card.css';
import { useContext } from "react";
import { Link } from "react-router-dom";
import {ShopContext} from '../context/ShopContext';

function Product({ id, name,image, size, color, outerLayer, linning, filling, washinginfo}) {

  const {product, addToCart, cartItems} = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  //console.log(cartItems);
  return (
    <div className="card">
      <img src={image} alt={name} class="card-img-top"></img>
    
    <div class="card-body">
    <button type="button" class="btn btn-secondary" onClick={()=> addToCart(id)}>Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
    <br></br>
    <Link to={`/product/${id}`}>{name}</Link>
    <p className="card-text">{size}</p>
    <p className="card-text">{color}</p>
   </div>
    </div>
  );
}

export default Product;
