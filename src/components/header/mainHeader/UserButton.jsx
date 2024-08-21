import NavLink from '@/components/features/NavLink'
import React from 'react'
import styles from './UserButton.module.css'
import { FaRegUser } from 'react-icons/fa'
import { PiUserList } from 'react-icons/pi'

const UserButton = () => {
  return (
      <div className={`${styles.container}`}>
        <NavLink url={'user/dashboard'}>
          <span className={`${styles.icon}`}><PiUserList /></span>
        </NavLink>
      </div>
  )
}

export default UserButton