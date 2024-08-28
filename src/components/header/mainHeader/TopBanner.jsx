import React from 'react'
import styles from './TopBanner.module.css'
import Image from 'next/image'

const TopBanner = async() => {

  // const data = await fetch("http://80.75.14.90:9090/topBanner",{next:{tags:['topBanner']}})
  const data = await fetch("http://localhost:9095/topBanner",{next:{tags:['topBanner']}})
  .then(response =>{
   const bannerData=response.json()
   return bannerData
  })
   .catch(error => console.log(error))

  return (
    <div className={`${styles.topBannerContainer}`} >
        <Image className={`${styles.topBannerImage}`} src={data.imageUrl} alt='top banner' fill />
    </div>
  )
}

export default TopBanner