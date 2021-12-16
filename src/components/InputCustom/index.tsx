import React, { useEffect, useState } from 'react'
import Styles from './style.module.scss'
import classNames from 'classnames/bind'
import { useAppDispatch } from '@app/redux/hooks'
import { setIsValidInput } from '../../pages/authorization/redux/authSlice'

interface InputProps {
  isInputDisabled?: boolean
  handleChange?: (e: any) => void
  setIsInputDisabled?: (boolean) => void
  isDisabled?: boolean
  labelName?: string
  inputType?: string
  inputName?: string
  placeholder?: string
  width?: string
  inputValue?: any
  onClick?: any
  labelChildren?: any
  Inputchildren?: any
  // validation?: (e: any) => void
  // resetForm?: (e: any) => void
  onChange?: (e: any) => void
  // isActiveError?: (boolean) => void
  // isValid?: boolean
}

export const InputCustom: React.FC<InputProps> = ({
  isInputDisabled,
  handleChange,
  setIsInputDisabled,
  isDisabled,
  labelName,
  inputType,
  inputName,
  placeholder,
  width,
  inputValue,
  onClick,
  labelChildren,
  Inputchildren,
  // validation,
  // resetForm,
  onChange,
  // isActiveError,
  // isValid,
}) => {
  const [isActiveError, setIsActiveError] = useState(null)
  const [isValid, setIsValid] = useState(false)
  const [value, setValue] = useState(null)
  const [errorText, setErrorText] = useState('')
  const [name, setName] = useState(inputName)
  // const [isInputDisabled, setIsInputDisabled] = useState<boolean>(isDisabled)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (inputValue === null) {
      setValue(null)
    }
    setValue(inputValue)
  }, [inputValue])
  const validation = (e) => {
    if (e.target.name === 'email') {
      if (e.target.value.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/)) {
        setIsActiveError(false)
        setIsValid(true)
        dispatch(setIsValidInput({ key: 'email', value: true }))
      } else {
        setIsActiveError(true)
        setErrorText('Неверный email')
        dispatch(setIsValidInput({ key: 'email', value: false }))
      }
    }
    if (e.target.name === 'first_name') {
      if (e.target.value !== '') {
        setIsActiveError(false)
        setIsValid(true)
        dispatch(setIsValidInput({ key: 'first_name', value: true }))
      } else {
        setIsActiveError(true)
        setErrorText('Введите имя')
        dispatch(setIsValidInput({ key: 'first_name', value: false }))
      }
    }
    if (e.target.name === 'phone') {
      if (e.target.value !== '') {
        setIsActiveError(false)
        setIsValid(true)
        dispatch(setIsValidInput({ key: 'phone', value: true }))
      } else {
        setIsActiveError(true)
        setErrorText('Введите телефон')
        dispatch(setIsValidInput({ key: 'phone', value: false }))
      }
    }
  }
  const resetForm = () => {
    setIsActiveError(false)
    setIsValid(false)
  }
  const inputStyle = classNames(Styles.input, {
    [`${Styles.input_error}`]: isActiveError,
    [`${Styles.input_success}`]: isValid,
    [`${Styles.input__calendar}`]: name === 'birthday',
    [`${Styles.input_disabled}`]: isInputDisabled,
  })
  return (
    <>
      <div className={Styles.label_container}>
        <label className={Styles.label}>{labelName}</label>
        {labelChildren}
      </div>
      <div>
        <div className={Styles.input_container}>
          <input
            disabled={isInputDisabled}
            style={{ width }}
            name={name}
            value={value}
            className={inputStyle}
            placeholder={placeholder}
            type={inputType}
            onChange={onChange}
            onBlur={(e) => validation(e)}
            onFocus={resetForm}
            autoComplete='off'
            onClick={onClick}
          />
          {isInputDisabled && (
            <div
              className={Styles.button}
              onClick={() => {
                setIsInputDisabled(false)
              }}
            />
          )}
        </div>
        {Inputchildren}
      </div>
      {isActiveError && <span className={Styles.error__handler}>{errorText}</span>}
    </>
  )
}
