import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function ProductCard({ id, title, image, price, discont_price, productsStyle }) {

  const saleCalculation = (price, discont_price) => {
    if (discont_price === null) {
      return 0
    }
    return Math.floor((price - discont_price) / price * 100)
  }

  const sale = saleCalculation(price, discont_price)


  return (
    <div className={s.container}>
      <Link to={`/products/${id}`}>
        <div key={id} className={s.img} style={{ backgroundImage: `url(http://localhost:3333${image})`, backgroundSize: 'cover' }}>
          <div className={s.square} />
        </div>
        {/* <img src={`http://localhost:3333${image}`} alt="" /> */}
      </Link>


      {productsStyle ? (
        <div className={s.mainPage}>
          <div className={s.price_wrapper}>
            <p className={s.new_price}>{discont_price}$</p>
            <p className={s.old_price}>{price}$</p>
            <p className={s.discount}>-{sale}%</p>
          </div>
          <p className={s.sale_desc}>{title}</p>
        </div>) : (
        <div className={s.allProductsPage}>
          <p>{title}</p>
          <p>{price}</p>
        </div>)
      }

    </div>
  )
}
