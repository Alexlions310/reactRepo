import React from 'react'
import Styles from './style.module.scss'
import arrow from '@icons/arrow-right-blue.svg'

export const ButtonTransparent = (props) => {
  return (
    <div className={Styles.container}>
      {props.before && <img className={`${Styles.arrow_before} ${props.styleImg}`} src={arrow} alt='arrow' />}
      <button className={`${Styles.button} ${props.styleButton}`} onClick={props.onClick} type={props.type}>
        {props.value}
      </button>
      {props.after && <img className={props.styleImg} src={arrow} alt='arrow' />}
    </div>
  )
}
