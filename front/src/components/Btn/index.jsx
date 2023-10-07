import React from 'react'
import s from './index.module.css'

export default function Btn({children}) {
  return (
    <div className={s.btn_cat}>
        <img src="/mainPage/1x/button.png" alt="" className={s.btn_image} />
        <p>{children}</p>
    </div>
  )
}
