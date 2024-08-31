import React from 'react'
import styles from './FooterResponsiveContent.module.css'
import TitleLogo from '../mainFooter/TitleLogo'
import JumpToTopButton from '../footersHooks/JumpToTopButton'
import CustomDropDown from '@/components/features/CustomDropDown'
import AboutUs from '../mainFooter/AboutUs'
import CustomerServices from '../mainFooter/CustomerServices'
import OrderGuidance from '../mainFooter/OrderGuidance'
import Partners from '../mainFooter/Partners'
import Introduction from '../mainFooter/Introduction'


const FooterResponsiveContent = () => {
  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.responsiveHeader}`}>
            <div className={`${styles.logo}`}><TitleLogo/></div>
            <div className={`${styles.upButton}`}><JumpToTopButton/></div>
        </div>
        <div className={`${styles.responsiveMain}`}>
          <div className={`${styles.items}`}>
            <div className={`${styles.item}`}>
              <CustomDropDown title={'با دیجی کالا'}>
                <AboutUs/>
              </CustomDropDown>
            </div>
            <div className={`${styles.item}`}>
              <CustomDropDown title={'خدمات مشتریان'}>
                <CustomerServices/>
              </CustomDropDown>
            </div>
            <div className={`${styles.item}`}>
              <CustomDropDown title={'راهنمای خرید از دیجی کالا'}>
                <OrderGuidance/>
              </CustomDropDown>
            </div>
            <div className={`${styles.item}`}>
              <CustomDropDown title={'شرکای تجاری'}>
                <Partners/>
              </CustomDropDown>
            </div>
          </div>
        </div>
        <div className={`${styles.responsiveFooter}`}>
            <div className={`${styles.introduction}`}><Introduction/></div>
        </div>
    </div>
  )
}

export default FooterResponsiveContent