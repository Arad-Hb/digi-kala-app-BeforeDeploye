import React from 'react'
import styles from './Delivery.module.css'
import Data from '../../../../files/footerData.json'
import Image from 'next/image'
import NavLink from '@/components/features/NavLink'

const Delivery = () => {
    const data=Data[1]
  return (
    <div className={`${styles.outerContainer}`}>
        {
            data.delivery.map(item=>{
                return(
                    <NavLink url={'/contactUs/6'}>
                        <div className={`${styles.deliveryItem}`}>
                            <Image width={56} height={56} src={`/images/${item.name}.svg`} className={`${styles.deliveryIcon}`} alt='express delivery'/>
                            <span className={`${styles.deliveryTitle}`}>{item.text}</span>
                        </div>
                    </NavLink>
                )
            })
        }
    </div>
  )
}

export default Delivery