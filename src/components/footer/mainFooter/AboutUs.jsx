import React from 'react'
import styles from './AboutUs.module.css'
import Data from '../../../../files/footerData.json'
import NavLink from '@/components/features/NavLink'

const AboutUs = () => {
  const data=Data[2]
  return (
    <div className={`${styles.outerContainer}`}>
        <h3 className={`${styles.title}`}>با دیجی کالا</h3>
        {
            data.aboutUs.map(item=>{
                return(
                    <NavLink url={item.link}><div className={`${styles.link}`}>{item.text}</div></NavLink>
                )
            })
        }
    </div>
  )
}

export default AboutUs