
// import { removeItem } from '@/redux/features/slices/shoppingCartSlice'
import React from 'react'
import { GoTrash } from "react-icons/go"
// import { useDispatch } from 'react-redux'
import styles from './RemoveButton.module.css'
import Dispatcher from '../features/Dispatcher'

const RemoveButton = ({product}) => {
    // const dispatch=useDispatch()
  return (
    <Dispatcher event={'onClick'} action={'removeItem'} value={product.id}>
        <button className={`${styles.counterButton}`}><GoTrash /></button>
    </Dispatcher>
  )
}

export default RemoveButton