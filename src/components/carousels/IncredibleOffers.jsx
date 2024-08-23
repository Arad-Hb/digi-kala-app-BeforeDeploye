import React, { Suspense } from 'react'
import styles from './IncredibleOffers.module.css'
import Image from 'next/image'
import Carusel from './Carusel'
import NavLink from '../features/NavLink'
import { getData } from '@/serverActions/getData'
import CustomSkeleton from '../features/CustomSkeleton'

const IncredibleOffers = async() => {
    const incredibleOffer=await getData("products/incredibleOffers")
  return (
    <Suspense fallback={<CustomSkeleton component={'IncredibleOffers'}/>}>
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.imageContainer}`}>
            <div className={`${styles.incOfferImages}`}>
                <Image src="/images/Amazings.svg" width={100} height={100} className={`${styles.amzingText}`} />
                <Image src="/images/Amazing.svg" width={80} height={60} className={`${styles.amazingPic}`} />
                <Image src="/images/amazing-word.svg" width={100} height={30} className={`${styles.amzingWord}`}/>
            </div>
            <div className={`${styles.incOfferLink}`}>
                <NavLink productId={null} categoryName={"incredibleOffers"} >مشاهده همه</NavLink>
            </div>
        </div>
        <div className={`${styles.carouselContainer}`}><Carusel products={incredibleOffer} dataType={"product"}/></div>
    </div>
    </Suspense>
)
}

export default IncredibleOffers