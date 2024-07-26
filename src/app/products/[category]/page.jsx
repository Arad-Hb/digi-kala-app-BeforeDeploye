import Card from '@/components/productCard/Card'
import React from 'react'


async function getCategory(categoryName){
  const response=await fetch(`http://80.75.14.90:9090/products/${categoryName}`)
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

const categoryName=props.params.category
const categoryData=await getCategory(categoryName)

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