import SingleProductCard from '@/components/singleProductCard/SingleProductCard'
import { getData } from '@/serverActions/getData'
import React from 'react'


const page = async(props) => {

    const productId=props.params.productId
    const singleProduct=await getData(`products/${productId}`)
  return (
    <SingleProductCard data={singleProduct}/>
  )
}

export default page