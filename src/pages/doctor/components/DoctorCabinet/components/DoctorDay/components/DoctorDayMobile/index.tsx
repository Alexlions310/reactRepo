import React, { useState } from 'react'
import Styles from './style.module.scss'

import { DoctorTodayMobile } from '../../../DoctorMonth/components/DoctorToday/DoctorTodayMobile'
import { DoctorPopupMobile } from '../../../../../DoctorModal/components/DoctorPopupMobile'
import { DoctorRecordInfo } from '../../../DoctorRecordInfo'

export const DoctorDayMobile: React.FC = () => {
  const [display, setDispaly] = useState(false)

  return (
    <div className={Styles.schedule}>
      <DoctorTodayMobile openPopup={() => setDispaly(true)} />
      {display && (
        <DoctorPopupMobile closePopup={() => setDispaly(false)}>
          <DoctorRecordInfo />
        </DoctorPopupMobile>
      )}
    </div>
  )
}
