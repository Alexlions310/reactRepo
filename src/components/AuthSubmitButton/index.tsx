import React from 'react'
import Styles from './style.module.scss'

export const AuthSubmitButton = ({ buttonText, onClick }) => {
  return (
    <button type='submit' className={Styles.form__button} onClick={onClick}>
      {buttonText}
    </button>
  )
}
