import React, { useEffect } from 'react'
import s from './index.module.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsByCategory } from '../../requests/products_req'
import ProductsContainer from '../../components/ProductsContainer'

export default function ProductsByCategoriesPage() {

  const {id} = useParams()

  const dispatch = useDispatch()

  useEffect(() => dispatch(getProductsByCategory(id)),[dispatch,id])

  const products_by_category = useSelector(state => state.productsByCategory)

  console.log(products_by_category)
  
  const products = products_by_category.data
 
  const category_title = products_by_category.category

  return (
    <div className={s.container}>
      <h1>{category_title?.title}</h1>
      <div className={s.sort_container}>
      <div className={s.price}>
        <p className={s.title}>Price</p>
        <input type="text" placeholder='from' />
        <input type="text" placeholder='to' />
      </div>

      <div className={s.discount}>
        <p className={s.title}>Discounted items</p>
        <input type="checkbox" />
      </div>

      <div className={s.sorted}>
        <p className={s.title}>Sorted</p>
        <select name="" id="">
          <option value="" selected>default</option>
        </select>
      </div>
      </div>

    <ProductsContainer products={products}/>
    
    </div>
  )
}

