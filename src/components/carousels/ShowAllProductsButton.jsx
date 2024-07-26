'use client'
import Link from 'next/link'
import React from 'react'
import styles from './ShowAllProductsButton.module.css'


const ShowAllProductsButton = ({products}) => {


const showAllHandler=()=>{
alert("button clicked")
}

  return (
    <Link href={'/'} onClick={showAllHandler} className={`${styles.incOfferLink}`}></Link>
  )
}

export default ShowAllProductsButton