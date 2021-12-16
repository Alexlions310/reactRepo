import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { getListAppointmentsDate } from '../../../../redux/doctorSlicer'
import Styles from './style.module.scss'

import { DoctorRecordWeek } from './components/DoctorRecordWeek'

import { getDate } from '../../../../../../utils/formateDate'

import { data2 } from '../../../../constants'

export const DoctorWeek: React.FC = () => {
  const dispatch = useAppDispatch()
  const listAppointments = useAppSelector((state) => state.doctor.listAppointments)
  const [appointmentsWeek, setAppointmentsWeek] = useState([])

  useEffect(() => {
    const dayAfter = getDate()
    const dayBefore = getDate('7')

    const getAppointments = async () => {
      const array = []

      try {
        const response = await dispatch(getListAppointmentsDate({ dayAfter, dayBefore }))
        const copyResponse = [...response.payload.data.results]

        for (let i = 0; i <= 7; i++) {
          if (i === 0) {
            const day = getDate()

            copyResponse.forEach((item) => {
              console.log(item)
            })
          } else {
            const day = getDate(i)
            const obj = {}
          }

          // console.log(response.payload.data.results)
        }
      } catch (error) {
        console.log(error)
      }
    }

    const appointments = getAppointments()

    // setAppointmentsWeek(appointments)
  }, [])

  return (
    <div className={Styles.schedule}>
      <div className={Styles.header}>
        <span className={Styles.head}>Дата</span>
        <span className={Styles.head}>Кол-во</span>
        <span className={Styles.head}>Записи</span>
      </div>
      <div className={Styles.wrapper}>
        {data2 &&
          data2.map((record) => (
            <DoctorRecordWeek key={record.id} date={record.date} count={record.count} entrys={record.entrys} />
          ))}
      </div>
    </div>
  )
}
