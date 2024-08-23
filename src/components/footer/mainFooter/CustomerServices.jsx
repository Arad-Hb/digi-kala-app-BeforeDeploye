import React from 'react'
import styles from './CustomerServices.module.css'
import Data from '../../../../files/footerData.json'
import NavLink from '@/components/features/NavLink'

const CustomerServices = () => {
  const data=Data[3]
  return (
    <div className={`${styles.outerContainer}`}>
        <h3 className={`${styles.title}`}>خدمات مشتریان</h3>
        {
            data.customerServices.map(item=>{
                return(
                    <NavLink url={item.link}><div className={`${styles.link}`}>{item.text}</div></NavLink>
                )
            })
        }
    </div>
  
  )
}

export default CustomerServices