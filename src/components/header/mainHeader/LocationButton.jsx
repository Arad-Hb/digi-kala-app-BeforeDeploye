import React from 'react'
import styles from './LocationButton.module.css'
import { GrLocation } from "react-icons/gr"

const LocationButton = () => {
  return (
    <div className={`${styles.locationButton}`}>
        <GrLocation  className={`${styles.locationIcon}`}/>
        <span className={`${styles.locationText}`}>لطفا شهر خود را انتخاب کنید</span>
    </div>
  )
}

export default LocationButton