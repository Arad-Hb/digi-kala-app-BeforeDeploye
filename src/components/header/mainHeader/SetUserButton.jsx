'use client'
import React, { useEffect } from 'react'
import SignUpButton from './SignUpButton'
import { Authentication } from '@/repository/Authentication'
import CustomModule from '@/components/features/CustomModule'
import UserInfo from './UserInfo'

const SetUserButton = () => {
  
const isAuthenticated=Authentication()

  return (
    <>
      {isAuthenticated?
      <CustomModule button={'userButton'} leftPosition={100} topPosition={40}>
        <UserInfo user={isAuthenticated}/>
      </CustomModule>:
      <SignUpButton/>}
    </>
  )
}

export default SetUserButton