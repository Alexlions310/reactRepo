import React from 'react'
import Styles from './style.module.scss'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames/bind'

export const Wrapper = ({ children }): React.ReactElement => {
  const location = useLocation()

  const styles = {
    main: `${Styles.components__wrapper}`,
    noPadding: `${Styles.no_padding}`,
    noPaddingAppointment: `${Styles.appointment}`,
  }
  const cx = classNames.bind(styles)

  return (
    <div
      className={`${cx('main', {
        noPadding: location.pathname === '/login',
        noPaddingAppointment: location.pathname === '/appointment-page' || location.pathname === '/onboarding',
      })}`}
    >
      {children}
    </div>
  )
}
