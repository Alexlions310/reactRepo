import React from 'react'
import Styles from './style.module.scss'

export const DoctorToday: React.FC = () => {
  return (
    <div className={Styles.today}>
      <span className={Styles.date}>14 января</span>
      <div className={Styles.block}>
        <div className={Styles.record}>
          <i className={Styles.icon}>{}</i>
          <span className={Styles.time}>08:00</span>
        </div>
        <div className={Styles.record}>
          <i className={Styles.icon}>{}</i>
          <span className={Styles.time}>08:00</span>
        </div>
        <div className={Styles.record}>
          <i className={Styles.icon}>{}</i>
          <span className={Styles.time}>08:00</span>
        </div>
        <div className={Styles.record}>
          <i className={Styles.icon}>{}</i>
          <span className={Styles.time}>08:00</span>
        </div>
        <div className={Styles.record}>
          <i className={Styles.icon}>{}</i>
          <span className={Styles.time}>08:00</span>
        </div>
        <div className={Styles.record}>
          <i className={Styles.icon}>{}</i>
          <span className={Styles.time}>08:00</span>
        </div>
        <div className={Styles.record}>
          <i className={Styles.icon}>{}</i>
          <span className={Styles.time}>08:00</span>
        </div>
      </div>
    </div>
  )
}
