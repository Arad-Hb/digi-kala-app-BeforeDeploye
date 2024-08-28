import React from 'react'
import styles from './Footer.module.css'
import { LuInstagram } from "react-icons/lu"
import { BsTwitter } from "react-icons/bs"
import { ImLinkedin } from "react-icons/im"

const Footer = () => {

  return (
    <div className={`${styles.outerContainer}`}>
    <div className={`${styles.container}`}>
        <div className={`${styles.socialMedia}`}>
            <div className={`${styles.socialMediaTitle}`}>درباره گروه دیجی‌کالا</div>
            <div className={`${styles.socialMediaIcons}`}>
                <LuInstagram className={`${styles.icon}`}/>
                <BsTwitter className={`${styles.icon}`}/>
                <ImLinkedin className={`${styles.icon}`}/>
            </div>
        </div>
        <div className={`${styles.item}`}>
            <span>فروشگاه دیجی کالا</span>
            <span>مارکت پلیس دیجی کالا</span>
        </div>
        <div className={`${styles.item}`}>
            <span>بیانیه های مطبوعاتی</span>
            <span>اتاق خبر دیجی کالا</span>
        </div>
        <div className={`${styles.item}`}>
            <span>پلتفورم ویدیو</span>
            <span>گزارش سال</span>
        </div>
        <div className={`${styles.item}`}>
            <span>فرصت های همکاری</span>
            <span>مسیولیت ما</span>
        </div>
    </div>
    <div className={`${styles.footer}`}>برای استفاده از مطالب وب‌سایت درباره گروه دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت گروه تجارت الکترونیک دیجی‌کالا است.</div>
    </div>
  )
}

export default Footer