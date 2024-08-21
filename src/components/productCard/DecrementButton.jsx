// 'use client'
import React from 'react'
import styles from './DecrementButton.module.css'
// import { useDispatch } from 'react-redux'
import { HiMinus } from "react-icons/hi"
// import { decreaseItem } from '@/redux/features/slices/shoppingCartSlice'
import Dispatcher from '../features/Dispatcher'

const DecrementButton = ({product}) => {
    // const dispatch=useDispatch()
  return (
    <Dispatcher event={'onClick'} action={'decreaseItem'} value={product.id}>
      <button className={`${styles.counterButton}`}><HiMinus /></button>
    </Dispatcher>
    
  )
}

export default DecrementButton