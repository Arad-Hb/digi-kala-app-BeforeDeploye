'use client'
import React, { Suspense } from 'react'
import "react-image-gallery/styles/css/image-gallery.css"
import ReactImageGallery from 'react-image-gallery'
import CustomSkeleton from '../features/CustomSkeleton'


const MainSlider = ({value}) => {

  return (
  <div>
    <Suspense fallback={<CustomSkeleton component={'MainSlider'}/>}>
      <ReactImageGallery 
     items={value}
     autoPlay={true}
     slideInterval={3000}
     lazyLoad={true}
     showFullscreenButton = {false}
     showPlayButton={false}
     showThumbnails={false}
     showBullets={true}
     isRTL={true}
     fullscreen={true}
     />
    </Suspense>
  </div>
  )
}

export default MainSlider