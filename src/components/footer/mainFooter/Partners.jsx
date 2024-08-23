import React from 'react'
import styles from './Partners.module.css'
import Data from '../../../../files/footerData.json'
import NavLink from '@/components/features/NavLink'


const Partners = () => {

 const data=Data[0]

  return (
    <div className={`${styles.container}`}>
        <div className={`${styles.laws}`}>برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.</div>
        <div className={`${styles.partners}`}>
        {
            data.partners.map(item=>{
                return(
                    <NavLink url={`${item.link}`}>
                        <div className={`${styles.partnerLink}`}>
                            <img src={`/images/${item.name}.svg`}  className={`${styles.partnerImage}`} alt={`${item.name}`}/>
                        </div>
                    </NavLink>
                )
            })
        }
        </div>
    </div>
    
  )
}

export default Partners
