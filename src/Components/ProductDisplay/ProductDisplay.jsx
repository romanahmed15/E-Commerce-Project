import React, { useContext } from 'react'

import './ProductDisplay.css'
import star_dull_icon from '../Assets/star_dull_icon.png'
import star_icon from '../Assets/star_icon.png'
import { ShopContext } from '../../Contexts/ShopContext'

const ProductDisplay = (props) => {
  const {product} =props
  const {addToCart} =useContext(ShopContext)
  return (
    <div className='productDiplay'>
      <div className="productDisplayLeft">
        <div className='productDisplayImgList'>
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productDisplayImg">
          <img className='productDisplayMainImg' src={product.image} alt="" />
        </div>
      </div>
      <div className="productDisplayRight">
        <h1>{product.name}</h1>
        <div className='productDisplayRightStar' >
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(135)</p>
        </div>
        <div className='productDisplayRightPrices'>
          <div className='productDisplayRightPricesOld'>${product.old_price}</div>
          <div className='productDisplayRightPricesNew'>${product.new_price}</div>
        </div>
        <div className='productRightDescription'>
        Looking for a sweatshirt that keeps you warm and dry all day? Look no further than this Rain Defender loose-fit heavyweight sweatshirt. This 100% cotton sweatshirt is perfect for those cold, rainy days. 

        </div>
        <div className='productDisplayRightSize'>
          <h1>Select Size</h1>
          <div className='productDisplayRightSizes' >
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
          </div>
        </div>
        <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
        <p className='category'> <span>Tags :</span> <span>Morden,Latest</span> </p>
      </div>
    </div>
  )
}

export default ProductDisplay
