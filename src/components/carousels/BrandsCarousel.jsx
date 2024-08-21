import React from "react";
import styles from './BrandsCarousel.module.css';
import Data from '../../../files/brandsData.json';
import Carusel from "./Carusel";
import { RiStarSmileLine } from "react-icons/ri";

const BrandsCarousel = () => {

    const data=Data[0].brandsCarousel
    
  return <div className={`${styles.container}`}>
            <div className={`${styles.title}`}>
              <span className={`${styles.icon}`}><RiStarSmileLine /></span>
              <span className={`${styles.text}`}>محبوب‌ترین برندها</span>
            </div>
            <div className={`${styles.carousel}`}><Carusel products={data} dataType={"brand"}/></div>
        </div>
}

export default BrandsCarousel