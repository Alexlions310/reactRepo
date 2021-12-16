import React from 'react'
import Styles from './style.module.scss'

interface DoctorTodayMobileProps {
  openPopup?: any
}

export const DoctorTodayMobile: React.FC<DoctorTodayMobileProps> = ({ openPopup }) => {
  return (
    <div className={Styles.today}>
      <span className={Styles.date}>14 января</span>
      <div className={Styles.schedule}>
        <div className={Styles.record} onClick={openPopup}>
          <i className={Styles.icon}>{}</i>
          <span className={Styles.time}>15:30</span>
        </div>
        <div className={Styles.record}>
          <i className={Styles.icon}>{}</i>
          <span className={Styles.time}>15:30</span>
        </div>
        <div className={Styles.record}>
          <i className={Styles.icon}>{}</i>
          <span className={Styles.time}>15:30</span>
        </div>
        <div className={Styles.record}>
          <i className={Styles.icon}>{}</i>
          <span className={Styles.time}>15:30</span>
        </div>
        <div className={Styles.record}>
          <i className={Styles.icon}>{}</i>
          <span className={Styles.time}>15:30</span>
        </div>
        <div className={Styles.record}>
          <i className={Styles.icon}>{}</i>
          <span className={Styles.time}>15:30</span>
        </div>
        <div className={Styles.record}>
          <i className={Styles.icon}>{}</i>
          <span className={Styles.time}>15:30</span>
        </div>
      </div>
    </div>
  )
}
