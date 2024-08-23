import React from 'react'
import styles from './OrderGuidance.module.css'
import Data from '../../../../files/footerData.json'
import NavLink from '@/components/features/NavLink'

const OrderGuidance = () => {
  const data=Data[4]
  return (
    <div className={`${styles.outerContainer}`}>
        <h3 className={`${styles.title}`}>راهنمای خرید از دیجی‌کالا</h3>
        {
            data.orderGuidance.map(item=>{
                return(
                    <NavLink url={item.link}><div className={`${styles.link}`}>{item.text}</div></NavLink>
                )
            })
        }
    </div>
  )
}

export default OrderGuidance