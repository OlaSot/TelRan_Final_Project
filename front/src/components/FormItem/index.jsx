import React from "react";
import FormButton from "../FormButton";
import FormInput from "../FormInput";

export default function FormItem({ text, btn_style, input_style }) {
  return (
    <div>
      <FormInput input_style={input_style}>NUMBER</FormInput>
      <FormButton btn_style={btn_style}>{text}</FormButton>
    </div>
  );
}
