import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../requests/products_req'
import ProductsContainer from '../../components/ProductsContainer'
import s from './index.module.css'

export default function AllProductsPage() {

  const dispatch = useDispatch()

  useEffect(() => {dispatch(getAllProducts)},[dispatch])

  const allProducts = useSelector(state => state.allProducts)

  return (
    <div className={s.container}>
      <h1>Name</h1>
      <ProductsContainer products={allProducts}/>
    </div>
  )
}

