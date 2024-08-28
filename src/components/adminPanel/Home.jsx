'use client'
import React from 'react'
import styles from './Home.module.css'
import { PiShoppingCart } from "react-icons/pi";
import { TbShoppingBagPlus } from "react-icons/tb";
import { CgUserList } from "react-icons/cg";
import { useSelector } from 'react-redux';
import Counter from '../animation/Counter';
import Chart from './Chart';

const Home = ({productsCout,usersCount}) => {
    
    const orders=useSelector(state=>state.shoppingReducer)

    const data=[
        {name:"محصولات", Icon: TbShoppingBagPlus,count:productsCout},
        {name:"مشتری ها", Icon:CgUserList,count:usersCount},
        {name:"سفارش ها", Icon: PiShoppingCart,count:orders.totalCount}
      ]
  return (
    <div className={`${styles.container}`}>
        <div className={`${styles.items}`}>
           {
            data.map((item)=>{
                const { name, Icon,count} = item;
                return(
            <div className={`${styles.item}`}>
                <div className={`${styles.itemName}`}>
                    <span className={`${styles.icon}`}><Icon/></span>
                    <span className={`${styles.name}`}>{name}</span>
                </div>
                <div className={`${styles.itemCount}`}><Counter number={count}/></div>
            </div>)})
           } 
        </div>
        <div className={`${styles.charts}`}><Chart/></div>
    </div>
  )
}

export default Home