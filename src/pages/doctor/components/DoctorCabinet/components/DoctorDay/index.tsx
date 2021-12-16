import React, { useEffect, useState } from 'react'
import { useAppSelector } from '@app/redux/hooks'
import Styles from './style.module.scss'

import { DoctorRecord } from './components/DoctorRecord'
import { MedicalReportsModal } from '@components/MedicalReportsModal'

export const DoctorDay: React.FC = () => {
  const listAppointments = useAppSelector((state) => state.doctor.listAppointments)
  const [appointmentsDay, setAppointmentsDay] = useState([])

  useEffect(() => {
    const array = listAppointments.filter(
      (appointments) => new Date(appointments.day_reception).getDate() === new Date().getDate(),
    )

    const activeArray = array.filter((appointments) => appointments.status !== 'done')

    const doneArray = array.filter((appointments) => appointments.status === 'done')

    const activeSortedArray = activeArray.sort((a, b) => a.time_reception.localeCompare(b.time_reception))

    const doneSortedArray = doneArray.sort((a, b) => a.time_reception.localeCompare(b.time_reception))

    setAppointmentsDay([...activeSortedArray, ...doneSortedArray])
  }, [])

  return (
    <div className={Styles.schedule}>
      <div className={Styles.wrapper}>
        {appointmentsDay.length !== 0 &&
          appointmentsDay.map((record) => {
            // console.log('record', record)

            return (
              <DoctorRecord
                description=''
                key={record.id}
                appointmentId={record.id}
                consultationType={record.consultation_type}
                isOnline={record.is_online}
                medicalReport={record.medical_report}
                meetingLink={record.meeting_link}
                patient={record.patient}
                status={record.status}
                timeReception={record.time_reception}
              />
            )
          })}
        {appointmentsDay.length === 0 && <span>На сегодня нет записей</span>}
      </div>
      <MedicalReportsModal />
    </div>
  )
}
