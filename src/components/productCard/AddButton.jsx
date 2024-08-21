'use client'
import React from 'react'
import styles from './AddButton.module.css'
import Counter from './Counter';
import Dispatcher from '../features/Dispatcher';
import { useSelector } from 'react-redux';


const AddButton = ({product}) => {

  const shoppingCardState=useSelector(state=>state.shoppingReducer)

  return (
    <div className={`${styles.buttonContainer}`}>
      {
            shoppingCardState.items.find(item=>item.id===product.id)?<Counter product={product} shoppingCardState={shoppingCardState}/>:
            <Dispatcher event={'onClick'} action={'addItem'} value={product}>
              <span className={`${styles.button}`}>+</span>
            </Dispatcher>
        } 
    </div>
  )
}

export default AddButton