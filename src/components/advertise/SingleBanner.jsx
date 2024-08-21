import React from 'react'
import styles from './SingleBanner.module.css'
import Data from '../../../files/advertiseData.json'
import Image from 'next/image'

const SingleBanner = () => {
    const data=Data[2]
  return (
    <div className={`${styles.outerContainer}`}>
    {data.fullWidthBanners.map(item=>{
        return<div className={`${styles.advertiseItem}`}><Image src={item.imageUrl}  className={`${styles.advertiseItemImage}`} alt='advertise' width={800} height={150} /></div>
        
    })}
</div>
  )
}

export default SingleBanner