import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import Styles from './style.module.scss'

import { DoctorVisit } from './components/DoctorVisit'
import { DoctorHistoryMobile } from './components/DoctorHistoryMobile'

import questionIcon from '@icons/question.svg'

export const DoctorHistory: React.FC = () => {
  const listAppointments = useAppSelector((state) => state.doctor.listAppointments)
  const [sortedAppointmentsDone, setSortedAppointmentsDone] = useState([])

  useEffect(() => {
    const doneArray = listAppointments.filter((appointments) => appointments.status === 'done')

    const doneSortedArray = doneArray.sort((a, b) => {
      const dateA = new Date(a.day_reception).getDate()
      const dateB = new Date(b.day_reception).getDate()

      return dateA > dateB ? 1 : -1
    })

    setSortedAppointmentsDone(doneSortedArray)
  }, [])

  return (
    <>
      <div className={Styles.table}>
        <div className={Styles.header}>
          <div className={Styles.wrap}>
            <span className={Styles.head}>Консультация</span>
          </div>
          <div className={Styles.wrap}>
            <span className={Styles.head}>Пациент</span>
          </div>
          <div className={Styles.wrap}>
            <span className={Styles.head}>Дата</span>
          </div>
          <div className={Styles.wrap}>
            <span className={`${Styles.head} ${Styles.head_mod}`}>Мед. заключение</span>
            <img src={questionIcon} alt='Иконка' />
          </div>
        </div>
        <ul className={Styles.content}>
          {sortedAppointmentsDone.map((appointment) => {
            // console.log('appointment', appointment)

            return (
              <DoctorVisit
                key={appointment.id}
                appointmentId={appointment.id}
                consultationType={appointment.consultation_type}
                dayReception={appointment.day_reception}
                isOnline={appointment.is_online}
                medicalReport={appointment.medical_report}
                patient={appointment.patient}
                timeReception={appointment.time_reception}
              />
            )
          })}
        </ul>
      </div>
      <div className={`${Styles.table} ${Styles.table_mobile}`}>
        <DoctorHistoryMobile />
      </div>
    </>
  )
}
