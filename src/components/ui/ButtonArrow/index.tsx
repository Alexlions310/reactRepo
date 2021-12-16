import React from 'react'
import Styles from './style.module.scss'
import arrow from '@icons/arrow.svg'

export const ButtonArrow = (props) => {
  return (
    <button className={`${Styles.button} ${props.className}`} onClick={props.onClick}>
      <img src={arrow} alt='arrow' />
    </button>
  )
}
