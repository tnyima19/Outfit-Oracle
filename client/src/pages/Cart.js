import React, { useContext } from "react";
import  {products} from '../products';
import { ShopContext } from "../context/ShopContext";
import CartItem from '../components/CartItems';
import '../components/Cart.css';
function Cart(){
    const {addToCart, cartItems} = useContext(ShopContext);
    return(<div>
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {products.map((product) =>{
                    if(cartItems[product.id] !== 0){
                        return<CartItem data={product} />
                    }
                })}
            </div>

        </div>
    </div>)
}

export default Cart;