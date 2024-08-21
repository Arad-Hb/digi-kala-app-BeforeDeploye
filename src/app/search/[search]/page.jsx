import Card from '@/components/productCard/Card'
import { getData } from '@/serverActions/getData'
import React from 'react'
import styles from './page.module.css'
import { TbWorldSearch } from "react-icons/tb";

const page = async(props) => {

const item=props.params.search
const itemData=await getData(`products/search/${item}`)
  return (
    <div className={`${styles.outerContainer}`}>
      <div className={`${styles.title}`}>
        <span>نتیجه جست و جو :</span>
        <span><TbWorldSearch /></span>
      </div>
      <div className={`${styles.container}`}>
        {itemData===null || itemData===undefined || itemData.length<1?<span className={`${styles.nothing}`}>موردی یافت نشد!</span>:
          itemData.map(item=>{
            return<div className={`${styles.card}`}><Card product={item}/></div>
          })
        }
      </div>
        
    </div>
  )
}

export default page