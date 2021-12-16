import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import {
  startAppointment,
  setCurrentPatient,
  setCurrentAppointmentsPatient,
} from '../../../../../../redux/doctorSlicer'
import Styles from './style.module.scss'

import timeIcon from '@icons/time.svg'
import avatarPatient from '@images/avatar.png'
import viewIcon from '@icons/view.svg'
import {
  setReportsModalOpen,
  setAppointmentId,
  getMedicalReportId,
} from '@components/MedicalReportsModal/redux/reportsSlice'

interface DoctorRecordProps {
  appointmentId?: number
  description: string
  consultationType?: string
  complete?: boolean
  patient?: any
  timeReception?: string
  isOnline?: boolean
  medicalReport?: number
  status?: string
  meetingLink?: string
  className?: string
}

export const DoctorRecord: React.FC<DoctorRecordProps> = (props) => {
  const dispatch = useAppDispatch()
  const history = useHistory()

  const {
    appointmentId,
    description,
    consultationType,
    complete,
    patient,
    timeReception,
    isOnline,
    medicalReport,
    status,
    meetingLink,
    className,
  } = props

  const notification = 'da'

  const [user, setUser] = useState(null)
  const [consultation, setConsultation] = useState(null)
  const listConsultationType = useAppSelector((state) => state.doctor.listConsultationType)
  const listAppointments = useAppSelector((state) => state.doctor.listAppointments)

  let classNameRecord = status === 'planned' ? `${Styles.record}` : `${Styles.record} ${Styles.record_complete}`
  let classNameHeader = isOnline ? `${Styles.header}` : `${Styles.header} ${Styles.header_mod}`

  if (className) {
    classNameRecord = `${classNameRecord} ${className}`
  }

  if (complete) {
    classNameHeader = `${classNameHeader} ${Styles.header_complete}`
  }

  const onClickPatient = () => {
    dispatch(setCurrentPatient(user))
    // listAppointments.forEach((record) => console.log(record))
    history.push('/card')
  }

  const onStartAppointment = () => dispatch(startAppointment(appointmentId))

  useEffect(() => {
    setUser(patient)

    listConsultationType.forEach((consultation) => {
      if (consultation.id === consultationType) {
        setConsultation(consultation.title)
      }
    })
  }, [])

  return (
    <div className={classNameRecord}>
      <div className={classNameHeader}>
        {notification && (
          <div className={Styles.notification}>
            <img src={timeIcon} alt='Иконка' />
            <span className={Styles.across}>Через 10 минут</span>
          </div>
        )}
        <div className={Styles.container}>
          <span className={Styles.time}>{timeReception}</span>
          <span className={Styles.online}>{isOnline ? 'Онлайн прием' : 'Личный прием'}</span>
        </div>
        {isOnline && (
          <button className={Styles.start} onClick={onStartAppointment}>
            Начать прием
          </button>
        )}
        {!complete && medicalReport && (
          <button
            onClick={() => {
              dispatch(setReportsModalOpen(true))
              dispatch(setAppointmentId(appointmentId))
              dispatch(getMedicalReportId(appointmentId))
            }}
            className={`${Styles.start} ${Styles.start_create}`}
          >
            Создать заключение
          </button>
        )}
        {complete && medicalReport && (
          <div className={Styles.conclusion}>
            <img src={viewIcon} alt='Иконка' />
            <span className={Styles.text}>Заключение</span>
          </div>
        )}
      </div>
      <div className={Styles.patient}>
        {patient.avatar ? (
          <img className={Styles.avatar} src={avatarPatient} alt='Аватар' />
        ) : (
          <div className={Styles.cap}>
            <span>
              {patient.last_name?.substring(0, 1)}
              {patient.first_name?.substring(0, 1)}
            </span>
          </div>
        )}
        <div className={Styles.info}>
          <span className={Styles.lastname} onClick={onClickPatient}>
            {patient.last_name}
          </span>
          <span className={Styles.firstname}>{patient.first_name}</span>
        </div>
      </div>
      <div className={Styles.block}>
        <span className={Styles.title}>Консультация</span>
        <p className={Styles.description}>{description}</p>
      </div>
      <div className={Styles.block}>
        <span className={Styles.title}>Тип консультации</span>
        <div className={Styles.wrap}>
          <p className={Styles.description}>{consultation}</p>
          <button className={Styles.link}>{}</button>
        </div>
      </div>
    </div>
  )
}
