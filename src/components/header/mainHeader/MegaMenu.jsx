import React from 'react'
import CustomModule from '@/components/features/CustomModule'
import MegaMenuContainer from './MegaMenuContainer'

const MegaMenu = () => {
  return (
    <>
        <CustomModule button={'megaMenuButton'}>
            <MegaMenuContainer/>
        </CustomModule>
    </>
  )
}

export default MegaMenu