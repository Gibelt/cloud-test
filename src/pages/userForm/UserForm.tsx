import { useState } from 'react'
import FormOne from '../../components/formOne/FormOne'
import FormTwo from '../../components/formTwo/FormTwo'
import FormThree from '../../components/formThree/FormThree'
import ProgressLine from '../../components/progressLine/ProgressLine'
import Modal from '../../components/modal/Modal'
import s from './UserForm.module.css'

export default function UserForm(): JSX.Element {
    const [step, setStep] = useState(3)
    const [modalType, setModalType] = useState('')
  return (
    <div className={s.content}>
      <ProgressLine step={step}/>
      {step === 1 && <FormOne setStep={setStep} />}
      {step === 2 && <FormTwo setStep={setStep} />}
      {step === 3 && <FormThree setModalType={setModalType} setStep={setStep} />}
      {modalType && <Modal setModalType={setModalType} type={modalType} />}
    </div>
  )
}
