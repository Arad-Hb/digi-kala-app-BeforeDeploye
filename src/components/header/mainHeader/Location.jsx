import React from 'react'
import styles from './Location.module.css'
import Countries from './Countries'
import CustomModule from '@/components/features/CustomModule'

const Location = () => {

  return (
    <div className={`${styles.outerContainer}`}>
      <CustomModule button={'locationButton'} leftPosition={5} topPosition={30}>
        <div className={`${styles.locationContent}`}>
          <Countries/>
        </div>
      </CustomModule>  
    </div>
  )
}

export default Location