import React, { useState, useEffect, FC } from 'react'
import Styles from './style.module.scss'
import OtpInput from 'react-otp-input'
import { tokenObtaining } from '../../redux/authSlice'
import { useAppDispatch } from '@app/redux/hooks'
import { SUCCESS } from '@app/HTTP_CODES'

interface InputSmsFormProps {
  setCurrentPage: (number) => void
  values: any
}

export const InputSmsForm: FC<InputSmsFormProps> = ({ setCurrentPage, values }) => {
  const [otpValue, setOtpValue] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userNumber, setUserNumber] = useState(values.phone)
  const [isTimeIsUp, setIsTimeIsUp] = useState(false)
  const [isError, setIsError] = useState(false)

  const [seconds, setSeconds] = React.useState(10)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const tick = () => setSeconds(seconds - 1)
    if (seconds > 0) {
      setTimeout(tick, 1000)
    } else {
      setIsTimeIsUp(true)
    }
  }, [seconds])

  const secondsConverter = (seconds) => {
    // eslint-disable-next-line no-unused-expressions
    return seconds >= 10 ? `00:${seconds}` : `00:0${seconds}`
  }

  const handleOtpChange = (otp) => {
    setIsError(false)
    setOtpValue(otp)
    if (otp.length === 4) {
      dispatch(tokenObtaining({ phone: userNumber, code: otp })).then((res) => {
        if (res.payload.status === SUCCESS) {
          setCurrentPage(3)
        } else {
          console.log(res.payload.statusText)
          setIsError(true)
        }
      })
    }
  }

  return (
    <>
      <h3 className={Styles.form__title}>Введите код из смс</h3>
      <p className={Styles.form__info}>
        Мы отправили код подтверждения на номер <br /> <span className={Styles.form__phone}>{userNumber}</span>
        <button className={Styles.form__blueButton} onClick={() => setCurrentPage((prev) => prev - 1)}>
          Изменить
        </button>
      </p>
      <OtpInput
        value={otpValue}
        onChange={handleOtpChange}
        numInputs={4}
        containerStyle={Styles.otp__container}
        inputStyle={Styles.otp__input}
        isInputNum
        placeholder='    '
      />
      {isError && <p className={Styles.form__error}>Неверный код подтверждения</p>}
      {isTimeIsUp && (
        <button
          className={Styles.form__blueButton}
          onClick={(e) => {
            e.preventDefault()
            setSeconds(60)
            setIsTimeIsUp(false)
          }}
        >
          Получить новый код
        </button>
      )}
      {!isTimeIsUp && (
        <p className={Styles.form__paragraph}>Получить новый код можно через {secondsConverter(seconds)}</p>
      )}
    </>
  )
}
