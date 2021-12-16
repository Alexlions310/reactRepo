import { LKSearch } from '@components/LKSearch'
import { Logo } from '@components/Logo'
import { MobileModal } from '@components/MobileModal'
import React, { useState } from 'react'
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import Styles from './style.module.scss'
import search from '@icons/search-icon.svg'
import { ProfileModal } from '@components/ProfileModal'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { openProfileModal } from '@components/ProfileModal/redux/profileSlice'
import { FormControlLabel, FormGroup, Switch } from '@material-ui/core'
import { setRole } from '../../pages/authorization/redux/authSlice'
import useWindowSize from '@helpers/useWindowSizeHook'
import { makeAnchorScroll } from '../../utils/makeAnchorScroll'

export const Header = () => {
  const dispatch = useAppDispatch()
  const history = useHistory()
  const location = useLocation()
  const user = useAppSelector((state) => state.auth.user.info)
  const loggedIn = useAppSelector((state) => state.auth.user.isLoggedIn)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleRole = (e) => {
    e.target.checked ? dispatch(setRole('doctor')) : dispatch(setRole('patient'))
  }
  const { width } = useWindowSize()
  const desktop = width >= 829

  return location.pathname === '/login' ||
    location.pathname === '/onboarding' ||
    (location.pathname === '/appointment-page' && !desktop) ? null : (
    <div className={Styles.header_container}>
      <NavLink className={Styles.logo} to='/'>
        <Logo />
      </NavLink>
      <div className={Styles.header_container_content}>
        {!loggedIn && (
          <>
            <div className={Styles.navlinkLanding} onClick={() => makeAnchorScroll('#doctor')}>
              Врач
            </div>
            <div className={Styles.navlinkLanding} onClick={() => makeAnchorScroll('#howItWorks')}>
              Как это работает?
            </div>
            <div className={Styles.navlinkLanding} onClick={() => makeAnchorScroll('#consultations')}>
              Наши консультации
            </div>
            {/* <div className={Styles.navlinkLanding} onClick={() => makeAnchorScroll('#blog')}>
              Блог
            </div> */}
          </>
        )}
        {loggedIn && user.role === 'doctor' && (
          <>
            {/* <NavLink to='/'>Home</NavLink> */}
            {/* <NavLink to='/example-user-page'>User Page</NavLink> */}
            {/* <NavLink to='/appointment-page'>Запись на прием</NavLink> */}
            {/* <NavLink to='/example-doctor'>Doctor Page</NavLink> */}
            <NavLink exact className={Styles.navlink} activeClassName={Styles.navlink_active} to='/'>
              Главная
            </NavLink>
            <NavLink className={Styles.navlink} activeClassName={Styles.navlink_active} to='/patients'>
              Пациенты
            </NavLink>
            {/* <NavLink to='/'>Лендинг</NavLink> */}
            {/* <NavLink to='/login'>Authorization via SMS</NavLink> */}
            {/* <NavLink to='/user-space'>User Space</NavLink> */}
          </>
        )}
        {user.role === 'patient' && (
          <>
            <NavLink exact className={Styles.navlink} activeClassName={Styles.navlink_active} to='/user-space'>
              Главная
            </NavLink>
            <NavLink className={Styles.navlink} activeClassName={Styles.navlink_active} to='/appointment-page'>
              Запись на прием
            </NavLink>
            <NavLink className={Styles.navlink} activeClassName={Styles.navlink_active} to='/my-appointment'>
              Мои приёмы
            </NavLink>
            {/* <NavLink exact className={Styles.navlink} activeClassName={Styles.navlink_active} to=''>
              Каталог
            </NavLink>
            <NavLink className={Styles.navlink} activeClassName={Styles.navlink_active} to=''>
              Блог
            </NavLink> */}
          </>
        )}
      </div>
      {loggedIn && user.role === 'doctor' && (
        <div className={Styles.header_container_search}>
          <LKSearch />
        </div>
      )}
      <button
        className={Styles.header_container_profile_link}
        onClick={() => {
          !loggedIn ? history.push('/login') : dispatch(openProfileModal())
        }}
      >
        {loggedIn
          ? `${user.first_name || 'Профиль'} ${(user?.last_name && user.last_name.substring(0, 1).concat('.')) || ''}`
          : 'Вход для клиента'}
      </button>
      {/* {loggedIn && (
        <FormGroup>
          <FormControlLabel
            labelPlacement='top'
            control={<Switch size='small' color='primary' onChange={handleRole} checked={user.role === 'doctor'} />}
            label='Врач'
          />
        </FormGroup>
      )} */}
      <ProfileModal />
      <img
        src={search}
        alt='поиск'
        className={Styles.header_container_search_button}
        onClick={() => setIsModalOpen(true)}
      />
      <MobileModal title='Поиск' isOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <LKSearch />
      </MobileModal>
    </div>
  )
}
