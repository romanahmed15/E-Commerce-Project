import React from 'react'

import './Offer.css'
import exclusiveImg from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offerLeft">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
         </div>
      <div className="offerRight"> 
      <img src={exclusiveImg} alt="" />
      </div>
    </div>
  )
}

export default Offers