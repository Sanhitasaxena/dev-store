import React from 'react'
import "../components/product.css"

const Product = (props) => {
    console.log(props)
    console.log(props.data)
    const {id, productImage, price, productName} = props.data
  return (
    <div className='main'>
        <div className='container'>
        <div className=''>
            <img 
            src={productImage}
            height="150px"
            width="150px"></img>
        </div>
        <div className='desc'>
            <p>{productName} </p>
            <h3>${price}</h3>
        </div>
        <button className='btn'>ADD TO CART</button>
    </div>
    </div>
  )
}

export default Product