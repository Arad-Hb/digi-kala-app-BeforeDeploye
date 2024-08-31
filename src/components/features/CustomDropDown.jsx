'use client'
import React, { useState } from 'react'
import styles from './CustomDropDown.module.css'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const CustomDropDown = (props) => {
    const [display,setDisplay]=useState(false)
  return (
    <div className={`${styles.container}`}>
        <div className={`${styles.dropDownTitle}`}>
            <div onClick={()=>setDisplay(!display)} className={`${styles.dropDownLink}`}>
                <div className={`${styles.title}`}>{props.title}</div>
                <div className={`${styles.icon}`}>{display ? <IoIosArrowUp />:<IoIosArrowDown />}</div>
            </div>
        </div>
        {display && 
          <div className={`${styles.dropDownContent}`}>
          { props.content?<span>{props.content}</span>:
                    <span>{props.children}</span>
          }
          </div>}
    </div>
  )
}

export default CustomDropDown