import React from 'react'
import Styles from './style.module.scss'

import questionIcon from '@icons/question.svg'

import { PastAppointment } from './components/PastAppointment'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { AppointmentHistoryMobile } from './components/AppointmentHistoryMobile'
import { ButtonColor } from '@components/ui/ButtonColor'
import { getAppointmentListDoneMore } from '../../../../redux/appointmentSlicer'
export const AppointmentHistory = (props) => {
  const dataDone = useAppSelector((state) => state.myAppointment.dataDone)
  const statusDone = useAppSelector((state) => state.myAppointment.statusDone)
  console.log(dataDone)
  const paginationDone = useAppSelector((state) => state.myAppointment.paginationDone)
  const dispatch = useAppDispatch()
  const page = useAppSelector((state) => state.myAppointment.pageDone)
  const showMore = () => {
    dispatch(getAppointmentListDoneMore(page))
  }

  return (
    <>
      <div className={Styles.table}>
        <div className={Styles.header}>
          <div className={Styles.wrap}>
            <span className={Styles.head}>Консультация</span>
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
          {dataDone &&
            statusDone === 'success' &&
            dataDone.map((item) => (
              <PastAppointment
                key={item.id}
                id={item.id}
                title={item.consultation_type.direction.title}
                subtitle={`${item.consultation_type.title}, ${item.is_online ? 'Онлайн' : 'Лично'}`}
                date={item.day_reception}
                conclusion={null}
                conclusionIsReady={item.medical_report}
                time={item.time_reception}
              />
            ))}
        </ul>
      </div>
      <div className={`${Styles.table} ${Styles.table_mobile}`}>
        <AppointmentHistoryMobile dataDone={dataDone} statusDone={statusDone} />
      </div>
    </>
  )
}
