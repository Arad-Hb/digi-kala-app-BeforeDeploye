
import React from 'react'
import styles from './Loading.module.css'

const Loading = ({component}) => {
  return (
    <div className={`${styles.container}`}>
      {
        component==='Home'?<span className={`${styles.homeLoader}`}>L &nbsp; ading</span>:
        component==='User'?<span className={`${styles.userLoader}`}></span>:
        component==='Product'?<span className={`${styles.productLoader}`}></span>:
        null
      }
       
    </div>
  )
}

export default Loading