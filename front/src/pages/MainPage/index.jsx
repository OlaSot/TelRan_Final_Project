import React, { useEffect } from 'react'
import s from './index.module.css'
import CategoriesContainer from '../../components/CategoriesContainer'
import { Link } from 'react-router-dom'
import ProductsContainer from '../../components/ProductsContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../requests/products_req'


export default function MainPage() {

  const dispatch = useDispatch()

  useEffect(() => { dispatch(getAllProducts) }, [dispatch])

  const products = useSelector(state => state.allProducts)

  const first_four_products = products.filter(el => el.discont_price !== null).slice(0,4)

  console.log(first_four_products);

  const theme = useSelector(state => state.theme.value);


  return (
    <div className={theme === 'dark' ? 'dark_theme' : ''}>
      <div className={s.sale_container}>
        <div className={s.image}>
          <div className={s.text}>
            <h2>New season</h2>
            <h1>Gardening</h1>
            <Link to={'/sales'} className={s.links}>
              <div className={s.sale_btn}>Sale</div>
            </Link>
          </div>

        </div>
      </div>

      <div className={s.catalog_container}>
        <div className={s.btn_container}>
          <h2>Catalog</h2>
          <Link to='/categories' className={s.category_link}>
            <div className={s.btn_cat}>All categories</div>
          </Link>
        </div>
        <CategoriesContainer limit={4} />
      </div>

      <div className={s.dwarf_wrapper}>
        <div className={s.discount_descr}>
          <h1>5% off</h1>
          <h2>on the first order</h2>
          <input type="text" className={s.phone_num_inp} placeholder='+49' />
          <button className={s.discount_btn}>Get a discount</button>
        </div>
      </div>


      <div className={s.gen_sale_container}>
        <h3>Sale</h3>
        <div>

          <ProductsContainer products={first_four_products} productsStyle={true}/>

          {/* <div className={s.product_container}>
            <div className={s.disc_img}> </div>
            <div className={s.price_wrapper}>
              <p className={s.new_price}>500$</p>
              <p className={s.old_price}>1000$</p>
              <p className={s.discount}>-7%</p>
            </div>

            <p className={s.sale_desc}>Decorative forged bridge</p>
          </div>

          <div className={s.product_container}>
            <div className={s.disc_img}> </div>
            <div className={s.price_wrapper}>
              <p className={s.new_price}>500$</p>
              <p className={s.old_price}>1000$</p>
              <p className={s.discount}>-7%</p>
            </div>
            <p className={s.sale_desc}>Decorative forged bridge</p>
          </div>

          <div className={s.product_container}>
            <div className={s.disc_img}> </div>
            <div className={s.price_wrapper}>

              <p className={s.new_price}>500$</p>
              <p className={s.old_price}>1000$</p>
              <p className={s.discount}>-7%</p>

            </div>
            <p className={s.sale_desc}>Decorative forged bridge</p>
          </div>

          <div className={s.product_container}>
            <div className={s.disc_img}> </div>
            <div className={s.price_wrapper}>

              <p className={s.new_price}>500$</p>
              <p className={s.old_price}>1000$</p>
              <p className={s.discount}>-7%</p>

            </div>
            <p className={s.sale_desc}>Decorative forged bridge</p>
          </div> */}

        </div>
      </div>

    </div>
  )
}
