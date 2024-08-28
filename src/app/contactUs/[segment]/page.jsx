import React from 'react'
import styles from './page.module.css'
import ContactUs from '@/components/contactUsPage/ContactUs'


const page = (props) => {
  const itemId=Number(props.params.segment)

  return <div className={`${styles.container}`}><ContactUs id={itemId}/></div>
}

export default page