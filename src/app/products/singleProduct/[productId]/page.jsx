import SingleProductCard from '@/components/singleProductCard/SingleProductCard'
import React from 'react'

async function getSingleProduct(productId){
    const response=await fetch(`http://80.75.14.90:9090/products/${productId}`)
  if (!response.ok) {
    console.log("error")
    return
}
else {
    const data = await response.json()
    return data
}
}

const page = async(props) => {

    const productId=props.params.productId
    const singleProduct=await getSingleProduct(productId)
  return (
    <SingleProductCard data={singleProduct}/>
  )
}

export default page