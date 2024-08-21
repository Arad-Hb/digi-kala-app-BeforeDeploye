'use client'
import React, { useEffect, useState } from 'react'
import styles from './CustomModule.module.css'
import UserButton from '../header/mainHeader/UserButton'
import LocationButton from '../header/mainHeader/LocationButton'
import MegaMenuButton from '../header/mainHeader/MegaMenuButton'

const CustomModule = ({children,button,rightPosition,leftPosition}) => {
    const [buttonComponent,setButtonComponent]=useState()
    const [display,setDisplay]=useState("none")

    useEffect(() => {
        setButtonComponent(button) 
    }, []);
   
  const contentStyles={
    display:`${display}`,
    right:rightPosition,
    left:leftPosition,
    }
  return (
    <div className={`${styles.container}`}>
        <div onMouseEnter={()=>{buttonComponent==='locationButton'?null:setDisplay("flex")}} onClick={()=>{buttonComponent==='locationButton'?setDisplay("flex"):null}}>
          {buttonComponent==='userButton'?<UserButton/>:
          buttonComponent==='locationButton'?<LocationButton/>:
          buttonComponent==='megaMenuButton'?<MegaMenuButton/>:
          <></>}
        </div>
        <div style={contentStyles}  className={`${styles.children}`} onMouseLeave={()=>{setDisplay("none")}} onClick={()=>{setDisplay("none")}}>{children}</div>
    </div>
  )
}

export default CustomModule