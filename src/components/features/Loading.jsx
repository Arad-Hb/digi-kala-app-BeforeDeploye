
import React from 'react'
import styles from './Loading.module.css'
import Image from 'next/image'

const Loading = () => {
  return (
    <div className={`${styles.container}`}>
      <Image width={200} height={100} alt='digikala' src={'/images/digi.svg'}/>
      <span className={`${styles.productLoader}`}></span>
    </div>
  )
}

export default Loading