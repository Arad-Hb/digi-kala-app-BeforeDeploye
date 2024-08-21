import React from 'react'
import styles from './Counter.module.css'
import RemoveButton from './RemoveButton'
import IncrementButton from './IncrementButton'
import DecrementButton from './DecrementButton'

const Counter = ({product,shoppingCardState}) => {
 
  return (
    <div className={`${styles.counterContainer}`}>
        <IncrementButton product={product}/>
        <label className={`${styles.counterLabel}`} >{shoppingCardState.items.filter(item=>item.id===product.id)[0].count}</label>
        {
          shoppingCardState.items.filter(item=>item.id===product.id)[0].count===1?<RemoveButton product={product}/>:<DecrementButton product={product}/>
        }
    </div>
  )
}


export default Counter
