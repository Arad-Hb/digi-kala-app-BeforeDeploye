'use client'
import React,{ useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const Counter = ({number}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, number, {
      duration: 2
    });
  }, []);

  return <motion.h1>{rounded}</motion.h1>;
}


export default Counter