import React from 'react'
import Styles from './style.module.scss'

import avatarPatient from '@images/avatar.png'
import createIcon from '@icons/create.svg'
import viewIcon from '@icons/view.svg'
import bellIcon from '@icons/bell.svg'

export const DoctorPatientPersonaMobile: React.FC = () => {
  return (
    <li className={Styles.visit}>
      <div className={Styles.patient}>
        <div className={Styles.info}>
          <div className={Styles.avatar}>
            <span className={Styles.count}>4</span>
            <img className={Styles.image} src={avatarPatient} alt='Аватар' />
          </div>
          <div className={Styles.name}>
            <span className={Styles.secondname}>Курпатов</span>
            <span className={Styles.firstname}>Константин В., 39 лет</span>
          </div>
        </div>
        <button className={Styles.link}>{}</button>
      </div>
      <div className={Styles.wrapper}>
        <div className={Styles.wrap}>
          <div className={Styles.block}>
            <span className={Styles.label}>Дата рождения</span>
            <span className={Styles.title}>19.08.1975</span>
          </div>
          <div className={Styles.block}>
            <span className={Styles.label}>Номер телефона</span>
            <span className={Styles.title}>+7 (923) 987−39−10</span>
          </div>
        </div>
        <div className={Styles.block}>
          <span className={Styles.label}>Последнее обращение</span>
          <span className={Styles.title}>Вчера, 14 февраля</span>
        </div>
        <span className={Styles.designation}>Нутрицевтическая подготовка к беременности</span>
        <button className={Styles.conclusion}>
          <img src={createIcon} alt='Иконка' />
          <span className={Styles.text}>Создать заключение</span>
        </button>
        <button className={Styles.conclusion}>
          <img src={viewIcon} alt='Иконка' />
          <span className={Styles.text}>Смотреть заключение</span>
        </button>
        <button className={Styles.conclusion}>
          <img src={bellIcon} alt='Иконка' />
          <span className={Styles.text}>Напомнить о приеме</span>
        </button>
      </div>
      <span className={Styles.notification}>Остался 1 день</span>
    </li>
  )
}
