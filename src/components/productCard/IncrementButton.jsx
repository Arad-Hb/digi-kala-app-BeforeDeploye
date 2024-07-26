'use client'
import { increaseItem } from '@/redux/features/slices/shoppingCartSlice'
import React from 'react'
import { useDispatch } from 'react-redux'
import { HiPlusSm } from "react-icons/hi"
import styles from './IncrementButton.module.css'

const IncrementButton = ({product}) => {
    const dispatch=useDispatch()

  return (
    <button className={`${styles.counterButton}`} onClick={()=>dispatch(increaseItem(product.id))}><HiPlusSm /></button>
  )
}

export default IncrementButton