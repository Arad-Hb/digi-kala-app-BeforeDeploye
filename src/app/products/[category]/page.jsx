import Card from '@/components/productCard/Card'
import { getData } from '@/serverActions/getData'
import React from 'react'
import styles from './page.module.css'


const page = async(props) => {

  const categoryName=props.params.category
  const categoryData=await getData(`products/${categoryName}`)

  return (
    <div className={`${styles.container}`} >
     {
      categoryData.map(item=>{
        return(
          <div className={`${styles.item}`} >
          <Card product={item}/>
          </div>
        )
      })
     }
    </div>
  )
}

export default page