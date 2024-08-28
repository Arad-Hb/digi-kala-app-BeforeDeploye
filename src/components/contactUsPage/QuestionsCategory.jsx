import React from 'react'
import styles from './QuestionsCategory.module.css'
import { BiCategoryAlt } from "react-icons/bi";
import Data from '../../../files/contactUsData.json'
import NavLink from '../features/NavLink';
import Image from 'next/image';

const QuestionsCategory = () => {
    const data=Data[0]
    
  return (
    <div className={`${styles.container}`}>
        <div className={`${styles.title}`}>
            <div className={`${styles.iconBox}`}><BiCategoryAlt className={`${styles.icon}`}/></div>
            <div className={`${styles.text}`}>دسته‌بندی پرسش‌ها</div>
        </div>
        <div className={`${styles.content}`}>
           { data.questionsCategory.map(item=>{
            return(
            <NavLink url={`/contactUs/${item.id}`}>
                <div className={`${styles.item}`}>
                    <div className={`${styles.itemsIcon}`}>
                        <Image src={`/images${item.src}`} alt={item.title} width={40} height={40} className={`${styles.itemsImage}`}/>
                    </div>
                    <div className={`${styles.itemsText}`}>{item.title}</div>
                </div>
            </NavLink>
            )})}
        </div>
    </div>
  )
}

export default QuestionsCategory