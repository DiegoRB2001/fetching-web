import ProductScreen from '@/components/ProductScreen';
import { getProduct } from '@/utilities/getProducts';
import React from 'react'

const ProductPage = async ({params: {id}}) => {
  const product = await getProduct(id);
  
  return (
    <ProductScreen product= {product}/>
  )
}

export default ProductPage