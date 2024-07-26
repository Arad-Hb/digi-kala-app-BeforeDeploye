import React from 'react'
import TitleLogo from './TitleLogo'
import styles from './Footer.module.css'
import JumpToTopButton from '../footersHooks/JumpToTopButton'
import Partners from './Partners'

const Footer = () => {
  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.header}`}>
            <div className={`${styles.logo}`}><TitleLogo/></div>
            <div className={`${styles.upButton}`}><JumpToTopButton/></div>
        </div>
        <div className={`${styles.main}`}></div>
        <div className={`${styles.footer}`}><Partners/></div>
    </div>
  )
}

export default Footer