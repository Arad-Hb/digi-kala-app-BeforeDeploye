'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import AdminLogInForm from './AdminLogInForm'


const ThemeProvider = ({children}) => {
    
    const store=useSelector(state=>state.adminReducer)

  return (
    <>
    {/* {store.isLogedIn===false?<div><AdminLogInForm/></div>:
    <div>{children}</div>} */}
    <div>{children}</div>
    </>
  )
}

export default ThemeProvider