'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from './NavLink.module.css'

const NavLink = ({children,url}) => {

  const[URL,setURL]=useState('/')
  useEffect(()=>{
    setURL(url)

  },[])
  
  return (
     <Link href={`${URL}`} className={`${styles.NavLink}`}>{children}</Link>
  )
}

export default NavLink