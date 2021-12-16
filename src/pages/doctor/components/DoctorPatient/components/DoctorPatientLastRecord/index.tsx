import React from 'react'
import Styles from './style.module.scss'

// import timeIcon from '@icons/time.svg'
// import avatarPatient from '@images/avatar.png'
// import viewIcon from '@icons/view.svg'

interface DoctorPatientLastRecordProps {
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

export const DoctorPatientLastRecord: React.FC<DoctorPatientLastRecordProps> = (props) => {
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
      <span className={Styles.caption}>Последнее обращение</span>
      <div className={classNameHeader}>
        <div className={Styles.container}>
          <span className={Styles.time}>{date.time}</span>
          <span className={Styles.type}>{online ? 'Онлайн прием' : 'Личный прием'}</span>
        </div>
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
        <div className={Styles.wrap}>
          <p className={Styles.description}>14 февраля, 09:00</p>
          <button className={Styles.link}>{}</button>
        </div>
      </div>
    </div>
  )
}
