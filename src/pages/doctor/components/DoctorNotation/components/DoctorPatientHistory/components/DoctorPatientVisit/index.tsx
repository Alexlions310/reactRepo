import React from 'react'
import { useHistory } from 'react-router-dom'
import { useAppDispatch } from '@app/redux/hooks'
import {} from '../../../../../../redux/doctorSlicer'
import Styles from './style.module.scss'

import createIcon from '@icons/create.svg'
import viewIcon from '@icons/view.svg'

interface DoctorPatientVisitProps {
  title: string
  subtitle: string
  // eslint-disable-next-line react/no-unused-prop-types
  patient?: any
  date: any
  conclusion: boolean
  notification: boolean
  expired: boolean
}

export const DoctorPatientVisit: React.FC<DoctorPatientVisitProps> = (props) => {
  const { title, subtitle, date, conclusion, notification, expired } = props

  const dispatch = useAppDispatch()
  const history = useHistory()

  const classNameNotification = expired
    ? `${Styles.notification} ${Styles.notification_expired}`
    : `${Styles.notification}`

  const onClickRecord = () => {
    // dispatch(setCurrentPatient(user))
    history.push('/record')
  }

  return (
    <li className={Styles.visit}>
      <div className={Styles.block}>
        <span className={`${Styles.title} ${Styles.title_mod}`} onClick={onClickRecord}>
          {title}
        </span>
        <span className={Styles.subtitle}>{subtitle}</span>
      </div>
      <div className={Styles.block}>
        <span className={Styles.title}>{date.day}</span>
        <span className={Styles.subtitle}>{date.time}</span>
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
    </li>
  )
}
