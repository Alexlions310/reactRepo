import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { MobileMenuItem } from './MobileMenuItem'
import Styles from './style.module.scss'
import main from '@icons/mobile-menu-main.svg'
import message from '@icons/mobile-menu-message.svg'
import pencil from '@icons/mobile-menu-pencil.svg'
import profile from '@icons/mobile-menu-profile.svg'
import sheet from '@icons/mobile-menu-sheet.svg'
import patients from '@icons/doctor-patients-mobile.svg'
import events from '@icons/doctor-event-mobile.svg'
import { MobileModal } from '@components/MobileModal'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { openProfileModal } from '@components/ProfileModal/redux/profileSlice'

export const MobileMenu = () => {
  const history = useHistory()
  const dispatch = useAppDispatch()
  const userRole = useAppSelector((state) => state.auth.user.info?.role)
  const isLoggedIn = useAppSelector((state) => state.auth.user.isLoggedIn)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isEventsOpen, setIsEventsOpen] = useState(false)
  return (
    <>
      <div className={Styles.container}>
        {userRole === 'patient' ? (
          <>
            <MobileMenuItem text='Главная' icon={main} onClick={() => history.push('/user-space')} />
            {isLoggedIn && (
              <>
                <MobileMenuItem text='Записаться' icon={pencil} onClick={() => history.push('/appointment-page')} />
                <MobileMenuItem text='Мои приёмы' icon={sheet} onClick={() => history.push('/my-appointment')} />
                {/* <MobileMenuItem text='Чат' icon={message} onClick={() => setIsChatOpen(true)} /> */}
              </>
            )}
            <MobileMenuItem
              text={isLoggedIn ? 'Профиль' : 'Вход / Регистрация'}
              icon={profile}
              onClick={() => (isLoggedIn ? dispatch(openProfileModal()) : history.push('/login'))}
            />
          </>
        ) : (
          <>
            <MobileMenuItem text='Главная' icon={main} onClick={() => history.push('/')} />
            {isLoggedIn && (
              <>
                <MobileMenuItem text='События' icon={events} onClick={() => setIsEventsOpen(true)} />
                <MobileMenuItem text='Пациенты' icon={patients} onClick={() => history.push('/patients')} />
                {/* <MobileMenuItem text='Чат' icon={message} onClick={() => setIsChatOpen(true)} /> */}
              </>
            )}
            <MobileMenuItem
              text='Профиль'
              icon={profile}
              onClick={() => (isLoggedIn ? dispatch(openProfileModal()) : history.push('/login'))}
            />
          </>
        )}
      </div>
      {/* <MobileModal title='Чат' isOpen={isChatOpen} setIsModalOpen={() => setIsChatOpen(false)}>
        <div className={Styles.chat}>
          <p>Чат находится в разработке</p>
        </div>
      </MobileModal> */}
      <MobileModal title='События' isOpen={isEventsOpen} setIsModalOpen={() => setIsEventsOpen(false)}>
        <div className={Styles.chat}>
          <p>События</p>
        </div>
      </MobileModal>
    </>
  )
}
