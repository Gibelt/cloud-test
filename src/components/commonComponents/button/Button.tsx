import s from './Button.module.css'

export interface ButtonComponentProps {
  title: string
  type: 'submit' | 'reset' | 'button';
  mode: string
  onClick?: () => void
}

export default function Button({ title, type, mode, onClick }: ButtonComponentProps): JSX.Element {
  return (
    <button onClick={onClick} type={type} className={s[`${mode}`]}>
      {title}
    </button>
  )
}
