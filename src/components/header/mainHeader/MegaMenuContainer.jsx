import React from 'react'
import styles from './MegaMenuContainer.module.css'
import MegaMenuSideBar from './MegaMenuSideBar'
import MegaMenuMainContent from './MegaMenuMainContent'

const MegaMenuContainer = () => {

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.sideBar}`}><MegaMenuSideBar/></div>
      <div className={`${styles.content}`}><MegaMenuMainContent/></div>
    </div>
  )
}

export default MegaMenuContainer