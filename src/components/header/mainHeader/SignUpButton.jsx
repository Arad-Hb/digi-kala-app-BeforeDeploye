import React from 'react'
import styles from './SignUpButton.module.css'
import { CgEnter } from 'react-icons/cg'
import NavLink from '@/components/features/NavLink'

const SignUpButton = () => {

  return (
    <div className={`${styles.outerContainer}`}>
      <NavLink url={'/user'}>
      <div className={`${styles.button}`}>
        <span className={`${styles.icon}`}><CgEnter /></span>
        <span className={`${styles.text}`}>ورود</span>
        <span className={`${styles.sepLine}`}></span>
        <span className={`${styles.text}`}>ثبت نام</span>
      </div>
      </NavLink>
    </div>
  )
}

export default SignUpButton