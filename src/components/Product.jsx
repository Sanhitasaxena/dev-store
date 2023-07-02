import React, { useContext } from "react";
import "../components/product.css";
import { ShopContext } from "../context/shop-context";

const Product = (props) => {
  // console.log(props);
  // console.log("product desc",props.data);
  const { id, productImage, price, productName } = props.data;

  const { addToCart, cartItems } = useContext(ShopContext)

  const cartItemAmount = cartItems[id]
  return (
    <div className="main">
      <div className="container">
        <div className="">
          <img src={productImage} height="150px" width="150px"></img>
        </div>
        <div className="desc">
          <p>{productName} </p>
          <h3>${price}</h3>
        </div>
        <button className="btn addToCartBtn" 
        onClick={()=> addToCart(id)}>
          ADD TO CART {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
      </div>
    </div>
  );
};

export default Product;
