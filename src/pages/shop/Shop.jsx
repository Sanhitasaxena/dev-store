import React from 'react'
import { PRODUCTS } from '../../data/products'
import Product from "../../components/Product"
import "../../components/product.css"

const Shop = () => {
  return (
     <>
       <h2 className='headline'>DEV STORE</h2>
       <div className='main'>
       {PRODUCTS.map((product)=>{
      return <Product data={product}/>
    })}
       </div>
     </>
  )
}

export default Shop