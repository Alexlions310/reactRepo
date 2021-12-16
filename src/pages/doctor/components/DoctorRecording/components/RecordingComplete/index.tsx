import React from 'react'
import { useAppSelector } from '@app/redux/hooks'
import Styles from './style.module.scss'

export const RecordingComplete: React.FC = () => {
  const currentPatient = useAppSelector((state) => state.doctor.currentPatient)
  const dateAppointment = useAppSelector((state) => state.doctor.dateAppointment)

  return (
    <div className={Styles.complete}>
      <span className={Styles.caption}>Пациент записан на прием</span>
      <span className={Styles.text}>
        {currentPatient.last_name} {currentPatient.first_name.substring(0, 1)}.{' '}
        {currentPatient.middle_name?.substring(0, 1)} записан(а) на прием
      </span>
      <span className={Styles.text}>{dateAppointment}</span>
      <button className={Styles.button}>Перейти к записи</button>
    </div>
  )
}
