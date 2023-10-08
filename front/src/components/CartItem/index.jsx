import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'
import { decrementCountAction, deleteFromCartAction, incrementCountAction } from '../../store/reducers/cartReducer'

export default function CartItem({ id, title, price, count, image, description, discont_price }) {


    const dispatch = useDispatch()



    return (
        <div className={s.container}>
            <div className={s.left_side}>
                <img src={`http://localhost:3333${image}`} alt="" className={s.img} />
                <div className={s.text_block}>
                    <p>{title}</p>
                    
                </div>
                <div className={s.btns_container}>
                    <button onClick={() => dispatch(decrementCountAction(id))}>-</button>
                    <p>{count}</p>
                    <button onClick={() => dispatch(incrementCountAction(id))}>+</button>
                </div>
                <p>{(price * count).toFixed(2)}$</p>
                



                <span onClick={() => dispatch(deleteFromCartAction(id))}>X</span>
            </div>

            <div className={s.right_side}>

            </div>

        </div>
    )
}
