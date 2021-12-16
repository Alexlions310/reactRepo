import React from 'react'
import Styles from './style.module.scss'

export const AccessDeniedPage = () => {
  return (
    <div className={Styles.access_container}>
      <h1>Страница не доступна данному типу пользователя</h1>
    </div>
  )
}
