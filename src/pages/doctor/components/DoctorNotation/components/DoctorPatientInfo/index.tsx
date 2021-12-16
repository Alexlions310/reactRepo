import React from 'react'
import { useAppSelector } from '@app/redux/hooks'
import Styles from './style.module.scss'

import { Chat } from '../../../UI/Chat'

import photoPatient from '@images/photo.png'

export const DoctorPatientInfo: React.FC = () => {
  const currentPatient = useAppSelector((state) => state.doctor.currentPatient)

  return (
    <div className={Styles.info}>
      <div className={Styles.wrapper}>
        <div className={Styles.content}>
          {currentPatient.avatar ? (
            <img className={Styles.avatar} src={photoPatient} alt='Фото' />
          ) : (
            <div className={Styles.cap}>
              <span>
                {currentPatient.last_name.substring(0, 1)}
                {currentPatient.first_name.substring(0, 1)}
              </span>
            </div>
          )}
          <div className={Styles.name}>
            <span className={Styles.secondname}>{currentPatient.last_name}</span>
            <span className={Styles.firstname}>
              {currentPatient.first_name} {currentPatient.middle_name}
            </span>
          </div>
        </div>
        <Chat />
      </div>
      <div className={Styles.wrap}>
        <div className={Styles.block}>
          <span className={Styles.label}>Дата рождения</span>
          <span className={Styles.content}>{currentPatient.birthday}</span>
        </div>
        <div className={Styles.block}>
          <span className={Styles.label}>Пол</span>
          <span className={Styles.content}>{currentPatient.gender}</span>
        </div>
        <div className={Styles.block}>
          <span className={Styles.label}>Номер телефона</span>
          <span className={Styles.content}>{currentPatient.phone}</span>
        </div>
      </div>
    </div>
  )
}
