import React from 'react'
import Styles from './style.module.scss'

import { DoctorPatientVisit } from './components/DoctorPatientVisit'
import { Filter } from '../../../UI/Filter'

import questionIcon from '@icons/question.svg'

import { data } from '../../../../constants'

export const DoctorPatientHistory = () => {
  return (
    <div className={Styles.history}>
      <span className={Styles.caption}>Все записи пациента</span>
      <Filter select={!!true} />
      <div className={Styles.table}>
        <div className={Styles.header}>
          <div className={Styles.wrap}>
            <span className={Styles.head}>Консультация</span>
          </div>
          <div className={Styles.wrap}>
            <span className={Styles.head}>Дата</span>
          </div>
          <div className={Styles.wrap}>
            <span className={`${Styles.head} ${Styles.head_mod}`}>Мед. заключение</span>
            <img src={questionIcon} alt='Иконка' />
          </div>
        </div>
        <ul className={Styles.content}>
          {data &&
            data.map((visit) => (
              <DoctorPatientVisit
                key={visit.id}
                title={visit.title}
                subtitle={visit.subtitle}
                patient={visit.patient}
                date={visit.date}
                conclusion={visit.conclusion}
                notification={visit.notification}
                expired={visit.expired}
              />
            ))}
        </ul>
      </div>
    </div>
  )
}
