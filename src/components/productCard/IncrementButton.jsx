import React from 'react'
import { HiPlusSm } from "react-icons/hi"
import styles from './IncrementButton.module.css'
import Dispatcher from '../features/Dispatcher'

const IncrementButton = ({product}) => {

  return (
    <Dispatcher event={'onClick'} action={'increaseItem'} value={product.id}>
      <button className={`${styles.counterButton}`}><HiPlusSm /></button>
    </Dispatcher>
  )
}

export default IncrementButton