'use client'
import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css"
import ReactImageGallery from 'react-image-gallery'



const MainSlider = ({value}) => {

  return (
    <div>
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
     </div>
  )
}

export default MainSlider