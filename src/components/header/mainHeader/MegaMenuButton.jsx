import React from 'react'
import styles from './MegaMenuButton.module.css'
import { GiHamburgerMenu } from "react-icons/gi"

const MegaMenuButton = () => {
  return (
        <div className={`${styles.megaMenuButton}`}>
            <GiHamburgerMenu className={`${styles.icon}`} />
            <span className={`${styles.title}`}>دسته بندی کالاها</span>
        </div>
  )
}

export default MegaMenuButton