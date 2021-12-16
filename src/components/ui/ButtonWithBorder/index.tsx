import React from 'react'
import Styles from './style.module.scss'

export const ButtonWithBorder = (props) => {
  return (
    <button onClick={props.onClick} className={`${Styles.button} ${props.className}`} type={props.type}>
      {props.before && <img src={props.src} alt='icon' />}
      {props.value}
    </button>
  )
}
