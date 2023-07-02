import React, { createContext, useState } from "react";
import { PRODUCTS } from "../data/products";

export const ShopContext = createContext(null);

const getCarditems = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};



export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getCarditems());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updatedAmount = (newAmount, itemId) => {
    setCartItems((prev)=>({...prev, [itemId]: newAmount}))
  }

  const getTotalCartAmount = ()=>{
    let totalAmount = 0;
    for(const item in cartItems){
      if(cartItems[item] > 0){
        let itemInfo = PRODUCTS.find((product)=> product.id === Number(item))
        totalAmount += cartItems[item] * itemInfo.price
      }
    }

    return totalAmount
  }

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updatedAmount,
    getTotalCartAmount
  };

  console.log("cart itms console", cartItems)

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
