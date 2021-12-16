import React from 'react'
import Styles from './style.module.scss'

export const DayTitle = (props) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.day}>{props.value}</div>
    </div>
  )
}
