import React from 'react'
import Styles from './style.module.scss'
import classNames from 'classnames/bind'

export const Time = (props) => {
  const time = classNames(Styles.time, {
    [`${Styles.time_active}`]: props.isActive,
  })

  return (
    <button onClick={props.onClick} className={time} disabled={props.disabled} id={props.id}>
      {props.value}
    </button>
  )
}
