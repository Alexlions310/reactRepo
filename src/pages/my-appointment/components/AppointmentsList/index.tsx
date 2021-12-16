import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import {
  getAppointmentListDone,
  getAppointmentListPlanned,
  getAppointmentListPlannedMore,
} from '../../redux/appointmentSlicer'
import React, { useEffect, useState } from 'react'
import { AppointmentCard } from './components/AppointmentCard'
import Styles from './style.module.scss'
import { AppointmentHistory } from './components/AppointmentHistory'
import { ButtonColor } from '@components/ui/ButtonColor'

export const AppointmentsList = (props) => {
  const dataPlanned = useAppSelector((state) => state.myAppointment.dataPlanned)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getAppointmentListDone())
  }, [])
  useEffect(() => {
    dispatch(getAppointmentListPlanned())
  }, [])
  const statusPlanned = useAppSelector((state) => state.myAppointment.statusDone)

  const page = useAppSelector((state) => state.myAppointment.page)

  const showMore = () => {
    dispatch(getAppointmentListPlannedMore(page))
  }
  const paginationPlanned = useAppSelector((state) => state.myAppointment.paginationPlanned)

  return (
    <>
      <h1 className={Styles.title}>Мои приемы</h1>
      <div className={Styles.container}>
        {dataPlanned &&
          statusPlanned === 'success' &&
          dataPlanned.map((item) => <AppointmentCard key={item.id} item={item} />)}
      </div>
      {paginationPlanned && (
        <div className={Styles.button__container}>
          <ButtonColor value='Показать еще' onClick={showMore} />
        </div>
      )}
      <h1 className={Styles.title}>Прошедшие записи</h1>
      <AppointmentHistory />
    </>
  )
}
