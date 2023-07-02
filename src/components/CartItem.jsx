import React, { useContext } from "react";
import "../components/cartItem.css";
import { ShopContext } from "../context/shop-context";

const CartItem = (props) => {
  const { id, productImage, price, productName } = props.data;
  const { cartItems, addToCart, removeFromCart, updatedAmount } = useContext(ShopContext);
  return (
    <>
      <div className="cartMain">
        <img src={productImage} height="120px" width="120px" />
        <div className="cartItem-desc">
          <b>{productName}</b>
          <p>${price}</p>
          {/* <button className='removeBtn'>REMOVE ITEM</button> */}
          <div className="countHandler">
            <button className="countBtn" onClick={() => removeFromCart(id)}>
              -
            </button>

            <input className="countInput" value={cartItems[id]} onChange={(e)=>{updatedAmount(Number(e.target.value), id)}} />
            <button className="countBtn" onClick={() => addToCart(id)}>
              +
            </button>
          </div>
        </div>

        
      </div>

     
    </>
  );
};

export default CartItem;
