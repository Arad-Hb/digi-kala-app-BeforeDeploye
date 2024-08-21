import React from 'react'
import styles from './CategoriesItems.module.css'
import Data from '../../../files/menuData.json'
import Image from 'next/image'
import NavLink from '../features/NavLink'


const CategoriesItems = () => {
    const data=Data[0]
  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.title}`}>خرید بر اساس دسته بندی</div>
        <div className={`${styles.itemsContainer}`}>
        {
        data.sideNav.map(item=>{
        return<div className={`${styles.itemLink}`}>
                <NavLink productId={null} categoryName={null}>
                  <div className={`${styles.item}`}>
                    <Image className={`${styles.itemImage}`} src={item.imageUrl} width={100} height={100} alt={item.name}/>
                    <span className={`${styles.itemText}`}>{item.name}</span>
                  </div>
                </NavLink>
              </div>
            })
        }
        </div>
    </div>
  )
}

export default CategoriesItems