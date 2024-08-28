import React from 'react'
import styles from './AdminButton.module.css'
import { CgProfile } from "react-icons/cg";

const AdminButton = () => {
  return (
    <div className={`${styles.button}`}>
      <div className={`${styles.content}`}>
        <span className={`${styles.icon}`}><CgProfile /></span>
        <span className={`${styles.text}`}>پروفایل</span>
      </div>
    </div>
  )
}

export default AdminButton