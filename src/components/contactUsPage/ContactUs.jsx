'use client'
import React from 'react'
import styles from './ContactUs.module.css'
import Data from '../../../files/contactUsData.json'
import CustomDropDown from '@/components/features/CustomDropDown'
import Image from 'next/image'

const ContactUs = ({id}) => {
    
    const data=Data[0]
   
  return (
    <div className={`${styles.outerContainer}`}>
    {data.questionsCategory.map(item=>{
        if(item.id===id){
            return<div className={`${styles.container}`}>
                <div className={`${styles.title}`}>
                    <div className={`${styles.itemsIcon}`}>
                        <Image src={`/images${item.src}`} alt={item.title} width={40} height={40} className={`${styles.itemsImage}`}/>
                    </div>
                    <div className={`${styles.itemsText}`}>{item.title}</div>
                </div>
                {
                    item.content.map(object=>{
                    return<CustomDropDown title={object.question} content={object.answer}/>
                })}
              </div> 
            }
        })
    }
    </div>
  )
}

export default ContactUs