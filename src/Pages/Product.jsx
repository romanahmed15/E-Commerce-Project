import React, { useContext } from 'react'

import { ShopContext } from '../Contexts/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrum/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DiscriptionBox from '../Components/DiscriptionBox/DiscriptionBox'
import RelatedProduct from '../Components/RelatedProducts/RelatedProduct'






const Product = () => {
  const {all_product} =useContext(ShopContext)
  const {productId} =useParams()
  const product = all_product.find((e) => e.id === Number(productId) )
  return (
    <div>
      <Breadcrum product ={product} />
      <ProductDisplay product={product}/>
      <DiscriptionBox />
      <RelatedProduct />
    </div>
  )
}

export default Product
