import React from 'react'
import styles from './SideBar.module.css'
import NavLink from '../features/NavLink'
import { TbLayoutDashboard } from "react-icons/tb";
import { PiShoppingCart } from "react-icons/pi";
import { TbShoppingBagPlus } from "react-icons/tb";
import { AiOutlineSetting } from "react-icons/ai";
import { CgUserList } from "react-icons/cg";
import { TbRosetteDiscount } from "react-icons/tb";
import { RiArticleLine } from "react-icons/ri";
import { GrPieChart } from "react-icons/gr"

const SideBar = () => {
  const data=[
    {name:"خانه", Icon:TbLayoutDashboard ,id:0,url:'/'},
    {name:"محصولات", Icon: TbShoppingBagPlus,id:1,url:'/products'},
    {name:"مشتری ها", Icon:CgUserList ,id:2,url:'/customers'},
    {name:"سفارش ها", Icon: PiShoppingCart,id:3,url:'/orders'},
    {name:"تخفیف ها", Icon: TbRosetteDiscount,id:4,url:'/discount'},
    {name:"مقالات ", Icon: RiArticleLine,id:5,url:'/article'},
    {name:"چارت ها ", Icon: GrPieChart,id:6,url:'/chart'},
    {name:"تنظیمات", Icon:AiOutlineSetting ,id:7,url:'/settingForm'}
  ]
  return (
    <div className={`${styles.container}`}>
      {
        data.map(item=>{
          const { name, Icon , url} = item;
          return(
          <NavLink url={`/admin/dashboard${url}`}>
            <div className={`${styles.item}`}>
              <span className={`${styles.icon}`}><Icon/></span>
              <span className={`${styles.name}`}>{name}</span>
            </div>
          </NavLink>
          )
        })
      }
       
          
        
    </div>
  )
}

export default SideBar