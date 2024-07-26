'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Counter.module.css'
import RemoveButton from './RemoveButton'
import IncrementButton from './IncrementButton'
import DecrementButton from './DecrementButton'

const Counter = ({product}) => {
    
    const state=useSelector(store=>store.shoppingReducer)
 
  return (
    <div className={`${styles.counterContainer}`}>
        <IncrementButton product={product}/>
        <label className={`${styles.counterLabel}`} >{state.items.filter(item=>item.id===product.id)[0].count}</label>
        {
          state.items.filter(item=>item.id===product.id)[0].count===1?<RemoveButton product={product}/>:<DecrementButton product={product}/>
        }
       
    </div>
  )
}


export default Counter
