import React, { useState } from 'react'
import Styles from './style.module.scss'
import classNames from 'classnames/bind'
import { useAppDispatch } from '@app/redux/hooks'
import { getUser, changeUserInfo } from '../../pages/authorization/redux/authSlice'

interface EditProfileFormProps {
  children?: any
  formTitle?: string
}

export const EditProfileForm: React.FC<EditProfileFormProps> = ({ children, formTitle }) => {
  const dispatch = useAppDispatch()
  const [isInputDisabled, setIsInputDisabled] = useState<boolean>(true)
  type ValuesType = { string }
  const [values, setValues] = useState<ValuesType>(null)
  console.log(values)
  const handleChange = (e) => {
    const { name, value } = e.currentTarget
    setValues({ ...values, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (values === null) {
      setIsInputDisabled(true)
    } else {
      dispatch(changeUserInfo(values))
        .then(() => dispatch(getUser()))
        .then(() => {
          setIsInputDisabled(true)
          setValues(null)
        })
    }
  }
  const styles = {
    main: `${Styles.submitButton}`,
    hidden: `${Styles.submitButton_hidden}`,
  }
  const cx = classNames.bind(styles)
  return (
    <form onSubmit={handleSubmit} className={Styles.form}>
      <h3>{formTitle}</h3>
      <fieldset>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { handleChange, setIsInputDisabled, isInputDisabled }),
        )}
        <button className={`${cx('main', { hidden: isInputDisabled })}`}>Сохранить изменения</button>
      </fieldset>
    </form>
  )
}
