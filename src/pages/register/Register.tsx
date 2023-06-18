import { useForm, Controller } from 'react-hook-form'
import Input from '../../components/commonComponents/input/Input'
import UserInfo from '../../components/userInfo/UserInfo'
import Button from '../../components/commonComponents/button/Button'
import { PatternFormat } from 'react-number-format'
import { useDispatch } from 'react-redux'
import { setData } from '../../store/slices/dataSlice'
import s from './Register.module.css'

export default function Register() {
  const { control, handleSubmit, register } = useForm()
  const dispatch = useDispatch()

  const onSubmit = (data: any) => {
    console.log(data.phoneNumber)
    dispatch(
      setData({
        phoneNumber: data.phoneNumber.replace(/[^\d]/g, ''),
        email: data.email,
      })
    )
  }
  return (
    <div className={s.content}>
      <UserInfo />
      <form className={s.mainForm} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="phoneNumber"
          render={({ field: { ref, ...field } }) => (
            <label className={s.input_label} htmlFor="phoneNumber">
              Номер телефона
              <PatternFormat
                type="tel"
                id="phoneNumber"
                placeholder="+7 999 999-99-99"
                className={`${s.input_field} ${s.big}`}
                format="+7 (###) ###-##-##"
                {...field}
              />
            </label>
          )}
        />
        <Input
          width="big"
          register={register}
          label="Email"
          htmlFor="email"
          placeholder="tim.jennings@example.com"
          id="email"
          name="email"
          type="email"
        />
        <div className={s.buttons}>
          <Button type="submit" mode="next" title="Начать" />
        </div>
      </form>
    </div>
  )
}
