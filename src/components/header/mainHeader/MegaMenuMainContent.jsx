'use client'
import React from 'react'
import styles from './MegaMenuMainContent.module.css'
import Data from "../../../../files/menuData.json"
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { IoIosArrowBack } from "react-icons/io"
import { RxDividerVertical } from "react-icons/rx"



const MegaMenuMainContent = () => {

  const menuData=Data[1]
  const state=useSelector(state=>state.menuReducer)

  return (
  
    <div className={`${styles.outerContainer}`}>
      {
        menuData.mainNav.map(item=>{
          if(item.parentId===state.id){
            return<div className={`${styles.innerContainer}`}>
                    <div className={`${styles.headerContainer}`}>
                      <span className={`${styles.staticText}`}>همه محصولات</span>
                      <span className={`${styles.dynamicText}`}>{item.name}</span>
                      <span className={`${styles.headerIcon}`}><IoIosArrowBack /></span>
                    </div>
                  
              {
              item.titles.map(Item=>{
                return(
                  <div className={`${styles.itemsContainer}`}>
                    <div className={`${styles.titleContainer}`}>
                      <span className={`${styles.outLine}`}><RxDividerVertical /></span>
                      <span className={`${styles.text}`}>{Item.name}</span>
                      <span className={`${styles.titleIcon}`}><IoIosArrowBack /></span>
                    </div>
                    {
                        Item.items.map(items=>{
                          return<div className={`${styles.itemContainer}`}>
                            <Link href={'/'} className={`${styles.itemLink}`} >{items.name}</Link>
                          </div>
                        })
                    }
                  </div>
                )
              })
              }
            </div>
          }
        })
      }
    </div>
  )
}
export default MegaMenuMainContent