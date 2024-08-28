'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import AdminLogInForm from './AdminLogInForm'


const ThemeProvider = ({children}) => {

    const store=useSelector(state=>state.adminReducer)

  return (
    <>
    {store.isLogedIn?<div>{children}</div>:<div><AdminLogInForm/></div>}
    </>
  )
}

export default ThemeProvider