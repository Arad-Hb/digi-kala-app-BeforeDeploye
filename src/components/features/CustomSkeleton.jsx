'use client'
import React from 'react'
import styles from './CustomSkeleton.module.css'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const CustomSkeleton = ({component}) => {
  const Card=
  <div style={{ direction: 'rtl' }}>
    <Skeleton height={170} width={180} />
    <Skeleton height={24} width={180} style={{ marginTop: 22 }} />
    <Skeleton height={20} width={180} style={{ marginTop: 10, marginBottom: 22 }} />
    <Skeleton height={21} width={80} style={{ marginTop: 14 }} />
  </div>;
  const digiIcons=()=>{
    const digiIconsSkeletons = []
    for (let i=0; i<8; i++) {
      digiIconsSkeletons.push(
            <div className={`${styles.digiIconItem}`}>
              <Skeleton circle={true} width={50} height={50} />
              <Skeleton width={50} height={10} />
            </div>)
   }
   return digiIconsSkeletons
}
const IncredibleOffers=()=>{
  const IncredibleOfferSkeletons = []
  for (let i=0; i<6; i++) {
    IncredibleOfferSkeletons.push(
      <div className={`${styles.IncredibleOffersCard}`}>{Card}</div>)
 }
 return IncredibleOfferSkeletons
}
  return (
    <>
    {
      component==='MainSlider'?<Skeleton className={`${styles.mainSlider}`}/>:
      component==='DigiIcons'?<div className={`${styles.digiIcons}`}>{ digiIcons()}</div>:
      component==='IncredibleOffers'?
      <div className={`${styles.IncredibleOffers}`}>
        <div className={`${styles.titleContainer}`}>
          <Skeleton height={100} width={100} />
          <Skeleton height={40} width={40} style={{ marginTop: 22 }} />
          <Skeleton height={20} width={80} style={{ marginTop: 20 }} />
        </div>
        <div className={`${styles.cardsContainer}`}>{IncredibleOffers()}</div>
      </div>:
      component==='Card' && Card
    }
      
    </>
  )
}

export default CustomSkeleton