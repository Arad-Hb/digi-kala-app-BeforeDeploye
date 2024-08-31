'use client'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addId } from '@/redux/features/slices/menuSlice'
import { addItem, decreaseItem, increaseItem, removeItem } from '@/redux/features/slices/shoppingCartSlice'
import { setAdminIsLogedOut } from '@/redux/features/slices/AdminSlice'


const Dispatcher = ({children,event,action,value}) => {
   const dispatch= useDispatch()
   const OnClickHandler=()=>{
    event==='onClick' &&  dispatchHandler(action,value)
   }
   const OnMouseEnterHandler=()=>{
    event==='onMouseEnter' &&  dispatchHandler(action,value)
   }
   const dispatchHandler=(action,value)=>{
    action==='addId' && dispatch(addId(value))
    action==='addItem' && dispatch(addItem(value))
    action==='decreaseItem' && dispatch(decreaseItem(value))
    action==='removeItem' && dispatch(removeItem(value))
    action==='increaseItem' && dispatch(increaseItem(value))
    action==='setAdminIsLogedOut' && dispatch(setAdminIsLogedOut())
   }
  return (
    <div onClick={()=>OnClickHandler()} onMouseEnter={()=>OnMouseEnterHandler()}>
    {children}
    </div>
  )
}

export default Dispatcher