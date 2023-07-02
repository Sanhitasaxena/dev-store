import React, {useContext} from 'react'
import { PRODUCTS } from '../../data/products'
import { ShopContext } from "../../context/shop-context";
import CartItem from '../../components/CartItem';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate()
  const { cartItems, getTotalCartAmount } = useContext(ShopContext)
  return (
    <>
    <div>
      <h2 style={{"textAlign": "center"}}>YOUR CART ITEMS</h2>
    </div>
    <div>
      {
        PRODUCTS.map((product)=>{
          if(cartItems[product.id] !== 0){
            return <CartItem data = {product}/>
          }
        })
      }
    </div>
    <div className="checkout">
          <b> Subtotal: ${getTotalCartAmount()}</b>
          <p className="contShopping" 
          onClick={()=>navigate("/")}>Continue Shopping</p> 
      </div>
    </>
  )
}

export default Cart