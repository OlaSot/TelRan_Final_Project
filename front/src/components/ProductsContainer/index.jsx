import React from 'react'
import ProductCard from '../ProductCard'
import s from './index.module.css'

export default function ProductsContainer({products, productsStyle}) {




  return (
    <div className={s.products_container}>
        {
            products?.map(el => <ProductCard key={el.id} {...el} productsStyle={productsStyle}/>)
        }
    </div>
  )
}


