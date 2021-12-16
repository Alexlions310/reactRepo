import React, { useState } from 'react'
import { useAppSelector } from '@app/redux/hooks'
import Styles from './style.module.scss'

import { DoctorRecordMonth } from './components/DoctorRecordMonth'
import { DoctorToday } from './components/DoctorToday'
import { DoctorRecord } from '../DoctorDay/components/DoctorRecord'

import { getMonth } from '../../../../../../utils/getMonth'

export const DoctorMonth: React.FC = () => {
  const listAppointments = useAppSelector((state) => state.doctor.listAppointments)
  const [appointmentsMonth, setAppointmentsMonth] = useState([])

  const month = getMonth()

  return (
    <div className={Styles.schedule}>
      <div className={Styles.wrapper}>
        <div className={Styles.content}>
          <div className={Styles.daytime}>
            <span className={Styles.day}>Пн</span>
            <span className={Styles.day}>Вт</span>
            <span className={Styles.day}>Ср</span>
            <span className={Styles.day}>Чт</span>
            <span className={Styles.day}>Пт</span>
            <span className={Styles.day}>Сб</span>
            <span className={Styles.day}>Вс</span>
          </div>
          <div className={Styles.cells}>
            {month.map((day, index) => (
              <DoctorRecordMonth key={index} day={day} />
            ))}
          </div>
        </div>
        <div className={Styles.signs}>
          <div className={Styles.sign}>
            <i className={Styles.icon}>{}</i>
            <span className={Styles.denotation}>— онлайн прием</span>
          </div>
          <div className={Styles.sign}>
            <i className={`${Styles.icon} ${Styles.icon_mod}`}>{}</i>
            <span className={Styles.denotation}>— личный прием</span>
          </div>
        </div>
      </div>
      <div className={Styles.info}>
        <DoctorToday />
        {/* <DoctorRecord {...data1[0]} className={Styles.record_month} /> */}
      </div>
    </div>
  )
}
