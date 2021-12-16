import { AuthSubmitButton } from '@components/AuthSubmitButton'
import React, { useState, FC } from 'react'
import Styles from './style.module.scss'
import PhoneInput from 'react-phone-number-input/input'
import { isPossiblePhoneNumber } from 'react-phone-number-input'
import { registerUserNumber } from '../../redux/authSlice'
import { useAppDispatch } from '@app/redux/hooks'
import { SUCCESS } from '@app/HTTP_CODES'

interface InputPhoneFormProps {
  setCurrentPage: (number) => void
  handleChange: any
  values: any
  errors: any
  setValues: (number) => void
  setErrors: any
  isValid: boolean
}

export const InputPhoneForm: FC<InputPhoneFormProps> = ({
  setCurrentPage,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleChange,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  values,
  errors,
  setValues,
  setErrors,
  isValid,
}) => {
  const dispatch = useAppDispatch()
  const [value, setValue] = useState('')

  const handlePhoneSubmit = (e) => {
    e.preventDefault()
    dispatch(registerUserNumber({ phone: value })).then((res) => {
      if (res.payload.status === SUCCESS) {
        setValues({ phone: value })
        setCurrentPage(2)
      } else {
        console.log(res.payload)
        setErrors({ phone: 'Неверный номер телефона' })
      }
    })
  }

  // TODO доделать/посмотреть, что приходит в value
  const handlePhoneInputChange = (value) => {
    setValue(value)
    setErrors({ phone: '' })
  }
  return (
    <>
      <h3 className={Styles.form__title}>Вход или регистрация</h3>
      <label className={Styles.form__label}>Телефон*</label>
      <PhoneInput
        className={Styles.form__input}
        placeholder='+7'
        type='tel'
        value={value}
        onChange={handlePhoneInputChange}
        minLength={2}
        maxLength={17}
        name='phone'
        defaultCountry='RU'
        withCountryCallingCode
      />
      {!errors.phone ? (
        <p className={Styles.form__paragraph}>Нужен для входа по коду. Это бесплатно</p>
      ) : (
        <p className={Styles.form__error}>{errors.phone}</p>
      )}
      <AuthSubmitButton onClick={handlePhoneSubmit} buttonText='Получить код в смс' />
    </>
  )
}
