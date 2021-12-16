import { Logo } from '@components/Logo'
import React from 'react'
import Styles from './style.module.scss'
import MaskPerson from '@icons/masked-girl.svg'

export const InfoColumn = () => {
  return (
    <div className={Styles.column}>
      <Logo />
      <h2 className={Styles.title}>Помогаем вашему здоровью</h2>
      <p className={Styles.text}>Авторизуйтесь, чтобы продолжить пользоваться сервисом</p>
      <img src={MaskPerson} className={Styles.img} />
    </div>
  )
}
