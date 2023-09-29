import React from 'react'
import Cart from '../../components/Cart'
import FormItem from '../../components/FormItem'
import { useSelector } from 'react-redux'

export default function CartPage() {

  const cart_state = useSelector(state => state.cart)
  const btn_text = 'Order'

  return (
    <div>
      <Cart/>
      <FormItem text={btn_text} btn_style={'cart_btn'} cartData={cart_state}/>
    </div>
  )
}
