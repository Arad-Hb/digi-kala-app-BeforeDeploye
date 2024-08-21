import Card from '@/components/productCard/Card'
import { getData } from '@/serverActions/getData'
import React from 'react'


const page = async(props) => {

  const categoryName=props.params.category
  const categoryData=await getData(`products/${categoryName}`)

  return (
    <div>
     {
      categoryData.map(item=>{
        return(
          <Card product={item}/>
        )
      })
     }
    </div>
  )
}

export default page