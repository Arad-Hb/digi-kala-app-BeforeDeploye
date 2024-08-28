import React from 'react'
import styles from './NavBar.module.css'
import NavLink from '@/components/features/NavLink'
import {RiCoupon3Line, RiDiscountPercentLine, RiFireLine, RiShoppingBasketLine } from "react-icons/ri"
import { MdCardGiftcard } from "react-icons/md"
import { GrPhoneVertical } from "react-icons/gr"

const NavBar = () => {
    const navItems=[
        {title:'شگفت انگیزها', Icon:RiDiscountPercentLine,style:'navItem',url:'/products/incredibleOffers'},
        {title:'سوپر مارکت', Icon:RiShoppingBasketLine,style:'navItem',url:'/contactUs/5'},
        {title:'کارت هدیه', Icon:MdCardGiftcard,style:'navItem',url:'/contactUs/4'},
        {title:'پرفروش ترین ها', Icon:RiFireLine,style:'navItemResponsive',url:'/'},
        {title:'تخفیف ها و پیشنهادها', Icon:RiCoupon3Line,style:'navItemResponsive',url:'/contactUs/4'},
        {title:'در دیجی کالا بفروشید!', Icon:GrPhoneVertical,style:'navItem',url:'/contactUs'},
        {title:'سوالی دارید؟', Icon:GrPhoneVertical,style:'navItem',url:'/contactUs/form'}
    ]
    
  return (
<>
    <ul className={`${styles.navItems}`}>
    {
        navItems.map(item=>{
            const {title , Icon , style, url} = item;
            return(
        <NavLink url={url}>
            <li className={`${styles.navItem}`}>
                <Icon className={`${styles.navItemIcon}`}/>
                <span className={`${styles.navItemText}`}>{title}</span>
            </li>
        </NavLink>
                )
        })
    }
    </ul>
</>
  )
}

export default NavBar