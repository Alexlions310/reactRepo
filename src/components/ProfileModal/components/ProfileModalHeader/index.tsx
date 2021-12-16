import React from 'react'
import Styles from './style.module.scss'
import { useAppSelector, useAppDispatch } from '@app/redux/hooks'
import { handleLogout } from '../../../../pages/authorization/redux/authSlice'
import { useHistory } from 'react-router'

export const ProfileModalHeader = () => {
  const dispatch = useAppDispatch()
  const history = useHistory()
  const user = useAppSelector((state) => state.auth.user.info)

  const handleOutClick = () => {
    dispatch(handleLogout())
    history.push('/')
    window.location.reload()
  }

  return (
    <div className={Styles.header}>
      <div className={Styles.avatar}>{`${user.first_name.substring(0, 1).toUpperCase() || ''}${
        user.last_name?.substring(0, 1).toUpperCase() || ''
      }`}</div>
      <div className={Styles.headerWrapper}>
        <h3>{`${user.first_name || ''} ${(user?.last_name && user.last_name.substring(0, 1).concat('.')) || ''}`}</h3>
        <button onClick={handleOutClick}>Выйти</button>
      </div>
    </div>
  )
}
