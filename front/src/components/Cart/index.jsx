import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../CartItem'
import { clearCartAction } from '../../store/reducers/cartReducer'
import s from './index.module.css'

export default function Cart() {

    const cart_state = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const total = cart_state.reduce((acc, { price, count }) => acc + price * count, 0);

    useEffect(() => {
        localStorage.setItem('prod_in_Cart', JSON.stringify(cart_state))
    }, [cart_state])

    return (
        <div className={s.container}>
            <h1>Cart:</h1>
            <div>
                {
                    cart_state.map(el => <CartItem key={el.id} {...el} />)
                }
            </div>
            <div 
        className={s.clear_btn}
        onClick={() => dispatch(clearCartAction())}
      >
        Clear cart
      </div>
      <p>Total: { total }$</p>
        </div>
    )
}
