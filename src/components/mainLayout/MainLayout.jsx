import React from 'react'
import Header from '../header/mainHeader/Header'
import Footer from '../footer/mainFooter/Footer'

const MainLayout = ({children}) => {
  return (
  <>
    <div><Header/></div>
    <div>{children}</div>
    <div><Footer/></div>
  </>
  ) 
}

export default MainLayout