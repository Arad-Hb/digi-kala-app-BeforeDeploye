'use client'
import React, { useState } from 'react'
import styles from './CustomDropDown.module.css'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const CustomDropDown = (props) => {
    const [display,setDisplay]=useState(false)
  return (
    <div className={`${styles.container}`}>
        <div className={`${styles.dropDownTitle}`}>
            <a href='#' onClick={()=>setDisplay(!display)} className={`${styles.dropDownLink}`}>
                <div className={`${styles.title}`}>{props.title}</div>
                <div className={`${styles.icon}`}>{display ? <IoIosArrowUp />:<IoIosArrowDown />}</div>
            </a>
        </div>
        {display && <div className={`${styles.dropDownContent}`}>{props.content}</div>}
    </div>
  )
}

export default CustomDropDown