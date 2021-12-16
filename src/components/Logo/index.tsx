import logo from '@icons/logo.svg'
import React from 'react'
import Styles from './style.module.scss'

export const Logo = () => {
  return (
    <div className={Styles.logo__container}>
      <div className={Styles.logo__wrapper}>
        <img src={logo} className={Styles.logo} />
      </div>
      <span className={Styles.logo__span}>Персональные лаборатории</span>
    </div>
  )
}
