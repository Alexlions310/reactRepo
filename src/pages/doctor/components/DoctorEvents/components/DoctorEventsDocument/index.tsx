import React from 'react'
import Styles from './style.module.scss'

import documentIcon from '@icons/document-event.svg'

export const DoctorEventsDocument: React.FC = () => {
  return (
    <div className={Styles.event}>
      <div className={Styles.content}>
        <div className={Styles.header}>
          <i className={Styles.icon}>
            <img src={documentIcon} alt='Иконка' />
          </i>
          <span className={Styles.title}>Создайте заключение до конца дня!</span>
        </div>
        <div className={Styles.body}>
          <div className={Styles.wrapper}>
            <span className={Styles.appointment}>
              До окончания срока создания заключения остался один день. Создайте его сегодня, чтобы не расстраивать
              пациента
            </span>
            <button className={Styles.create}>
              <i className={Styles.edit}>{}</i>
              <span className={Styles.button}>Создать заключение</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
