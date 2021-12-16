import React from 'react'
import Styles from './style.module.scss'
import viewIcon from '@icons/view.svg'
import clock from '@icons/clock-white.svg'
import moment from 'moment'
import { getAppointmentById, setSelectById } from '../../../../../../redux/appointmentByIdSlicer'
import { setShowMainPage } from '../../../../../../redux/appointmentSlicer'
import { useAppDispatch } from '@app/redux/hooks'

interface CardProps {
  title: string
  date: any
  conclusion: boolean
  time: string
  id: any
}
export const AppointmentHistoryCardMobile: React.FC<CardProps> = (props) => {
  const { title, date, time, conclusion, id } = props
  const dateFomat = moment(date, 'YYYY-MM-DD').format('DD MMMM')
  const dateTimeFormat = moment(date, 'YYYY-MM-DD').format('dddd, DD MMMM')
  const dispatch = useAppDispatch()
  return (
    <div
      className={Styles.visit}
      onClick={() => {
        dispatch(setSelectById(id))
        dispatch(setShowMainPage(false))
        dispatch(getAppointmentById(id))
      }}
    >
      <div className={Styles.wrapper}>
        <div className={Styles.wrap}>Запись от {dateFomat}</div>
        <span className={Styles.link}>{}</span>
      </div>
      <div className={Styles.block}>
        <span className={Styles.label}>Консультация</span>
        <span className={Styles.text}>{title}</span>
      </div>
      <div className={Styles.block}>
        <span className={Styles.label}>Дата и время</span>
        <span className={Styles.text}>{`${dateTimeFormat} в ${time}`}</span>
      </div>
      {conclusion && (
        <div className={Styles.conclusion}>
          <img src={viewIcon} className={Styles.icon} />
          <span className={Styles.warning}>Смотреть заключение</span>
        </div>
      )}
      {conclusion === null && (
        <span className={Styles.notification}>
          <img src={clock} alt='clock' />
          Врач готовит заключение
        </span>
      )}
    </div>
  )
}
