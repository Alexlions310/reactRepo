import React from 'react'
import Styles from './style.module.scss'

export const UserDrawer = () => {
  return (
    <div className={Styles.order_container}>
      <div className={Styles.content}>
        <span>Информация о заказе</span>
      </div>
    </div>
  )
}
