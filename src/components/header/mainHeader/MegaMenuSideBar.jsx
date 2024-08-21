import React from 'react'
import styles from './MegaMenuSideBar.module.css'
import { CiMobile3 } from "react-icons/ci"
import { LuPencilRuler } from "react-icons/lu"
import { LiaLaptopSolid,LiaNotesMedicalSolid } from "react-icons/lia"
import { RiSofaLine, RiShoppingBasketLine} from "react-icons/ri"
import { CgSmartHomeRefrigerator } from "react-icons/cg"
import { PiTShirtLight } from "react-icons/pi"
import { GiEmeraldNecklace } from "react-icons/gi"
import { TbHeartCheck,TbGiftCard ,TbBrandReactNative} from "react-icons/tb"
import { FaCampground } from "react-icons/fa"
import { MdOutlineSmartToy } from "react-icons/md"
import { BiWrench } from "react-icons/bi"
import { IoCarSportOutline } from "react-icons/io5"
import Dispatcher from '@/components/features/Dispatcher'


const MegaMenuSideBar = () => {

const sideNav=[
        {name:' موبایل', Icon: CiMobile3,id:0},
        {name:"کتاب و لوازم تحریر", Icon: LuPencilRuler,id:1},
        {name:"کالای دیجیتال", Icon: LiaLaptopSolid,id:2},
        {name:"خانه و آشپزخانه", Icon: RiSofaLine,id:3},
        {name:"لوازم خانگی برقی", Icon: CgSmartHomeRefrigerator,id:4},
        {name:"مد و پوشاک", Icon: PiTShirtLight,id:5},
        {name:"ساعت و جواهرات", Icon: GiEmeraldNecklace,id:6},
        {name:"آرایشی بهداشتی", Icon: TbHeartCheck,id:7},
        {name:"تجهیزات پزشکی و سلامت", Icon: LiaNotesMedicalSolid,id:8},
        {name:"ورزش و سفر", Icon:  FaCampground,id:9},
        {name:"کارت هدیه", Icon: TbGiftCard,id:10},
        {name:"کالاهای سوپرمارکتی", Icon: RiShoppingBasketLine ,id:11},
        {name:"اسباب بازی و کودک", Icon: MdOutlineSmartToy,id:12},
        {name:"ابزارآلات و تجهیزات", Icon:  BiWrench,id:13},
        {name:"خودرو و موتورسیکلت", Icon: IoCarSportOutline,id:14},
        {name:"محصولات بومی و محلی", Icon: TbBrandReactNative,id:15}
    ]

  return (
    <div className={`${styles.outerContainer}`}>
        {
            sideNav.map(item=>{
                const { name, Icon , id} = item;
                return(
                <Dispatcher event={'onMouseEnter'} action={'addId'} value={id}>
                    <div className={`${styles.categoryContainer}`} >
                        <div className={`${styles.link}`}>
                            <span className={`${styles.icon}`}><Icon/></span>
                            <span className={`${styles.text}`}>{name}</span>
                        </div>
                    </div>
                </Dispatcher>    
                )
            })
        }
    </div>
  )
}

export default MegaMenuSideBar