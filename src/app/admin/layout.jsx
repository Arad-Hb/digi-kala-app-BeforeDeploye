import Header from '@/components/adminPanel/Header'
import SideBar from '@/components/adminPanel/SideBar'
import React from 'react'
import styles from './styleSheet.module.css'

const layout =({children}) => {

  return (
   
        <div className={`${styles.container}`}>
          <div className={`${styles.header}`}><Header/></div>
          <div className={`${styles.content}`}>
            <div className={`${styles.sideBar}`}><SideBar/></div>
            <div className={`${styles.Children}`}>{children}</div>
          </div>
        </div>
    
  )
}

export default layout