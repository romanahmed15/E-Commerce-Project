import React, { useContext } from 'react'

import './CSS/ShopCategory.css'
import {ShopContext} from '../Contexts/ShopContext'
import drpodownIcon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Items/Item'


const ShopCetagory = (props) => {
  
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shopCategory'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
            Sort by <img src={drpodownIcon} alt="" /> 
        </div>
      </div>

      <div className='shopcategory-products'>
      {all_product.map((item,i) => {
        if (props.category===item.category) {
          return <Item key ={i} id={item.id} name={item.name} image ={item.image} newPrice ={item.new_price} oldPrice={item.old_price}/>
        }
        else {
          return null;
        }
      })}
      </div>
      <div className="shopCategoryLoadMore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCetagory
