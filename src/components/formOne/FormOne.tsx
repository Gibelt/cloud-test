import { useForm } from 'react-hook-form'
import Input from '../../components/commonComponents/input/Input'
import Button from '../../components/commonComponents/button/Button'
import s from './FormOne.module.css'

export default function FormOne() {
  const { handleSubmit, register } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
      <form className={s.mainForm} onSubmit={handleSubmit(onSubmit)}>
        <Input
          width="small"
          register={register}
          label="Nickname"
          htmlFor="nickname"
          placeholder="Placeholder"
          id="nickname"
          name="nickname"
          type="text"
        />
        <Input
          width="small"
          register={register}
          label="Name"
          htmlFor="name"
          placeholder="Placeholder"
          id="name"
          name="name"
          type="text"
        />
        <Input
          width="small"
          register={register}
          label="Surname"
          htmlFor="surname"
          placeholder="Placeholder"
          id="surname"
          name="surname"
          type="text"
        />
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
        </label>
        <div className={s.buttons}>
          <Button type="button" mode="prev" title="Назад" />
          <Button type="submit" mode="next" title="Далее" />
        </div>
      </form>
  )
}
