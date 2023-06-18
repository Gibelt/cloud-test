import s from './Button.module.css'

export interface StandardComponentProps {
  title: string
  type: string
  mode: string
}

export default function Button({ title, type, mode }: StandardComponentProps) {
  return (
    <button type={type ? 'submit' : 'button'} className={s[`${mode}`]}>
      {title}
    </button>
  )
}
