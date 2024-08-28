import ContactUsLayout from '@/components/contactUsPage/ContactUsLayout'
import MainLayout from '@/components/mainLayout/MainLayout'
import React from 'react'

const layout = ({children}) => {
  return (
    <>
        <MainLayout>
          <ContactUsLayout>
            {children}
          </ContactUsLayout>
        </MainLayout>
    </>
  )
}

export default layout