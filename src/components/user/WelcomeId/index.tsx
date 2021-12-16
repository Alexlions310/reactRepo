import React from 'react'
import Styles from './style.module.scss'

export const WelcomeId = (props) => {
  const now = new Date()
  let currentDate
  const month = now.getMonth()
  const date = now.getDate()
  currentDate = date
  if (month === 0) {
    currentDate += ' января,'
  }
  if (month === 1) {
    currentDate += ' февраля,'
  }
  if (month === 2) {
    currentDate += ' марта,'
  }
  if (month === 3) {
    currentDate += ' апреля,'
  }
  if (month === 4) {
    currentDate += ' мая,'
  }
  if (month === 5) {
    currentDate += ' июня,'
  }
  if (month === 6) {
    currentDate += ' июля,'
  }
  if (month === 7) {
    currentDate += ' августа,'
  }
  if (month === 8) {
    currentDate += ' сентября,'
  }
  if (month === 9) {
    currentDate += ' октября,'
  }
  if (month === 10) {
    currentDate += ' ноября,'
  }
  if (month === 11) {
    currentDate += ' декабря,'
  }
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Привет, {props.name} 👋</h2>
      <p className={Styles.text}>
        Сегодня {currentDate} {props.fullness ? null : ' наши планы на эту неделю'}
      </p>
    </div>
  )
}
