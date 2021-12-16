import React from 'react'
import Styles from './style.module.scss'
import classNames from 'classnames/bind'

export const Day = (props) => {
  const containerStyle = classNames(Styles.container, {
    [`${Styles.container_active}`]: props.className,
  })
  const dayStyle = classNames(Styles.day, {
    [`${Styles.day_active}`]: props.isToday,
    [`${Styles.day_availeble}`]: props.isAvailable,
    [`${Styles.dayNoCurrentMonth}`]: !props.isCurrentMonth,
  })
  const dotStyle = classNames({
    [`${Styles.dot}`]: props.isAvailable,
  })
  return (
    <button disabled={!props.isAvailable} onClick={props.onClick} className={containerStyle}>
      <div className={dayStyle}>{props.value}</div>
      <div className={dotStyle} />
    </button>
  )
}
