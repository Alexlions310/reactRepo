import React from 'react'
import Styles from './style.module.scss'

interface CancelDaysProps {
  halfYears: any
}

export const CancelDays: React.FC<CancelDaysProps> = ({ halfYears }) => {
  return (
    <div className={Styles.months}>
      {halfYears.map((month) => (
        <div className={Styles.month} key={month.name}>
          <span className={Styles.may}>{`${month.name} ${month.year}`}</span>
          <div className={Styles.days}>
            {month.days.map((day, index) => (
              <div className={Styles.day} key={index}>
                <span className={Styles.inner}>{day}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
