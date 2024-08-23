import Image from 'next/image'
import React, { Suspense } from 'react'
import styles from './DigiIcons.module.css'
import { IoIosMore } from "react-icons/io";
import NavLink from '../features/NavLink';
import { getData } from '@/serverActions/getData';
import CustomSkeleton from '../features/CustomSkeleton';


const DigiIcons = async() => {

  const data=await getData("SevenIcons")
  
  return (
  <Suspense fallback={<CustomSkeleton component={'DigiIcons'}/>}>
    <div className={`${styles.iconsContainer}`}>
        {
            data.map(item=>{
                return(
                  <div className={`${styles.iconsCard}`}>
                    <NavLink url={`/products/${item.url}`}>
                      <div className={`${styles.icon}`}>
                        <Image src={`/images/${item.iconName}`} alt={item.label} height={40} width={40}/>
                        <label className={`${styles.iconsLabel}`}>{item.label}</label>
                      </div>
                    </NavLink>  
                  </div>
                ) 
            })
        }
        <div className={`${styles.dottedIconCard}`}>
          <NavLink url={'/products'}>
           <div className={`${styles.dottedIconLink}`}>
            <IoIosMore  className={`${styles.dottedIcon}`}/>
            <label className={`${styles.dottedIconLabel}`}>بیشتر</label>
           </div>
          </NavLink>  
        </div>
    </div>
  </Suspense>
  )
}

export default DigiIcons