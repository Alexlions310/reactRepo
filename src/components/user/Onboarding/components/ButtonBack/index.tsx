import React from 'react'
import Styles from './style.module.scss'
import arrow from '@icons/arrow-left.svg'

export const ButtonBack = (props) => {
  return (
    <button className={`prev ${Styles.button}`}>
      <img className={Styles.arrow} src={arrow} alt='arrow' />
      {props.value}
    </button>
  )
}
