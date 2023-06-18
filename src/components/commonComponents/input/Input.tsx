import { UseFormRegister, FieldValues } from 'react-hook-form'
import s from './Input.module.css'

export interface InputProps {
  register: UseFormRegister<FieldValues>
  label: string
  htmlFor: string
  placeholder: string
  id: string
  name: string
  width: string
  type: string
}

export default function Input({
  register,
  label,
  htmlFor,
  placeholder,
  id,
  name,
  width,
  type,
}: InputProps) {
  return (
    <label className={s.input_label} htmlFor={htmlFor}>
      {label}
      <input
        type={type}
        className={`${s.input_field} ${s[`${width}`]}`}
        placeholder={placeholder}
        {...register(name)}
        id={id}
      />
    </label>
  )
}
