import React from 'react'
import { LuInstagram } from "react-icons/lu"
import { BsTwitter } from "react-icons/bs"
import { ImLinkedin } from "react-icons/im"
import { SiAparat } from "react-icons/si"
import styles from './SocialMedia.module.css'
import NavLink from '@/components/features/NavLink'

const SocialMedia = () => {
  const data=[
    {name:'instagram',link:'https://www.instagram.com/digikalacom/', Icon: LuInstagram},
    {name:'twitter',link:'https://twitter.com/digikalacom', Icon: BsTwitter},
    {name:'linkdin',link:'https://www.linkedin.com/company/digikala/mycompany/', Icon: ImLinkedin},
    {name:'aparat',link:'https://www.aparat.com/digikala/', Icon: SiAparat}
]
  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.title}`}>همراه ما باشید!</div>
        <div className={`${styles.Links}`}>
        {
            data.map(item=>{
                const {link,Icon} = item;
                return <NavLink url={link}><div className={`${styles.Link}`}><Icon/></div></NavLink>
            })
        }
        </div>
    </div>
  )
}

export default SocialMedia