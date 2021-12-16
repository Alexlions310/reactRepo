import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import Styles from './style.module.scss'
import logo from '../../assets/icons/blue-mojo-logo.svg'
import { useAppSelector } from '@app/redux/hooks'
import { makeAnchorScroll } from '../../utils/makeAnchorScroll'

export const Footer = (): React.ReactElement => {
  const location = useLocation()
  const loggedIn = useAppSelector((state) => state.auth.user.isLoggedIn)
  return location.pathname === '/login' ||
    location.pathname === '/onboarding' ||
    location.pathname === '/my-appointment' ||
    location.pathname === '/appointment-page' ? null : (
    <div className={Styles.footer}>
      <div className={Styles.footer_wrapper}>
        {!loggedIn && (
          <div className={Styles.footer_navigation}>
            <div className={Styles.footer_navigation_link} onClick={() => makeAnchorScroll('#doctor')}>
              Врач
            </div>
            <div className={Styles.footer_navigation_link} onClick={() => makeAnchorScroll('#howItWorks')}>
              Как это работает?
            </div>
            <div className={Styles.footer_navigation_link} onClick={() => makeAnchorScroll('#consultations')}>
              Наши консультации
            </div>
            {/* <div className={Styles.footer_navigation_link} onClick={() => makeAnchorScroll('#blog')}>
              Блог
            </div> */}
          </div>
        )}
        <div className={Styles.footer_policy}>
          <Link to='' className={Styles.footer_policy_link}>
            Политика конфиденциальности
          </Link>
          <Link to='' className={Styles.footer_policy_link}>
            Обработка персональных данных
          </Link>
        </div>
      </div>
      <a
        href='https://themojo.io/?utm_source=persolab'
        target='_blank'
        className={Styles.footer_logo_container}
        rel='noreferrer'
      >
        <img src={logo} alt='Лого' />
        <p>Задизайнен, разработан и поддерживается</p>
      </a>
      <p className={Styles.footer_copyright}>© 2020–2021 Телемедицина «Персональные лаборатории»</p>
    </div>
  )
}
