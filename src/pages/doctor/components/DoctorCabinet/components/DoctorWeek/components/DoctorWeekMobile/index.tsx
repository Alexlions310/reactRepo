import React, { useState } from 'react'
import Styles from './style.module.scss'

import { DoctorTodayMobile } from '../../../DoctorMonth/components/DoctorToday/DoctorTodayMobile'
import { DoctorPopupMobile } from '../../../../../DoctorModal/components/DoctorPopupMobile'
import { DoctorRecordInfo } from '../../../DoctorRecordInfo'

import caretIcon from '@icons/caret-down.svg'

import { weeks } from '../../../../../../constants'

export const DoctorWeekMobile: React.FC = () => {
  const [display, setDispaly] = useState(false)
  const [weekActive, setWeekActive] = useState('')

  const openWeek = (lineId) => {
    if (lineId === weekActive) {
      setWeekActive('')
    } else {
      setWeekActive(lineId)
    }
  }

  return (
    <div className={Styles.schedule}>
      <div className={Styles.header}>
        <span className={Styles.head}>Дата</span>
        <span className={Styles.head}>Записи</span>
      </div>
      <div className={Styles.table}>
        {weeks.map((week) => (
          <div
            key={week.id}
            className={weekActive === week.id ? `${Styles.line} ${Styles.line_active}` : `${Styles.line}`}
          >
            <div className={Styles.wrap} onClick={() => openWeek(week.id)}>
              <span className={Styles.date}>{week.date}</span>
              <span className={Styles.count}>{week.count}</span>
              <img className={Styles.caret} src={caretIcon} alt='Иконка' />
            </div>
            {weekActive === week.id && <DoctorTodayMobile openPopup={() => setDispaly(true)} />}
          </div>
        ))}
      </div>
      {display && (
        <DoctorPopupMobile closePopup={() => setDispaly(false)}>
          <DoctorRecordInfo />
        </DoctorPopupMobile>
      )}
    </div>
  )
}
