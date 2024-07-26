'use client'
import React from 'react'
import styles from './JumpToTopButton.module.css'

const JumpToTopButton = () => {

    const jumpToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
  return (
    <div className={`${styles.container}`}>
        <button type='button' onClick={jumpToTop} className={`${styles.button}`}>بازگشت به بالا</button>
    </div>
  )
}

export default JumpToTopButton 