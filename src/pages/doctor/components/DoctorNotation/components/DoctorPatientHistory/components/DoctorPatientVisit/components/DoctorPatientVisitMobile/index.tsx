import React from 'react'
import Styles from './style.module.scss'

export const DoctorPatientVisitMobile: React.FC = () => {
  return (
    <div className={Styles.visit}>
      <div className={Styles.block}>
        <span className={Styles.label}>Консультация</span>
        <span className={Styles.text}>Нутрицевтическая подготовка к беременности</span>
        <span className={Styles.link}>{}</span>
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
