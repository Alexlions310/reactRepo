import React from 'react'
import Styles from './style.module.scss'

import avatarPatient from '@images/avatar.png'
import createIcon from '@icons/create.svg'
import viewIcon from '@icons/view.svg'

import { formateDate, formateDateDay } from '../../../../../../utils/formateDate'
import {
  getMedicalReportId,
  setAppointmentId,
  setReportsModalOpen,
} from '@components/MedicalReportsModal/redux/reportsSlice'
import { useAppDispatch } from '@app/redux/hooks'

interface DoctorVisitProps {
  consultationType: any
  dayReception: string
  isOnline: boolean
  medicalReport: any
  patient: any
  timeReception: string
  appointmentId: number
}

export const DoctorVisit: React.FC<DoctorVisitProps> = (props) => {
  const { consultationType, dayReception, isOnline, medicalReport, patient, timeReception, appointmentId } = props
  const dispatch = useAppDispatch()

  // заменить
  const avatar = false
  const expired = true
  const notification = true

  const date = formateDate(dayReception)
  const day = formateDateDay(dayReception)

  const classNameNotification = expired
    ? `${Styles.notification} ${Styles.notification_expired}`
    : `${Styles.notification}`

  return (
    <li className={Styles.visit}>
      <div className={Styles.block}>
        <span className={`${Styles.title} ${Styles.title_mod}`}>{`«${consultationType.direction.title}»`}</span>
        <span className={Styles.subtitle}>
          {consultationType.title}, {isOnline ? 'Онлайн' : 'Личный'}
        </span>
      </div>
      <div className={`${Styles.block} ${Styles.block_mod}`}>
        {avatar ? (
          <img className={Styles.avatar} src={avatarPatient} alt='Аватар' />
        ) : (
          <div className={Styles.cap}>
            <span>
              {patient?.last_name?.substring(0, 1)}
              {patient?.first_name?.substring(0, 1)}
            </span>
          </div>
        )}

        <div className={Styles.patient}>
          <span className={Styles.title}>{patient.last_name}</span>
          <span className={Styles.subtitle}>{patient.first_name}</span>
        </div>
      </div>
      <div className={Styles.block}>
        <span className={Styles.title}>
          {date}, {day}
        </span>
        <span className={Styles.subtitle}>{timeReception}</span>
      </div>
      <div className={Styles.block}>
        <div className={Styles.conclusion}>
          {!medicalReport ? (
            <>
              <img src={createIcon} alt='Иконка' />
              <span
                className={Styles.text}
                onClick={() => {
                  dispatch(setReportsModalOpen(true))
                  dispatch(setAppointmentId(appointmentId))
                  dispatch(getMedicalReportId(appointmentId))
                }}
              >
                Создать заключение
              </span>
            </>
          ) : (
            <>
              <img src={viewIcon} alt='Иконка' />
              <span className={Styles.text}>Смотреть заключение</span>
            </>
          )}
        </div>
        {notification && <span className={classNameNotification}>Просрочено на 1 день</span>}
      </div>
    </li>
  )
}
