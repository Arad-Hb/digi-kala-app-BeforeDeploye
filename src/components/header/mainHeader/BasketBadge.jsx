'use client'
import React from 'react'
import styles from './BasketBadge.module.css'
import { useSelector } from 'react-redux'

const BasketBadge = () => {
  const state=useSelector(store=>store.shoppingReducer)
  return (
    <>
    {
      state.totalCount!==0?<div className={`${styles.badgeContainer}`}>{state.totalCount}</div>:null
    }
    </>
  )
}

export default BasketBadge