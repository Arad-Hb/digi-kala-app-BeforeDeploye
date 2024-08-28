import React from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
import NavLink from '../features/NavLink'
import CustomModule from '../features/CustomModule'

const Header = () => {
  return (
    <div className={`${styles.container}`}>
        <div className={`${styles.title}`}>
            <Image alt='red smile' width={32} height={12} src={'/images/smileRed.svg'}/>
            <span className={`${styles.text}`}>درباره گروه دیجی‌کالا</span>
        </div>
        <div className={`${styles.navBar}`}>
            <ul className={`${styles.navBarItems}`}>
                <li className={`${styles.navBarItem}`}>
                    <CustomModule button={'درباره ما'} rightPosition={0} leftPosition={0} topPosition={40}>
                        <div className={`${styles.navBarLinks}`}>
                            <NavLink url={'/aboutUs/هویت ما'}><span style={{position:'absolute',right:300}} className={`${styles.navBarLink}`}>هویت ما</span></NavLink>
                            <NavLink url={'/aboutUs/تاریخچه دیجی کالا'}><span style={{position:'absolute',right:400}} className={`${styles.navBarLink}`}>تاریخچه دیجی کالا</span></NavLink>
                        </div>
                    </CustomModule>
                </li>
                <li className={`${styles.navBarItem}`}>
                    <CustomModule button={'کسب و کار ما'} rightPosition={0} leftPosition={0} topPosition={40}>
                        <div className={`${styles.navBarLinks}`}>
                        <NavLink url={'/aboutUs'}><span style={{position:'absolute',right:400}} className={`${styles.navBarLink}`}>مارکت پلیس دیجی‌کالا</span></NavLink>
                        <NavLink url={'/aboutUs/sellers'}><span style={{position:'absolute',right:530}} className={`${styles.navBarLink}`}>کسب و کارهای بومی و محلی</span></NavLink>
                        <NavLink url={'/aboutUs'}><span style={{position:'absolute',right:700}} className={`${styles.navBarLink}`}>لجستیک عملیاتی</span></NavLink>
                        <NavLink url={'/aboutUs'}><span style={{position:'absolute',right:800}} className={`${styles.navBarLink}`}>دیجی کالا بیزینس</span></NavLink>
                        </div>
                    </CustomModule>
                </li>
                <li className={`${styles.navBarItem}`}>
                    <CustomModule button={'اخبار و منابع'} rightPosition={0} leftPosition={0} topPosition={40}>
                        <div className={`${styles.navBarLinks}`}>
                        <NavLink url={'/aboutUs'}><span style={{position:'absolute',right:600}} className={`${styles.navBarLink}`}>اتاق خبر</span></NavLink>
                        <NavLink url={'/aboutUs'}><span style={{position:'absolute',right:680}} className={`${styles.navBarLink}`}>پلتفورم ویدیو</span></NavLink>
                        <NavLink url={'/aboutUs'}><span style={{position:'absolute',right:780}} className={`${styles.navBarLink}`}>بسته رسانه ای</span></NavLink>
                        </div>
                    </CustomModule>
                </li>
                <li className={`${styles.navBarItem}`}>
                    <CustomModule button={'گزارش سال دیجی کالا'} rightPosition={0} leftPosition={0} topPosition={40}>
                        <div className={`${styles.navBarLinks}`}>
                        <NavLink url={'/aboutUs'}><span style={{position:'absolute',right:780}} className={`${styles.navBarLink}`}>گزارش های گروه دیجی‌کالا</span></NavLink>
                        </div>
                    </CustomModule>
                </li>
                <li className={`${styles.navBarItem}`}>
                    <CustomModule button={'بلاگ ها'} rightPosition={0} leftPosition={0} topPosition={40}>
                        <div className={`${styles.navBarLinks}`}>
                        <NavLink url={'/aboutUs'}><span style={{position:'absolute',left:400}} className={`${styles.navBarLink}`}>بلاگ راهبران</span></NavLink>   
                        <NavLink url={'/aboutUs'}><span style={{position:'absolute',left:500}} className={`${styles.navBarLink}`}>بلاگ داستان پردازی</span></NavLink>   
                        </div>
                    </CustomModule>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header