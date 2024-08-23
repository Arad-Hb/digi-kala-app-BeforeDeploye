import React from 'react'
import { BiDotsHorizontal } from "react-icons/bi"
import styles from './ApplicationSources.module.css'
import Data from '../../../../files/footerData.json'
import NavLink from '@/components/features/NavLink'
import Image from 'next/image'

const ApplicationSources = () => {
    const data=Data[6]
  return (
    
        <div className={`${styles.outerContainer}`}>
            <div className={`${styles.appSourcesHeader}`}>
                <Image src={'/images/footerlogo2.png'} alt='app sources logo' width={44} height={44}/>
                <span className={`${styles.appSourcesTitle}`}>دانلود اپلیکیشن دیجی کالا</span>
            </div>
            <div className={`${styles.appSourcesContainer}`}>
             {
                data.applicationSources.map(item=>{
                return(
                    <NavLink url={item.link}>
                        <div className={`${styles.appSourcesButton}`}><Image src={item.src} alt={item.name} width={142} height={44}/></div>
                    </NavLink>
                    )
                })
                }
                <NavLink url={'https://www.digikala.com/landings/new-app/'}>
                    <div className={`${styles.otherAppSourcesButton}`}><BiDotsHorizontal className={`${styles.otherAppSources}`}/></div>
                </NavLink>
            </div>
        </div>
  )
}

export default ApplicationSources