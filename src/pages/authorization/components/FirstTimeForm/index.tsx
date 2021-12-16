import { AuthSubmitButton } from '@components/AuthSubmitButton'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Styles from './style.module.scss'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { getUser, changeUserInfo } from '../../../../pages/authorization/redux/authSlice'

export const FirstTimeForm = () => {
  const history = useHistory()
  const dispatch = useAppDispatch()
  const isNewUser = useAppSelector((state) => state.auth.user.isNewUser)
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
    console.log(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(changeUserInfo({ first_name: value }))
      .then(() => dispatch(getUser()))
      .then(() => history.push('/onboarding'))
  }
  return (
    <>
      {isNewUser ? (
        <>
          <h3 className={Styles.form__title}>Вы впервые здесь! ☺️</h3>
          <p className={Styles.form__info}>Как мы можем обращаться к вам?</p>
          <label className={Styles.form__label}>Имя*</label>
          <input
            className={Styles.form__input}
            type='text'
            placeholder='Введите ваше имя'
            onChange={handleChange}
            value={value}
            required
            minLength={2}
          />
          <AuthSubmitButton buttonText='Завершить регистрацию' onClick={handleSubmit} />
        </>
      ) : (
        history.push('/')
      )}
    </>
  )
}
