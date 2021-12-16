import React, { useState } from 'react'
import Styles from './style.module.scss'

import { DoctorRecordMonthMobile } from '../DoctorRecordMonth/components/DoctorRecordMonthMobile'
import { DoctorTodayMobile } from '../DoctorToday/DoctorTodayMobile'
import { DoctorPopupMobile } from '../../../../../DoctorModal/components/DoctorPopupMobile'
import { DoctorRecordInfo } from '../../../DoctorRecordInfo'

import { getMonth } from '../../../../../../../../utils/getMonth'

export const DoctorMonthMobile: React.FC = () => {
  const [display, setDispaly] = useState(false)
  const month = getMonth()

  return (
    <div className={Styles.schedule}>
      <div className={Styles.calendar}>
        <div className={Styles.days}>
          <span className={Styles.day}>Пн</span>
          <span className={Styles.day}>Вт</span>
          <span className={Styles.day}>Ср</span>
          <span className={Styles.day}>Чт</span>
          <span className={Styles.day}>Пт</span>
          <span className={Styles.day}>Сб</span>
          <span className={Styles.day}>Вс</span>
        </div>
        <div className={Styles.content}>
          {month.map((day, index) => (
            <DoctorRecordMonthMobile key={index} day={day} />
          ))}
        </div>
      </div>
      <DoctorTodayMobile openPopup={() => setDispaly(true)} />
      {display && (
        <DoctorPopupMobile closePopup={() => setDispaly(false)}>
          <DoctorRecordInfo />
        </DoctorPopupMobile>
      )}
    </div>
  )
}
