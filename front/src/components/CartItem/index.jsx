import React from 'react'
import s from './index.module.css'

export default function CartItem({ id, title, price, count, image, description }) {

    const descr = description.split(' ')
    const first_words = descr.slice(0, 20)
    const new_description = first_words.join(' ')

    return (
        <div className={s.container}>
            <div className={s.left_side}>
                <img src={`http://localhost:3333${image}`} alt="" className={s.img} />
                <div className={s.text_block}>
                    <p>{title}</p>
                    <p>{new_description}</p>
                </div>
                <div className={s.btns_container}>
                    <button>-</button>
                    <p>{count}</p>
                    <button>+</button>
                </div>
                <p>{price * count}$</p>
                



                <span>X</span>
            </div>

            <div className={s.right_side}>

            </div>

        </div>
    )
}
