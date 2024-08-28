import React from 'react'
import CustomModule from '@/components/features/CustomModule'
import MegaMenuContainer from './MegaMenuContainer'

const MegaMenu = () => {
  return (
    <>
        <CustomModule button={'megaMenuButton'} topPosition={40}>
            <MegaMenuContainer/>
        </CustomModule>
    </>
  )
}

export default MegaMenu