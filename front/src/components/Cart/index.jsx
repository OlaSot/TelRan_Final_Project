import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../CartItem'

export default function Cart() {

    const cart_state = useSelector(state => state.cart)

    return (
        <div>
            <p>Cart:</p>
            <div>
                {
                    cart_state.map(el => <CartItem key={el.id} {...el} />)
                }
            </div>
        </div>
    )
}
