import React from 'react'
import Styles from './style.module.scss'

import { AppointmentsList } from './components/AppointmentsList'
import { AppointmentDetails } from './components/AppointmentDetails'
import { useAppSelector } from '@app/redux/hooks'
import { DrawerMobileById } from './components/DrawerMobileById'
import useWindowSize from '@helpers/useWindowSizeHook'

export const MyAppointment = (props) => {
  const showMainPage = useAppSelector((state) => state.myAppointment.showMainPage)
  const { width } = useWindowSize()
  const desktop = width >= 829
  return (
    <>
      {showMainPage && <AppointmentsList />}
      {!showMainPage && desktop && <AppointmentDetails />}
      {!showMainPage && !desktop && <DrawerMobileById />}
    </>
  )
}
