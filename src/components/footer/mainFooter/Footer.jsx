import React from 'react'
import TitleLogo from './TitleLogo'
import styles from './Footer.module.css'
import JumpToTopButton from '../footersHooks/JumpToTopButton'
import Partners from './Partners'
import Delivery from './Delivery'
import AboutUs from './AboutUs'
import CustomerServices from './CustomerServices'
import OrderGuidance from './OrderGuidance'
import SocialMedia from './SocialMedia'
import EmailBox from './EmailBox'
import LegalApproval from './LegalApproval'
import Introduction from './Introduction'
import ApplicationSources from './ApplicationSources'

const Footer = () => {
  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.header}`}>
            <div className={`${styles.logo}`}><TitleLogo/></div>
            <div className={`${styles.upButton}`}><JumpToTopButton/></div>
        </div>
        <div className={`${styles.main}`}>
          <div className={`${styles.delivery}`}><Delivery/></div>
          <div className={`${styles.withDigikalaContainer}`}>
            <div className={`${styles.aboutUs}`}><AboutUs/></div>
            <div className={`${styles.customerServices}`}><CustomerServices/></div>
            <div className={`${styles.orderGuidance}`}><OrderGuidance/></div>
            <div className={`${styles.medaiContainer}`}>
              <div className={`${styles.socialMedia}`}><SocialMedia/></div>
              <div className={`${styles.email}`}><EmailBox/></div>
            </div>
          </div>
        </div>
        <div className={`${styles.appSourcesContainer}`}><ApplicationSources/></div>
        <div className={`${styles.introductionLegalContainer}`}>
          <div className={`${styles.introduction}`}><Introduction/></div>
          <div className={`${styles.legal}`}><LegalApproval/></div>
        </div>
        <div className={`${styles.footer}`}><Partners/></div>
    </div>
  )
}

export default Footer