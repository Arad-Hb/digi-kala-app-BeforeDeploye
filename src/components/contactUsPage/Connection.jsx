import React from 'react'
import styles from './Connection.module.css'
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { HiOutlineMail } from "react-icons/hi";
import NavLink from '../features/NavLink';

const Connection = () => {
  return (
<div className={`${styles.outerContainer}`}>
    <div className={`${styles.title}`}>راه های ارتباطی با ما</div>
    <div className={`${styles.container}`}>
        <div className={`${styles.phoneNumber}`}>
            <div className={`${styles.icon}`}><TfiHeadphoneAlt /></div>
            <div className={`${styles.text}`}>
                <div className={`${styles.textTitle}`}>تماس تلفنی</div>
                <div className={`${styles.number}`}>۰۲۱ – ۶۱۹۳۰۰۰۰</div>
            </div>
        </div>
        <div className={`${styles.formContainer}`}>
            <div className={`${styles.icon}`}><HiOutlineMail /></div>
            <div className={`${styles.text}`}>
                <div className={`${styles.textTitle}`}>ارسال پیام</div>
                <div className={`${styles.formButton}`}><NavLink url={'/contactUs/form'}>فرم تماس با ما</NavLink></div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Connection