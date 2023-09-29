import React from 'react'
import s from './index.module.css'

export default function FormInput({input_style}) {
  return (
    <div className={s[input_style]}>
        <input type="text" />
    </div>
  )
}
