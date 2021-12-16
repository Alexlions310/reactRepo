import React from 'react'
import Styles from './style.module.scss'

export const Price = (props) => {
  return (
    <span className={`${Styles.price} ${props.className}`}>
      {props.value}
      <span className={Styles.span}> ₽</span>
    </span>
  )
}
