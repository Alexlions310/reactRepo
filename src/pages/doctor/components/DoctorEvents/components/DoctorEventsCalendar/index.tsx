import React from 'react'
import Styles from './style.module.scss'

import calendarIcon from '@icons/calendar-event.svg'
import avatarImage from '@images/avatar.png'

export const DoctorEventsCalendar: React.FC = () => {
  return (
    <div className={Styles.event}>
      <div className={Styles.content}>
        <div className={Styles.header}>
          <i className={Styles.icon}>
            <img src={calendarIcon} alt='Иконка' />
          </i>
          <span className={Styles.title}>10 минут до консультации</span>
        </div>
        <div className={Styles.body}>
          <div className={Styles.wrapper}>
            <div className={Styles.block}>
              <div className={Styles.description}>
                <span className={Styles.time}>11:00</span>
                <span className={Styles.method}>Онлайн прием</span>
              </div>
              <a className={Styles.link} href='/'>
                {}
              </a>
            </div>
            <div className={Styles.patient}>
              <div className={Styles.info}>
                <img className={Styles.avatar} src={avatarImage} alt='Аватар' />
                <span className={Styles.name}>Ракова Ольга В.</span>
              </div>
              <span className={Styles.appointment}>«Нутрицевтическая подготовка к беременности»</span>
            </div>
            <button className={Styles.start}>Начать прием</button>
          </div>
        </div>
      </div>
    </div>
  )
}
