import React from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
import SearchBox from './SearchBox'
import BasketButton from './BasketButton'
import TopBanner from './TopBanner'
import SetUserButton from './SetUserButton'
import Location from './Location'
import NavBar from './NavBar'
import MegaMenu from './MegaMenu'
import 'react-loading-skeleton/dist/skeleton.css'


const Header =() => {
  return (
    <div className={`${styles.outerContainer}`}>
      <div className={`${styles.topBanner}`}><TopBanner/></div>
      <div className={`${styles.mainHeader}`}>
        <div className={`${styles.searchLogo}`}>
          <div className={`${styles.logo}`}><Image src={'/images/logo.svg'} alt={'digi kala'} height={40} width={120}/></div>
          <div className={`${styles.searchBox}`}><SearchBox/></div>
        </div>
        <div className={`${styles.basketSignup}`}>
          <div className={`${styles.signUpButton}`}><SetUserButton/></div>
          <div className={`${styles.basketButton}`}><BasketButton/></div>
        </div>
      </div>
      <div className={`${styles.navBarContainer}`}>
        <div className={`${styles.navigation}`}>
          <div className={`${styles.megaMenu}`}><MegaMenu/></div>
          <div className={`${styles.navBar}`}><NavBar/></div>
        </div>
        <div className={`${styles.location}`}><Location/></div>
      </div>
    </div>
  )
}

export default Header