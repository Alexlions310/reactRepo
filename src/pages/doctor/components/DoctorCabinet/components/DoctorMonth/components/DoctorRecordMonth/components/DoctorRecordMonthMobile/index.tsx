import React from 'react'

import Styles from './style.module.scss'

interface DoctorRecordMonthMobileProps {
  day: string
}

export const DoctorRecordMonthMobile: React.FC<DoctorRecordMonthMobileProps> = ({ day }) => {
  const classNameRecord = day === '14' ? `${Styles.record} ${Styles.record_active}` : `${Styles.record}`

  return (
    <div className={classNameRecord}>
      <div className={Styles.wrap}>
        <span className={Styles.day}>{day}</span>
        <i className={Styles.icon}>{}</i>
      </div>
    </div>
  )
}
