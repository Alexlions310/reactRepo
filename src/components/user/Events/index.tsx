import React from 'react'
import Styles from './style.module.scss'
import event1 from '@icons/event1.svg'

export const Events = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.tag}>Сегодня</div>
      <div className={Styles.events_empty}>
        <img src={event1} className={Styles.img} alt='logo' />
        <div className={Styles.desc}>
          <h5 className={Styles.title}>Что такое события?</h5>
          <p className={Styles.text}>
            Здесь мы будем показывать уведомления о ваших медзаключениях, напоминать о приемах и показывать обновления
            сервиса
          </p>
        </div>
      </div>
    </div>
  )
}
