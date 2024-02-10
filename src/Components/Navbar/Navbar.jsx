import React, { useContext, useState } from 'react'


import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const[menu,setMenu] =useState("shop")
  


  return (
    <div className='NavBar'>
      <div className='NavLogo'>
        <img src={logo} alt="" />
        <p>RS-SHOPPING</p>
      </div>
      <ul className='NavMenu'>
          <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/' >Shop</Link>  {menu ==="shop" ? <hr />: <></> } </li>
          <li onClick={() => {setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link> {menu ==="mens" ? <hr />: <></> } </li> 
          <li onClick={() => {setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link> {menu ==="womens" ? <hr />: <></> } </li>
          <li onClick={() => {setMenu("kids")}}><Link style={{textDecoration:'none'}} to ='/kids'>Kids</Link> {menu ==="kids" ? <hr />: <></> } </li>
      </ul>
      <div className="NavLogInCart">
        <Link to='/login'><button>LogIn</button></Link>
        <Link to ='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="NavLogInCartCount">{2}</div>
      </div>
    </div>
  )
}

export default Navbar
