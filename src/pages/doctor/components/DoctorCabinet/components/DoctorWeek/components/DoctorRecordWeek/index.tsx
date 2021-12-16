import React from 'react'
import Styles from './style.module.scss'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DoctorRecord } from '../../../DoctorDay/components/DoctorRecord'

interface DoctorRecordWeekProps {
  date: any
  count: any
  entrys: any
}

export const DoctorRecordWeek: React.FC<DoctorRecordWeekProps> = ({ date, count, entrys }) => {
  return (
    <div className={Styles.record}>
      <div className={Styles.block}>
        <span className={Styles.date}>{date}</span>
      </div>
      <div className={Styles.block}>
        <span className={Styles.count}>{count}</span>
      </div>
      <div className={Styles.block}>
        {entrys.map((entry) => (
          <div key={entry.id} className={Styles.entry}>
            {entry.online ? (
              <i className={Styles.icon}>{}</i>
            ) : (
              <i className={`${Styles.icon} ${Styles.icon_mod}`}>{}</i>
            )}
            <span className={Styles.time}>{entry.date.time}</span>
            {/* <DoctorRecord {...entry} className={Styles.record_mod} /> */}
          </div>
        ))}
      </div>
    </div>
  )
}
