import Image from 'next/image'
import React from 'react'
import styles from './DigiIcons.module.css'
import { IoIosMore } from "react-icons/io";
import NavLink from '../features/NavLink';
import Link from 'next/link';

async function getSevenIcons() {

  const response = await fetch("http://80.75.14.90:9090/SevenIcons" )
  if (!response.ok) {
      console.log("error")
      return
  }
  else {
      const data = await response.json()
      return data
  }
}
const DigiIcons = async() => {

  const data=await getSevenIcons()
  
  return (
    <div className={`${styles.iconsContainer}`}>
        {
            data.map(item=>{
                return(
                  <div className={`${styles.iconsCard}`}>
                    <NavLink productId={null} categoryName={item.url}>
                      <Image src={`/images/${item.iconName}`} alt={item.label} height={40} width={40}/>
                      <label className={`${styles.iconsLabel}`}>{item.label}</label>
                    </NavLink>  
                  </div>
                )
                
            })
        }
        <div className={`${styles.dottedIconCard}`}>
           <Link href={'/products'} className={`${styles.dottedIconLink}`}>
            <IoIosMore  className={`${styles.dottedIcon}`}/>
            <label className={`${styles.dottedIconLabel}`}>بیشتر</label>
          </Link>  
        </div>
    </div>
  )
}

export default DigiIcons