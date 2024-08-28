'use client'
import React from 'react'
import styles from './Header.module.css'
import Dispatcher from '../features/Dispatcher'
import CustomModule from '../features/CustomModule'
import { RxExit } from "react-icons/rx";
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineDateRange } from "react-icons/md";
import NavLink from '../features/NavLink'


const Header = () => {
    const date = new Date()
    const localDate=date.toLocaleString('en-US')
  return (
    <div className={`${styles.container}`}>
        <div className={`${styles.dropDown}`}>
            <CustomModule button={'AdminButton'} rightPosition={0}  topPosition={50}>
                <div className={`${styles.dropDownContent}`}>
                  <NavLink url={'/admin/dashboard'}>
                  <div className={`${styles.item}`}>
                    <span className={`${styles.icon}`}><AiOutlineSetting /></span>
                    <span className={`${styles.text}`}>تنظیمات </span>
                  </div>
                  </NavLink>
                  <NavLink url={'/admin/dashboard'}>
                  <div className={`${styles.item}`}>
                    <span className={`${styles.icon}`}><RxExit /></span>
                    <span className={`${styles.text}`}>
                      <Dispatcher event={'onClick'} action={'setAdminIsLogedOut'}>خروج</Dispatcher>
                    </span>
                  </div>
                  </NavLink>
                </div>
            </CustomModule>
        </div>
        <div className={`${styles.date}`}>
          <span className={`${styles.dateText}`}>{localDate}</span>
          <span className={`${styles.dateIcon}`}><MdOutlineDateRange /></span>
        </div>
    </div>
  )
}

export default Header