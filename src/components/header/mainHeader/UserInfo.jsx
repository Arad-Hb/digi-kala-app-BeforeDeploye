import React from 'react'
import styles from './UserInfo.module.css'
import { IoIosArrowBack } from 'react-icons/io'
import AcountDetails from '@/components/authuntication/AcountDetails'


const UserInfo =({user}) => {
  return (
      <div className={`${styles.userContent}`}>
          <div className={`${styles.userName}`}>
            <span className={`${styles.nameText}`}>{user.name} {user.lastname}</span>
            <span className={`${styles.nameIcon}`}><IoIosArrowBack /></span>
          </div>
          <div><AcountDetails/></div>
      </div>
  )
}

export default UserInfo