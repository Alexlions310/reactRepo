import React from 'react'
import Styles from './style.module.scss'

import timeIcon from '@icons/time.svg'
import viewIcon from '@icons/view.svg'

interface DoctorPatientRecordMobileProps {
  description?: string
  type?: string
  patient?: any
  date?: any
  online?: boolean
  complete?: boolean
  notification?: boolean
  conclusion?: boolean
  className?: string
}

export const DoctorPatientRecordMobile: React.FC<DoctorPatientRecordMobileProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { description, type, patient, date, online, complete, notification, conclusion, className } = props

  let classNameRecord = complete ? `${Styles.record} ${Styles.record_complete}` : `${Styles.record}`
  let classNameHeader = online ? `${Styles.header}` : `${Styles.header} ${Styles.header_mod}`

  if (className) {
    classNameRecord = `${classNameRecord} ${className}`
  }

  if (complete) {
    classNameHeader = `${classNameHeader} ${Styles.header_complete}`
  }

  return (
    <div className={classNameRecord}>
      <div className={classNameHeader}>
        {notification && (
          <div className={Styles.notification}>
            <img src={timeIcon} alt='Иконка' />
            <span className={Styles.across}>Через 10 минут</span>
          </div>
        )}
        <div className={Styles.container}>
          <span className={Styles.time}>{date.time}</span>
          <span className={Styles.type}>{online ? 'Онлайн прием' : 'Личный прием'}</span>
        </div>
        {/* {online && <button className={Styles.start}>Начать прием</button>} */}
        {complete && !conclusion && (
          <button className={`${Styles.start} ${Styles.start_create}`}>Создать заключение</button>
        )}
      </div>
      <div className={Styles.block}>
        <span className={Styles.title}>Консультация</span>
        <p className={Styles.description}>{description}</p>
      </div>
      <div className={Styles.block}>
        <span className={Styles.title}>Тип консультации</span>
        <div className={Styles.wrap}>
          <p className={Styles.description}>{type}</p>
        </div>
      </div>
      <div className={Styles.block}>
        <span className={Styles.title}>Дата и время</span>
        <p className={Styles.description}>14 февраля, 09:00</p>
      </div>
      <div className={Styles.block}>
        <button className={Styles.conclusion}>
          <img src={viewIcon} alt='Иконка' />
          <span className={Styles.text}>Заключение</span>
        </button>
      </div>
    </div>
  )
}
