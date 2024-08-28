import Home from '@/components/adminPanel/Home'
import { getData } from '@/serverActions/getData'
import React from 'react'

const SetArreyCount=(arrey)=>{
      let count = 0;
      for (let i = 0; i < arrey.length; i++) {count++;}
      return count; 
}

const page = async() => {
  
  const productsData = await getData("products")
  const usersData = await getData("users")
  const productsLength=SetArreyCount(productsData)
  const usersLength=SetArreyCount(usersData)
  
  return (
    <><Home productsCout={productsLength} usersCount={usersLength}/></>
  )
}

export default page