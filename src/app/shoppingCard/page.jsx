import Loading from '@/components/features/Loading'
import ShoppingCart from '@/components/shoppingCard/ShoppingCart'
import React, { Suspense } from 'react'

const page = () => {

  return (
    <Suspense fallback={<Loading component={'Product'}/>}>
      <ShoppingCart/>
    </Suspense>
    
  )
}

export default page