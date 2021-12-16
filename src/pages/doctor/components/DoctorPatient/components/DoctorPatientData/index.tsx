import React from 'react'
import { useAppSelector } from '@app/redux/hooks'
import Styles from './style.module.scss'

export const DoctorPatientData: React.FC = () => {
  const currentPatient = useAppSelector((state) => state.doctor.currentPatient)

  return (
    <div className={Styles.info}>
      <span className={Styles.caption}>Личные данные</span>
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
