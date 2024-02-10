import React from 'react'

import './RelatedProduc.css'
import data_product from '../Assets/data'
import Item from '../Items/Item'

const RelatedProduct = () => {
  return (
    <div className='RelatedProduct'>
      <h1>Related Products</h1>
      <hr />
      <div className='RelatedProducyItem'> 
        {data_product.map((item,i) => {
          return <Item key ={i} id={item.id} name={item.name} image ={item.image} newPrice ={item.new_price} oldPrice={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default RelatedProduct
