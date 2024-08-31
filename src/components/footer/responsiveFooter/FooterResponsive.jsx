import React from 'react'
import styles from './FooterResponsive.module.css'
import { BiSolidHomeSmile } from "react-icons/bi"
import { TbCategory2 } from "react-icons/tb"
import { RiShoppingCartLine } from "react-icons/ri"
import { FaRegUser } from "react-icons/fa6"
import NavLink from '@/components/features/NavLink'

const FooterResponsive = () => {
    const navItems=[
        {title:'خانه', Icon:BiSolidHomeSmile,url:'/'},
        {title:'دسته بندی', Icon:TbCategory2,url:'/'},
        {title:'سبد خرید', Icon:RiShoppingCartLine,url:'/shoppingCard'},
        {title:'دیجی کالای من', Icon:FaRegUser,url:'/user'}
    ]
  return (
    <div className={`${styles.outerContainer}`}>
        {
            navItems.map(item=>{
                const {title , Icon , url} = item;
                return <div className={`${styles.items}`}>
                        <NavLink url={url}>
                            <div className={`${styles.itemsLink}`}>
                            <span className={`${styles.itemsIcon}`}><Icon/></span>
                            <span className={`${styles.itemsTitle}`}>{title}</span>
                            </div>
                        </NavLink>
                        </div>
            })
        }
    </div>
  )
}

export default FooterResponsive