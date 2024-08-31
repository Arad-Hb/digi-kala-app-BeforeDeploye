import React from 'react'
import styles from './MainLayout.module.css'
import Header from '../header/mainHeader/Header'
import Footer from '../footer/mainFooter/Footer'
import FooterResponsive from '../footer/responsiveFooter/FooterResponsive'


const MainLayout = ({children}) => {
  return (
  <div className={`${styles.container}`}>
    <div><Header/></div>
    <div>{children}</div>
    <div className={`${styles.footer}`}><Footer/></div>
    <div className={`${styles.footerResponsive}`}><FooterResponsive/></div>
  </div>
  ) 
}

export default MainLayout