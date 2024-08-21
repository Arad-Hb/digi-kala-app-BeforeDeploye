'use client'
import React from 'react'
import styles from './Profile.module.css'
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegPenToSquare } from "react-icons/fa6";
import AcountDetails from './AcountDetails'
import Image from 'next/image'
import { Authentication } from '@/repository/Authentication'
import Link from 'next/link';


const Profile = () => {

const data=Authentication()

  return (
    <div className={`${styles.outerContainer}`}>
      <div className={`${styles.mainContainer}`}>
      <div className={`${styles.sideBar}`}>
        <div className={`${styles.personalInformations}`}>
          <div className={`${styles.information}`}>
            <span className={`${styles.name}`}>{data && data.name} {data && data.lastname}</span>
            <span className={`${styles.mobile}`}>{data && data.mobileNumber}</span>
          </div>
          <div className={`${styles.informationIcon}`}><FaRegPenToSquare /></div>
        </div>
        <div className={`${styles.details}`}><AcountDetails/></div>
      </div>
      <div className={`${styles.mainContent}`}>
        <div  className={`${styles.varification}`}>
          <div className={`${styles.varificationInformation}`}>
            <span className={`${styles.varificationIcon}`}><HiOutlineInformationCircle /></span>
            <span className={`${styles.varificationText}`}>با تایید هویت می‌توانید‌ امنیت حساب کاربری‌تان را افزایش دهید و از امکان «خرید اعتباری» نیز استفاده کنید</span>
          </div>
          <div className={`${styles.varificationLink}`}>
            <Link href={'#'}  className={`${styles.link}`}>
              <span className={`${styles.linkText}`}>تایید هویت</span>
              <span className={`${styles.linkIcon}`}><IoIosArrowBack /></span>
            </Link>
          </div>
        </div>
        <div  className={`${styles.orderDetails}`}>
          <div className={`${styles.detailsTitle}`}>سفارش های من</div>
          <div className={`${styles.detailsItems}`}>
            <div className={`${styles.item}`}>
              <span className={`${styles.itemImage}`}>
                <Image src={"/images/blueCloud.svg"} width={80} height={90} alt='status'/>
              </span>
              <span className={`${styles.itemCondition}`}>
                <span className={`${styles.ConditionNumber}`}>0 سفارش</span>
                <span className={`${styles.ConditionName}`}>جاری</span>
              </span>
            </div>
            <div className={`${styles.item}`}>
              <span className={`${styles.itemImage}`}>
                <Image src={"/images/greenBox.svg"} width={80} height={90} alt='status'/>
              </span>
              <span className={`${styles.itemCondition}`}>
                <span className={`${styles.ConditionNumber}`}>0 سفارش</span>
                <span className={`${styles.ConditionName}`}>تحویل شده</span>
              </span>
            </div>
            <div className={`${styles.item}`}>
              <span className={`${styles.itemImage}`}>
                <Image src={"/images/yellowBox.svg"} width={80} height={90} alt='status'/>
              </span>
              <span className={`${styles.itemCondition}`}>
                <span className={`${styles.ConditionNumber}`}>0 سفارش</span>
                <span className={`${styles.ConditionName}`}>مرجوع شده</span>
              </span>
            </div>
          </div>
        </div>
        <div  className={`${styles.organsOrder}`}>
        این گزینه برای کسانی است که نیاز به خرید سازمانی (با فاکتور رسمی و گواهی ارزش‌افزوده) دارند.
        </div>
      </div>
      </div>
      
      <div className={`${styles.responsiveContainer}`}>
        <div className={`${styles.responsiveHeader}`}>
        <div className={`${styles.personalInformations}`}>
          <div className={`${styles.information}`}>
            <span className={`${styles.name}`}>{data && data.name} {data && data.lastname}</span>
            <span className={`${styles.mobile}`}>{data && data.mobileNumber}</span>
          </div>
          <div className={`${styles.informationIcon}`}><FaRegPenToSquare /></div>
        </div>
        </div>
        <div className={`${styles.responsiveMain}`}>
        <div  className={`${styles.varification}`}>
          <div className={`${styles.varificationInformation}`}>
            <span className={`${styles.varificationIcon}`}><HiOutlineInformationCircle /></span>
            <span className={`${styles.varificationText}`}>با تایید هویت می‌توانید‌ امنیت حساب کاربری‌تان را افزایش دهید و از امکان «خرید اعتباری» نیز استفاده کنید</span>
          </div>
          <div className={`${styles.varificationLink}`}>
            <Link href={'#'}  className={`${styles.link}`}>
              <span className={`${styles.linkText}`}>تایید هویت</span>
              <span className={`${styles.linkIcon}`}><IoIosArrowBack /></span>
            </Link>
          </div>
        </div>
        <div  className={`${styles.orderDetails}`}>
          <div className={`${styles.detailsTitle}`}>سفارش های من</div>
          <div className={`${styles.detailsItems}`}>
            <div className={`${styles.item}`}>
              <span className={`${styles.itemImage}`}>
                <Image src={"/images/blueCloud.svg"} width={80} height={90} alt='status'/>
              </span>
              <span className={`${styles.itemCondition}`}>
                <span className={`${styles.ConditionNumber}`}>0</span>
                <span className={`${styles.ConditionName}`}>جاری</span>
              </span>
            </div>
            <div className={`${styles.item}`}>
              <span className={`${styles.itemImage}`}>
                <Image src={"/images/greenBox.svg"} width={80} height={90} alt='status'/>
              </span>
              <span className={`${styles.itemCondition}`}>
                <span className={`${styles.ConditionNumber}`}>0</span>
                <span className={`${styles.ConditionName}`}>تحویل شده</span>
              </span>
            </div>
            <div className={`${styles.item}`}>
              <span className={`${styles.itemImage}`}>
                <Image src={"/images/yellowBox.svg"} width={80} height={90} alt='status'/>
              </span>
              <span className={`${styles.itemCondition}`}>
                <span className={`${styles.ConditionNumber}`}>0</span>
                <span className={`${styles.ConditionName}`}>مرجوع شده</span>
              </span>
            </div>
          </div>
        </div>
        </div>
        <div className={`${styles.responsiveFooter}`}><AcountDetails/></div>
      </div>
    </div>
  )
}

export default Profile