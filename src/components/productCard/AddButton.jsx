'use client'
import React from 'react'
import styles from './AddButton.module.css'
import { RxPlusCircled } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import Counter from './Counter';
import { addItem } from '@/redux/features/slices/shoppingCartSlice';



const AddButton = ({product}) => {

  const state=useSelector(store=>store.shoppingReducer)
  const dispatch=useDispatch()

const addItemToBasketHandler=(product)=>{

   dispatch(addItem(product))

}

  return (
  
    <div className={`${styles.buttonContainer}`}>
      
      {
            state.items.find(item=>item.id==product.id)?<Counter product={product}/>:
            <button type='button' className={`${styles.button}`} onClick={()=>addItemToBasketHandler(product)}><RxPlusCircled /></button>
        } 
      
    </div>
  
    
  )
}

export default AddButton