import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'
import { decrementCountAction, deleteFromCartAction, incrementCountAction } from '../../store/reducers/cartReducer'

export default function CartItem({ id, title, price, count, image, description }) {

    const descr = description.split(' ')
    const first_words = descr.slice(0, 20)
    const new_description = first_words.join(' ')
    const dispatch = useDispatch()

    return (
        <div className={s.container}>
            <div className={s.left_side}>
                <img src={`http://localhost:3333${image}`} alt="" className={s.img} />
                <div className={s.text_block}>
                    <p>{title}</p>
                    <p>{new_description}</p>
                </div>
                <div className={s.btns_container}>
                    <button onClick={() => dispatch(decrementCountAction(id))}>-</button>
                    <p>{count}</p>
                    <button onClick={() => dispatch(incrementCountAction(id))}>+</button>
                </div>
                <p>{price * count}$</p>
                



                <span onClick={() => dispatch(deleteFromCartAction(id))}>X</span>
            </div>

            <div className={s.right_side}>

            </div>

        </div>
    )
}
