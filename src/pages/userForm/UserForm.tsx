import FormOne from '../../components/formOne/FormOne'
import ProgressLine from '../../components/progressLine/ProgressLine'
import s from './UserForm.module.css'

export default function UserForm() {
  return (
    <div className={s.content}>
      <ProgressLine step='1'/>
      <FormOne />
    </div>
  )
}
