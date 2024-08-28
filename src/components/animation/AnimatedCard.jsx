'use client'
import React from 'react'
import styles from './AnimatedCard.module.css'
import { motion } from "framer-motion";
import Image from 'next/image';

const AnimatedCard = ({item,index}) => {
  return (
    <motion.div
      className="card"
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: index % 2 === 0 ? 50 : -50
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1 // Animation duration
        }
      }}
      viewport={{ once: true }}
    >
      <div className={`${styles.container}`}>
        <div className={`${styles.content}`}>
            <div className={`${styles.title}`}>{item.title}</div>
            <div className={`${styles.article}`}>{item.article}</div>
        </div>
        <div className={`${styles.image}`}>
            <Image src={`/images/${item.src}`} alt={item.title} width={300} height={200}/>
        </div>
      </div>
    </motion.div>
  )
}

export default AnimatedCard