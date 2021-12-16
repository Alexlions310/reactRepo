import React from 'react'
import Styles from './style.module.scss'

import { ButtonSmall } from '../../../UI/ButtonSmall'
import { ButtonPrimary } from '../../../UI/ButtonPrimary'
import { ButtonSecondary } from '../../../UI/ButtonSecondary'

import avatarImage from '@images/avatar.png'

export const DoctorRecordInfo = () => {
  return (
    <div className={Styles.content}>
      <div className={Styles.header}>
        <div className={Styles.wrap}>
          <img className={Styles.avatar} src={avatarImage} alt='Аватар' />
          <div className={Styles.name}>
            <span className={Styles.secondname}>Курпатов</span>
            <span className={Styles.firstname}>Константин В.</span>
          </div>
        </div>
        <div className={Styles.record}>
          <span className={Styles.time}>09:30</span>
          <span className={Styles.type}>Онлайн прием</span>
        </div>
      </div>
      <div className={Styles.body}>
        <div className={Styles.block}>
          <span className={Styles.title}>Консультация</span>
          <span className={Styles.subtitle}>Нутрицевтическая подготовка к беременности</span>
        </div>
        <div className={Styles.block}>
          <span className={Styles.title}>Тип консультации</span>
          <span className={Styles.subtitle}>Первичная</span>
        </div>
        <div className={Styles.block}>
          <span className={Styles.title}>Дата и время</span>
          <span className={Styles.subtitle}>14 февраля, 09:30</span>
        </div>
        <ButtonSmall>Смотреть подробнее</ButtonSmall>
      </div>
      <div className={Styles.info}>
        <ButtonPrimary>Начать прием</ButtonPrimary>
        {/* <div className={Styles.warning}>
          <i className={Styles.icon}>{}</i>
          <span>Требуется заключение</span>
        </div> */}
        {/* <ButtonSecondary>Заключение</ButtonSecondary> */}
      </div>
    </div>
  )
}
