import React from 'react'
import Styles from './style.module.scss'
import { useAppSelector } from '@app/redux/hooks'

export const FirstStepFieldSet = ({ onChange }) => {
  const reportsErrors = useAppSelector((state) => state.reports.errors)
  return (
    <fieldset name='first' onChange={onChange} className={Styles.fieldset}>
      <label className={Styles.label}>Обратилась с жалобами на</label>
      <textarea name='complaints_about' className={Styles.textarea} />
      <span className={Styles.error}>{reportsErrors && reportsErrors.complaints_about}</span>
      <label className={Styles.label}>Цель обращения</label>
      <textarea name='goal_of_request' className={Styles.textarea} />
      <span className={Styles.error}>{reportsErrors && reportsErrors.goal_of_request}</span>
      <label className={Styles.label}>Из опроса</label>
      <textarea name='from_survey' className={Styles.textarea} />
      <span className={Styles.error}>{reportsErrors && reportsErrors.from_survey}</span>
    </fieldset>
  )
}
