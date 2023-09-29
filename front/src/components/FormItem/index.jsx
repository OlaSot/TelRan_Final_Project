import React from "react";
import FormButton from "../FormButton";
import FormInput from "../FormInput";
import { useForm } from "react-hook-form";
import s from './index.module.css'
import { createPhoneNumber } from "../../requests/products_req";

export default function FormItem({ text, btn_style, input_style}) {


  const {register, handleSubmit, reset, formState: {errors}} = useForm()

  const mobile_phone_register = register('phone', {
    required: '*This field is required',
    pattern: {
      value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      message: '*wrong format'
    }
  }) 
  

  
  const submit = (data) => {
    createPhoneNumber(data)
    reset()
  }


  return (
    <form onSubmit={handleSubmit(submit)}>
      <FormInput input_style={input_style} type='text' placeholder='+49' name='phone' 
      {...mobile_phone_register}/>
    {errors.phone && <p className={s.req_text}>{errors.phone.message}</p>}
      <FormButton btn_style={btn_style}>{text}</FormButton>
    </form>
  );
}
