import React from 'react'
import "../components/navbar.css"
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className='d-flex justify-content-end mainContainer'>
       <h3 onClick={()=>{navigate("/")}}>Shop</h3>
       <h3 onClick={()=>{
        navigate("/cart")
       }}>Cart</h3>
    </div>
  )
}

export default Navbar