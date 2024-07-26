'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from './NavLink.module.css'

const NavLink = ({children,productId,categoryName}) => {

  const [prdID,setPrdID]=useState(null)
  const [ctgrName,setCtgrName]=useState(null)

  useEffect(() => {
    if(productId===null){
      setCtgrName(categoryName)
    }
    else{
      setPrdID(productId)
    }
  }, [])
  return (
    <>
    {
      prdID?<Link href={`/products/singleProduct/${prdID}`} className={`${styles.NavLink}`}>{children}</Link>:
      <Link href={`/products/${ctgrName}`} className={`${styles.NavLink}`}>{children}</Link>
    }
    </>
  )
}

export default NavLink