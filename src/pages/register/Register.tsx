import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/commonComponents/input/Input'
import UserInfo from '../../components/userInfo/UserInfo'
import Button from '../../components/commonComponents/button/Button'
import { PatternFormat } from 'react-number-format'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../store/slices/dataSlice'
import s from './Register.module.css'

interface RegisterFormFields {
  email: string
  phoneNumber: string
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  phoneNumber: yup.string().min(18, 'Номер должен содержить минимум 11 цифр').trim().required(),
})

export default function Register(): JSX.Element {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterFormFields>({
    resolver: yupResolver(schema),
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = (data: any) => {
    console.log(data.phoneNumber.length)
    
    dispatch(
      setUserData({
        phoneNumber: data.phoneNumber.replace(/[^\d]/g, ''),
        email: data.email,
      })
    )
    navigate('/form')
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
        <p>{errors.phoneNumber?.message}</p>
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
        <p>{errors.email?.message}</p>
        <div className={s.buttons}>
          <Button type="submit" mode="next" title="Начать" />
        </div>
      </form>
    </div>
  )
}
