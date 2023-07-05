import s from './Input.module.css'

export interface InputProps {
  register: any
  label?: string
  htmlFor?: string
  placeholder: string
  id?: string
  name: string
  width: string
  type: string
  error?: string
}

export default function Input({
  error,
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
    <div className={s.content}>
    {label && <label className={s.input_label} htmlFor={htmlFor}>
      {label}
      </label>}
      <input
        type={type}
        className={`${s.input_field} ${s[`${width}`]}`}
        placeholder={placeholder}
        {...register(name)}
        id={id}
      />
      {error && <p className={s.errorText}>{error}</p>}
      </div>
  )
}
