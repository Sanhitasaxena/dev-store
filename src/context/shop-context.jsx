import React, { createContext, useState } from "react";
import { PRODUCTS } from "../data/products";

export const ShopContext = createContext(null)

const getCarditems = ()=>{
    let cart = {}
    for(let i=1; i < PRODUCTS.length+1; i++){
        cart[i] = 0
    }
    return cart

 }

export const ShopContextProvider = (props)=>{

    const [cartItems, setCartItems] =  useState(getCarditems())

    const addToCart = ()=> {

    }

    return <ShopContext.Provider>{props.children}</ShopContext.Provider>
    
}
