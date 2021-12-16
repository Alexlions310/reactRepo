import React from 'react'
import Styles from './style.module.scss'

export const ButtonColor = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${Styles.button} ${props.className}`}
      type={props.type}
      disabled={props.disabled}
    >
      {props.value}
    </button>
  )
}
