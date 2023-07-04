import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, useFieldArray } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../store/slices/dataSlice'
import Input from '../../components/commonComponents/input/Input'
import Button from '../../components/commonComponents/button/Button'
import s from './FormTwo.module.css'
import { Fragment } from 'react'

const schema = yup.object().shape({
  advantagesList: yup
    .array()
    .of(
      yup.object().shape({
        advantage: yup.string().max(30).required('this is a required field'),
      })
    )
    .required(),
  check1: yup.bool(),
  check2: yup.bool(),
  check3: yup.bool(),
  radioButtons: yup.string().required(),
})

interface FormTwoProps {
  setStep: (step: number) => void
}

export default function FormOne({ setStep }: FormTwoProps) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      advantagesList: [{ advantage: '' }, { advantage: '' }, { advantage: '' }],
    },
  })
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'advantagesList',
  })
  const dispatch = useDispatch()

  const onSubmit = (data: any) => {
    console.log(data)
    dispatch(
      setUserData({
        advantages: data.advantagesList,
        checkbox: [{'check1': data.check1}, {'check2': data.check2}, {'check3': data.check3}],
        radio: data.radioButtons,
      })
    )
    setStep(3)
  }
  return (
    <form className={s.mainForm} onSubmit={handleSubmit(onSubmit)}>
      <ul className={s.advantagesList}>
        <p className={s.title}>Advantages</p>
        {fields.map((item, index) => (
          <Fragment key={item.id}>
            <li className={s.advantagesItem}>
              <Input
                width="small"
                name={`advantagesList.${index}.advantage`}
                register={register}
                placeholder="Placeholder"
                type="text"
              />
              <button
                className={s.advantagesDelete}
                type="button"
                onClick={() => remove(index)}
              ></button>
            </li>
            {errors.advantagesList && <p>{errors?.advantagesList?.[index]?.advantage?.message}</p>}
          </Fragment>
        ))}
        <button
          type="button"
          className={s.advantagesAppend}
          onClick={() => append({ advantage: '' })}
        ></button>
      </ul>
      <ul className={s.checkboxList}>
        <p className={s.title}>Checkbox group</p>
        <li className={s.checkboxItem}>
          <input
            className={s.checkboxInput}
            type="checkbox"
            {...register('check1')}
            id="check1"
            name="check1"
          />
          <label className={s.title} htmlFor="check1">
            1
          </label>
        </li>
        <li className={s.checkboxItem}>
          <input
            className={s.checkboxInput}
            type="checkbox"
            {...register('check2')}
            id="check2"
            name="check2"
          />
          <label className={s.title} htmlFor="check2">
            2
          </label>
        </li>
        <li className={s.checkboxItem}>
          <input
            className={s.checkboxInput}
            type="checkbox"
            {...register('check3')}
            id="check3"
            name="check3"
          />
          <label className={s.title} htmlFor="check3">
            3
          </label>
        </li>
      </ul>
      <ul className={s.checkboxList}>
        <p className={s.title}>Radio group</p>
        <li className={s.radioItem}>
          <input
            className={s.radioInput}
            {...register('radioButtons')}
            type="radio"
            id="radio1"
            name="radioButtons"
            value="radio1"
          />
          <label className={s.title} htmlFor="radio1">
            1
          </label>
        </li>
        <li className={s.radioItem}>
          <input
            className={s.radioInput}
            {...register('radioButtons')}
            type="radio"
            id="radio2"
            name="radioButtons"
            value="radio2"
          />
          <label className={s.title} htmlFor="radio2">
            2
          </label>
        </li>
        <li className={s.radioItem}>
          <input
            className={s.radioInput}
            {...register('radioButtons')}
            type="radio"
            id="radio3"
            name="radioButtons"
            value="radio3"
          />
          <label className={s.title} htmlFor="radio3">
            3
          </label>
        </li>
        <p>{errors?.radioButtons?.message}</p>
      </ul>
      <div className={s.formButtons}>
        <Button
          onClick={() => setStep(1)}
          type="button"
          mode="prev"
          title="Назад"
        />
        <Button
          onClick={() => console.log(errors.advantagesList?.root?.message)}
          type="submit"
          mode="next"
          title="Далее"
        />
      </div>
    </form>
  )
}
