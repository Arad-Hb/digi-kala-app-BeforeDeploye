import Header from '@/components/adminPanel/Header'
import SideBar from '@/components/adminPanel/SideBar'
import ThemeProvider from '@/components/adminPanel/ThemeProvider'
import React from 'react'
import styles from './styleSheet.module.css'

const layout =({children}) => {

  return (
    <>
      <ThemeProvider>
        <div>
          <div><Header/></div>
          <div className={`${styles.content}`}>
            <div className={`${styles.sideBar}`}><SideBar/></div>
            <div className={`${styles.Children}`}>{children}</div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default layout