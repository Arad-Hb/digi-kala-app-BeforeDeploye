import React from 'react'
import styles from './LegalApproval.module.css'
import Data from '../../../../files/footerData.json'
import NavLink from '@/components/features/NavLink'
import Image from 'next/image'

const LegalApproval = () => {
    const data=Data[5]
  return (
    <div className={`${styles.outerContainer}`}>
        {
            data.legalApproval.map(item=>{
                return(
                    <div className={`${styles.legalLogo}`}>
                        <NavLink url={item.link}><Image src={item.src} width={75} height={75} alt={item.name} className={`${styles.LegalImage}`}/></NavLink>
                    </div>
                )
            })
        }
    </div>
  )
}

export default LegalApproval