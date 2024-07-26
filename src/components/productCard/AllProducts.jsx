import React from 'react'
import Card from './Card'


const AllProducts = async({products}) => {
    
    return (
        <div>
            {
                products.map(product => {
                    return <Card product={product}/>
                })
            }
        </div> 
    )
}

export default AllProducts