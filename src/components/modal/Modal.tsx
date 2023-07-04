import Button from '../commonComponents/button/Button'
import cn from 'classnames'
import { useNavigate } from 'react-router-dom'
import s from './Modal.module.css'

interface ModalProps {
  type: string
  setModalType: (type: string) => void
}

export default function Modal({ type, setModalType }: ModalProps) {
    const navigate = useNavigate()
  const iconClass = cn({
    [s.iconSuccess]: type === 'success',
    [s.iconError]: type === 'error',
  })
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        {type === 'error' && (
          <div className={s.header}>
            <h3 className={s.title}>Ошибка</h3>
            <div onClick={() => setModalType('')} className={s.closeIcon} />
          </div>
        )}
        {type === 'success' && (
          <h3 className={s.title}>Форма успешно отправлена</h3>
        )}
        <div className={iconClass} />
        {type === 'error' && (
          <div className={s.buttons}>
            <Button onClick={() => setModalType('')} type="button" mode="next" title="Закрыть" />
          </div>
        )}
        {type === 'success' && (
          <Button onClick={() => navigate('/')} type="button" mode="next" title="На главную" />
        )}
      </div>
    </div>
  )
}
