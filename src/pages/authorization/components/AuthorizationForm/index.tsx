import React, { useState, FC } from 'react'
import Styles from './style.module.scss'
import { InputPhoneForm } from '../InputPhoneForm'
import { InputSmsForm } from '../InputSmsForm'
import { FirstTimeForm } from '../FirstTimeForm'
import { useAuthorizationValidation } from '../../../../utils/validation'
import { Logo } from '@components/Logo'

export const AuthorizationForm: FC = () => {
  const { values, handleChange, errors, setValues, setErrors, isValid } = useAuthorizationValidation()
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <form className={Styles.form} noValidate>
      <div className={Styles.form__logoContainer}>
        <Logo />
      </div>
      <fieldset className={Styles.fieldset}>
        {currentPage === 1 && (
          <InputPhoneForm
            setCurrentPage={setCurrentPage}
            handleChange={handleChange}
            values={values}
            errors={errors}
            setValues={setValues}
            setErrors={setErrors}
            isValid={isValid}
          />
        )}
        {currentPage === 2 && <InputSmsForm setCurrentPage={setCurrentPage} values={values} />}
        {currentPage === 3 && <FirstTimeForm />}
      </fieldset>
    </form>
  )
}
