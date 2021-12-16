import React from 'react'
import Styles from './style.module.scss'

import { DoctorEventsCalendar } from './components/DoctorEventsCalendar'
import { DoctorEventsBell } from './components/DoctorEventsBell'
import { DoctorEventsDocument } from './components/DoctorEventsDocument'

export const DoctorEvents: React.FC = () => {
  return (
    <div className={Styles.events}>
      <div className={Styles.date}>
        <span className={Styles.caption}>Сегодня</span>
        <DoctorEventsCalendar />
        <DoctorEventsBell />
      </div>
      <div className={Styles.date}>
        <span className={Styles.caption}>Вчера</span>
        <DoctorEventsDocument />
        <DoctorEventsCalendar />
      </div>
    </div>
  )
}
