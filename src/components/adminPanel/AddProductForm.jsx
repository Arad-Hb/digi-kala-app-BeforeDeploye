'use client'
import React, { useRef, useState } from 'react'
import styles from './AddProductForm.module.css'
import { revalidateTag } from 'next/cache'



const Save=async(prd,img)=>{

    const requestBody=new FormData()
    requestBody.append("data",JSON.stringify(prd))
    requestBody.append("files",img.current.files[0])
    try{
        let requestOptions = {method: 'POST', body:requestBody };
        const response = await fetch("http://localhost:9095/products", requestOptions);
        const result = await response.text();
        revalidateTag("adminTableproducts")
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
    
}

const AddProductForm = () => {
    const [product,setProduct]=useState({id:1548566,name:"",description:"",price:0,stock:0,priceWithDiscount:0,indexImageUrl:"https://static.toiimg.com/thumb/msid-99594814,width-1280,height-720,resizemode-4/99594814.jpg",incredibleOffers:true,dailySuggest:true,images:[{ }]})
    const productImage=useRef()
    const nameChangeHandler=(e)=>{setProduct(prev=>({...prev,name:e.target.value}))}
    const descriptionChangeHandler=(e)=>{setProduct(prev=>({...prev,description:e.target.value}))}
    const priceChangeHandler=(e)=>{setProduct(prev=>({...prev,price:e.target.value}))}
    const discountChangeHandler=(e)=>{setProduct(prev=>({...prev,priceWithDiscount:e.target.value}))}
    const stockChangeHandler=(e)=>{setProduct(prev=>({...prev,stock:e.target.value}))}
    const submitHandler=(e)=>{
        e.preventDefault()
        Save(product,productImage) 
    }
  return (
    <div className={`${styles.container}`}>
      
            <form className={`${styles.form}`} onSubmit={submitHandler}>
                <div className={`${styles.fieldsContainer}`}>
                    <label htmlFor="name" className={`${styles.label}`}>Product Name:
                        <input className={`${styles.field}`} type="text" value={product.name} onChange={nameChangeHandler}/>
                    </label>

                    <label htmlFor="description" className={`${styles.label}`}>Product description:
                        <input className={`${styles.field}`} type="text" value={product.description} onChange={descriptionChangeHandler}/>
                    </label>

                    <label htmlFor="price" className={`${styles.label}`}>Product Price:
                        <input className={`${styles.field}`} type="number" value={product.price} onChange={priceChangeHandler}/>
                    </label>

                    <label htmlFor="discount" className={`${styles.label}`}>Price With Discount:
                        <input className={`${styles.field}`} type="number" value={product.priceWithDiscount} onChange={discountChangeHandler}/>
                    </label>

                    <label htmlFor="stock" className={`${styles.label}`}>Product Stock:
                        <input className={`${styles.field}`} type="number" value={product.stock} onChange={stockChangeHandler}/>
                    </label>

                    <label htmlFor="file" className={`${styles.label}`}>Product Image:
                        <input className={`${styles.field}`} type="file" ref={productImage} />
                    </label>

                    <button type='submit' className={`${styles.button}`}>Add</button>
                </div>
            </form>
        
    </div>
  )
}

export default AddProductForm