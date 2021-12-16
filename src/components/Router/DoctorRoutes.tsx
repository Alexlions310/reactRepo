import React, { useEffect } from 'react'
import { ProtectedRoute } from '@components/Router/protected-route'
import { useAppDispatch } from '@app/redux/hooks'
import {
  getListAppointments,
  getListPatients,
  getConsultationDirection,
  getConsultationType,
  getDoctorCalendar,
} from '../../pages/doctor/redux/doctorSlicer'
// eslint-disable-next-line camelcase
import { USER_ROlES } from '../../global-constants'
import { DoctorMain } from '../../pages/doctor/components/DoctorMain'
import { DoctorPatients } from '../../pages/doctor/components/DoctorPatients'
import { DoctorCard } from '../../pages/doctor/components/DoctorCard'
import { DoctorAppointment } from '../../pages/doctor/components/DoctorAppointment'

export const DoctorRoutes: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getListAppointments())
    dispatch(getListPatients())
    dispatch(getConsultationDirection())
    dispatch(getConsultationType())
    // dispatch(getDoctorCalendar({ start_date: '2021-11-01', end_date: '2021-12-01' }))
  }, [])

  return (
    <>
      <ProtectedRoute allowedUsersTypes={[USER_ROlES.doctor, USER_ROlES.admin]} path='/' exact component={DoctorMain} />
      <ProtectedRoute
        allowedUsersTypes={[USER_ROlES.doctor, USER_ROlES.admin]}
        path='/patients'
        exact
        component={DoctorPatients}
      />
      <ProtectedRoute
        allowedUsersTypes={[USER_ROlES.doctor, USER_ROlES.admin]}
        path='/card'
        exact
        component={DoctorCard}
      />
      <ProtectedRoute
        allowedUsersTypes={[USER_ROlES.doctor, USER_ROlES.admin]}
        path='/record'
        exact
        component={DoctorAppointment}
      />
    </>
  )
}
