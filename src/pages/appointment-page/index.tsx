import React from 'react'
import { useAppSelector } from '@app/redux/hooks'
import Styles from './style.module.scss'
import { AppointmentPagination } from './components/AppointmentPagination'
import { ConsultationFull } from './components/ConsultationFull'
import { TypeOfConsultation } from './components/TypeOfConsultation'
import { DateOfConsultation } from './components/DateOfConcultation'
import { PersonalData } from './components/PersonalData'
import { Invitation } from './components/Invitation'
import { Logo } from '@components/Logo'
import { PageNotFount } from '../../pages/not-found'

export const AppointmentPage = () => {
  const list = useAppSelector((state) => state.choieConsultationPage.list)
  const finish = useAppSelector((state) => state.choieConsultationPage.finishStep)
  const loggedIn = useAppSelector((state) => state.auth.user.isLoggedIn)
  const step0 = list[0].isActive
  const step1 = list[1].isActive
  const step2 = list[2].isActive
  const step3 = list[3].isActive
  return loggedIn ? (
    <div className={Styles.main_container}>
      <div className={Styles.header}>
        <Logo />
      </div>

      {!finish && <AppointmentPagination />}
      {step0 && <ConsultationFull />}
      {step1 && <TypeOfConsultation />}
      {step2 && <DateOfConsultation />}
      {step3 && <PersonalData />}
      {finish && <Invitation />}
    </div>
  ) : (
    <PageNotFount />
  )
}
