import Footer from '@/components/aboutUsPage/Footer'
import Header from '@/components/aboutUsPage/Header'
import React from 'react'

const layout = ({children}) => {
  return (
    <div style={{position:'relative'}} >
      <div><Header/></div>
      <div>{children}</div>
      <div><Footer/></div>
    </div>
  )
}

export default layout