'use client'
import React, { useRef } from 'react'
import styles from './SearchBox.module.css'
import { LuSearch } from "react-icons/lu"
import { useRouter } from 'next/navigation'


const SearchBox = () => {

    const text=useRef()
    const router=useRouter()
    const submitHandler =(e) => {
      e.preventDefault()
      router.push(`/search/${text.current.value}`)
  }

  return (
      <form onSubmit={submitHandler} className={`${styles.searchBoxContainer}`}>
        <input type='text' ref={text} className={`${styles.searchBox}`} placeholder='جستوجو در'/>
        <button className={`${styles.searchBoxButton}`}><LuSearch /></button>
      </form>
  )
}

export default SearchBox