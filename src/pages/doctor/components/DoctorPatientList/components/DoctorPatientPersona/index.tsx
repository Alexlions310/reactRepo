import React from 'react'
import { useHistory } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { getPatient } from '../../../../redux/doctorSlicer'
import Styles from './style.module.scss'

import { Chat } from '../../../UI/Chat'

import avatarPatient from '@images/avatar.png'
import bellIcon from '@icons/bell.svg'
import createIcon from '@icons/create.svg'
import viewIcon from '@icons/view.svg'

interface DoctorPatientPersonaProps {
  patientId: number
  firstName: string
  lastName: string
  phone: string
}

export const DoctorPatientPersona: React.FC<DoctorPatientPersonaProps> = (props) => {
  const dispatch = useAppDispatch()
  const history = useHistory()

  const { patientId, firstName, lastName, phone } = props

  const conclusion = true
  const notification = true
  const expired = false
  const avatar = false

  const classNameNotification = expired
    ? `${Styles.notification} ${Styles.notification_expired}`
    : `${Styles.notification}`

  const onClickPatient = async () => {
    try {
      await dispatch(getPatient(patientId))
      history.push('/card')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <li className={Styles.visit}>
      <div className={Styles.block}>
        <div className={Styles.wrap}>
          {avatar ? (
            <img className={Styles.avatar} src={avatarPatient} alt='Аватар' />
          ) : (
            <div className={Styles.cap}>
              <span>
                {lastName?.substring(0, 1)}
                {firstName?.substring(0, 1)}
              </span>
            </div>
          )}
          <div className={Styles.patient}>
            <span className={Styles.secondname} onClick={onClickPatient}>
              {lastName}
            </span>
            <span className={Styles.firstname}>{firstName}</span>
          </div>
        </div>
        <button className={Styles.remind}>
          <img src={bellIcon} alt='Иконка' />
          <span className={Styles.about}>Напомнить о приеме</span>
        </button>
      </div>
      <div className={Styles.block}>
        <span className={`${Styles.title} ${Styles.title_mod}`}>сегодня, 14 июля</span>
        <span className={Styles.subtitle}>«Нутрицевтическая подготовка к беременности»</span>
      </div>
      <div className={Styles.block}>
        <div className={Styles.conclusion}>
          {!conclusion ? (
            <>
              <img src={createIcon} alt='Иконка' />
              <span className={Styles.text}>Создать заключение</span>
            </>
          ) : (
            <>
              <img src={viewIcon} alt='Иконка' />
              <span className={Styles.text}>Смотреть заключение</span>
            </>
          )}
        </div>
        {notification && <span className={classNameNotification}>Просрочено на 1 день</span>}
      </div>
      <div className={Styles.block}>
        <span className={Styles.phone}>{phone}</span>
      </div>
      <div className={Styles.block}>
        <Chat />
      </div>
    </li>
  )
}
