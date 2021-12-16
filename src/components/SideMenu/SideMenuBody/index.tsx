import React from 'react'
import Styles from './style.module.scss'

import { DoctorChat } from '../../../pages/doctor/components/DoctorChat'
import { DoctorEvents } from '../../../pages/doctor/components/DoctorEvents'

export const SideMenuBody = ({ activeContent }) => {
  return (
    <div className={Styles.content}>
      {(activeContent === 'message' && <DoctorChat />) ||
        (activeContent === 'bell' && (
          <div className={Styles.events_container}>
            <DoctorEvents />
          </div>
        ))}
    </div>
  )
}
