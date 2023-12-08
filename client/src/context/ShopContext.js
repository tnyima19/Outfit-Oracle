import React, { createContext, useState } from 'react';
import { products as initialProducts } from '../products'; // Assuming this is an array of products

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < initialProducts.length; i++) {
        cart[initialProducts[i].id] = 0; // Assuming each product has a unique 'id' field
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const [products, setProducts] = useState(initialProducts); // Renamed to 'products'
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) }));
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };

    const contextValue = { products, setProducts, cartItems, addToCart, removeFromCart, updateCartItemCount };

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};

/*

Context api,
to build this, 


    function Profile(){
        return(<>
            <h1>Profile</h1>
            <h2>

            </>)
    }


*/