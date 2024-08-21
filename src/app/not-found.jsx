import React from 'react'
import styles from './page.module.css'
import NavLink from '@/components/features/NavLink'

const notFound = () => {
  return (
    <div className={`${styles.notFoundContainer}`}>
        <span className={`${styles.loader}`}></span>
        <span className={`${styles.buttonContainer}`}>
            <NavLink url={'/'}>
            <button className={`${styles.button}`} role="button">
                <span className={`${styles.buttonShadow}`}></span>
                <span className={`${styles.buttonEdge}`}></span>
                <span className={`${styles.buttonFront}`}>Back To Home</span>
            </button>
            </NavLink>
        </span>
    </div>
  )
}

export default notFound