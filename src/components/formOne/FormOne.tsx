import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../store/slices/dataSlice'
import Input from '../../components/commonComponents/input/Input'
import Button from '../../components/commonComponents/button/Button'
import s from './FormOne.module.css'

const schema = yup.object().shape({
    nickname: yup.string().max(30).matches(/^[A-Za-zА-Яа-я0-9]+$/, 'only letters and numbers are allowed').required(),
    name: yup.string().max(50).matches(/^[A-Za-zА-Яа-я]+$/, 'only letters are allowed').required(),
    surname: yup.string().max(50).matches(/^[A-Za-zА-Яа-я]+$/, 'only letters are allowed').required(),
    gender: yup.string().required().oneOf(["man", "woman"], "one of the genders must be selected"),
  })

  interface FormOneFields {
    nickname: string
    name: string
    surname: string
    gender: string
  }
interface FormOneProps {
  setStep: (step: number) => void
}

export default function FormOne({ setStep }: FormOneProps): JSX.Element {
  const { handleSubmit, register, formState: { errors } } = useForm<FormOneFields>({
    resolver: yupResolver(schema)
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSubmit = (data: any) => {
    console.log(data)
    dispatch(
      setUserData({
        gender: data.gender,
        nickname: data.nickname,
        name: data.name,
        surname: data.surname,
      })
    )
    setStep(2)
  }
  return (
    <form className={s.mainForm} onSubmit={handleSubmit(onSubmit)}>
      <Input
        width="small"
        error={errors.nickname?.message}
        register={register}
        label="Nickname"
        htmlFor="nickname"
        placeholder="Placeholder"
        id="nickname"
        name="nickname"
        type="text"
      />
       {/* <p>{errors.nickname?.message}</p> */}
      <Input
        width="small"
        error={errors.name?.message}
        register={register}
        label="Name"
        htmlFor="name"
        placeholder="Placeholder"
        id="name"
        name="name"
        type="text"
      />
      {/* <p>{errors.name?.message}</p> */}
      <Input
        width="small"
        error={errors.surname?.message}
        register={register}
        label="Surname"
        htmlFor="surname"
        placeholder="Placeholder"
        id="surname"
        name="surname"
        type="text"
      />
      {/* <p>{errors.surname?.message}</p> */}
      <label className={s.input_label} htmlFor="gender-select">
        Sex
        <select
          className={s.gender_select}
          id="gender-select"
          {...register('gender')}
        >
          <option>Не выбрано</option>
          <option value="man">man</option>
          <option value="woman">woman</option>
        </select>
      <p className={s.errorText}>{errors.gender?.message}</p>
      </label>
      <div className={s.formButtons}>
        <Button
          onClick={() => navigate('/')}
          type="button"
          mode="prev"
          title="Назад"
        />
        <Button type="submit" mode="next" title="Далее" />
      </div>
    </form>
  )
}
