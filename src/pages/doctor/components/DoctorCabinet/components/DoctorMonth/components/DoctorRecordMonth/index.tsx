import React from 'react'
import Styles from './style.module.scss'

interface DoctorRecordMonthProps {
  day: any
}

export const DoctorRecordMonth: React.FC<DoctorRecordMonthProps> = ({ day }) => {
  return (
    <div className={Styles.cell}>
      <span className={Styles.number}>{day}</span>
      <div className={Styles.rec}>
        <i className={Styles.round}>{}</i>
        <i className={Styles.round}>{}</i>
      </div>
    </div>
  )
}
