import React from 'react'
import Styles from './style.module.scss'

import avatarImage from '@images/avatar.png'

export const DoctorVisitMobile: React.FC = () => {
  return (
    <div className={Styles.visit}>
      <div className={Styles.wrapper}>
        <div className={Styles.wrap}>
          <img className={Styles.avatar} src={avatarImage} alt='Аватар' />
          <div className={Styles.name}>
            <span className={Styles.secondname}>Курпатов</span>
            <span className={Styles.firstname}>Константин В.</span>
          </div>
        </div>
        <span className={Styles.link}>{}</span>
      </div>
      <div className={Styles.block}>
        <span className={Styles.label}>Консультация</span>
        <span className={Styles.text}>Нутрицевтическая подготовка к беременности</span>
      </div>
      <div className={Styles.block}>
        <span className={Styles.label}>Дата и время</span>
        <span className={Styles.text}>Вчера, 14 февраля</span>
      </div>
      <div className={Styles.conclusion}>
        <i className={Styles.icon}>{}</i>
        <span className={Styles.warning}>Требуется заключение</span>
      </div>
      <span className={Styles.notification}>Остался 1 день</span>
    </div>
  )
}
