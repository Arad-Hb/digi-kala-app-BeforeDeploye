import React from 'react'
import styles from './ContactUsLayout.module.css'
import QuestionsCategory from './QuestionsCategory'
import Connection from './Connection'


const ContactUsLayout = ({children}) => {
  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.main}`}>{children}</div>
        <div className={`${styles.footer}`}>
            <div className={`${styles.questionsCategory}`}><QuestionsCategory/></div>
            <div className={`${styles.connectionContainer}`}><Connection/></div>
        </div>
    </div>
  )
}

export default ContactUsLayout