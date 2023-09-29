import React from 'react'
import Cart from '../../components/Cart'
import FormItem from '../../components/FormItem'

export default function CartPage() {

  //пишем логику и передаем пропсом в форм

  const btn_text = 'Order'

  return (
    <div>
      <Cart/>
      <FormItem text={btn_text} btn_style={'cart_btn'}/>
    </div>
  )
}
