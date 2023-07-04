import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux'
import { Root } from '../../store/store'
import { setUserData } from '../../store/slices/dataSlice'
import { useSendDataMutation } from '../../api/api'
import Button from '../../components/commonComponents/button/Button'
import s from './FormThree.module.css'

const schema = yup.object().shape({
  about: yup.string().max(200).required(),
})

interface FormThreeFields {
  about: string
}
interface FormOneProps {
  setStep: (step: number) => void
  setModalType: (type: string) => void
}

export default function FormThree({ setStep, setModalType }: FormOneProps): JSX.Element {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<FormThreeFields>({
    resolver: yupResolver(schema),
  })
  const dispatch = useDispatch()
  const {userData} = useSelector((state: Root) => state.data)
  const [sendData] = useSendDataMutation()

  const onSubmit = (data: FormThreeFields) => {
    console.log(data)
     dispatch(
      setUserData({
        about: data.about,
      })
    )
    console.log(userData)
    sendData(userData).then((resp: any) => console.log(resp))
    setModalType('success')
  }

  return (
    <form className={s.mainForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.areaContent}>
        <label className={s.title} htmlFor="about">
          About
        </label>
        <textarea
          {...register('about')}
          className={s.textArea}
          id="about"
          name="about"
          placeholder="Placeholder"
        />
        <p className={s.textCount}>{`${watch('about', '').length}/200`}</p>
        <p>{errors.about?.message}</p>
      </div>
      <div className={s.formButtons}>
        <Button
          onClick={() => setStep(2)}
          type="button"
          mode="prev"
          title="Назад"
        />
        <Button type="submit" mode="next" title="Далее" />
      </div>
    </form>
  )
}
