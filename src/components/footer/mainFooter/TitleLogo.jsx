import Image from 'next/image'
import React from 'react'
import styles from './TitleLogo.module.css'

const TitleLogo = () => {
  return (
    <div className={`${styles.container}`}>
        <div className={`${styles.logo}`}>
            <Image width={120} height={50} alt='digikala' src={'/images/digi.svg'} className={`${styles.logoImage}`}/>
        </div>
        <div className={`${styles.information}`}>
            <span className={`${styles.ContactUsText}`}>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</span>
            <span className={`${styles.seperator}`}></span>
            <span className={`${styles.ContactUsText}`}>۰۲۱-۹۱۰۰۰۱۰۰</span>
            <span className={`${styles.seperator}`}></span>
            <span className={`${styles.ContactUsText}`}>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</span>
        </div>
    </div>
  )
}

export default TitleLogo