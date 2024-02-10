import React, { useContext } from 'react'

import './CartItem.css'
import { ShopContext } from '../../Contexts/ShopContext'
import removeIcon from '../Assets/cart_cross_icon.png'

const CartItem = () => {

  const{getTotalAmount,all_product,cartItem,removeFromCart} = useContext(ShopContext)

  return (
    <div className='cartItem'>
      <div className='cartItemMainFormet'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItem[e.id]>0) {
          return <div>
          <div className='cartItemFormet cartItemMainFormet' >
              <img src={e.image} alt="" className='cartIconProductIcon' />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className='cartItemQuantity'>{cartItem[e.id]}</button>
              <p>${e.new_price*cartItem[e.id]}</p>
              <img className='cartItemRemoveIcon' src={removeIcon} onClick={() => {removeFromCart(e.id)}} alt="" />
          </div>
          <hr />
        </div>
        }
        return null
      })}
      <div className="cartItemDown">
         <div className='cartItemTotal'>
            <h1>Cart Total</h1>
            <div>
              <div className='cartItemTotalItem' >
                <p>Subtotal</p>
                <p>${getTotalAmount()}</p>
              </div>
              <hr />
              <div className='cartItemTotalItem'>
                <p>Shipping Fee</p>
                <p>Fee</p>
              </div>
              <hr />
              <div className='cartItemTotalItem'>
                <h3>Total</h3>
                <h3>${getTotalAmount()}</h3>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
         </div>
        
      </div>
    </div> 
  )
}

export default CartItem


{/* <div className=''>

</div>
<hr />
<div className='cartItemTotalItem'>
<p>Shipping Fee</p>
<p>Fee</p>
</div>
<hr />
<div className="">
<h3>Total</h3>
<h3>${0}</h3>
</div>
<button>PROCEED TO CHECKOUT</button> */}