import React, { useEffect, useState } from 'react'
import Styles from './style.module.scss'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { TransitionsModal } from '@components/Modal'
import { postDietReport, postMedicalReport, setReportsModalOpen } from './redux/reportsSlice'
import closeButton from '@icons/close-gray.svg'
import { AuthSubmitButton } from '@components/AuthSubmitButton'
import { FirstStepFieldSet } from './FirstStepFieldset'
import { DietReport } from './DietReport'
import { TabMenu } from './TabMenu'

export const MedicalReportsModal = () => {
  const dispatch = useAppDispatch()
  const isModalOpen = useAppSelector((state) => state.reports.modalIsOpen)
  const appointmentId = useAppSelector((state) => state.reports.appointmentId)
  const medicalReportId = useAppSelector((state) => state.reports.medicalReportId)
  const reportsErrors = useAppSelector((state) => state.reports.errors)
  const [firstStepValues, setFirstStepValues] = useState(null)
  const [dietValues, setDietStepValues] = useState(null)

  const [activeContent, setActiveContent] = useState('diet')

  const inputsHandler = (event, setter, values, idName: string, id: number) => {
    const { name, value } = event.target
    setter({ [idName]: id, ...values, [name]: value })
  }
  const handleChange = (e) => {
    e.target.closest('fieldset').name === 'first' &&
      inputsHandler(e, setFirstStepValues, firstStepValues, 'appointment', appointmentId)
    e.target.closest('fieldset').name === 'diet' &&
      inputsHandler(e, setDietStepValues, dietValues, 'medical_report', medicalReportId)
    console.log(firstStepValues)
    console.log(dietValues)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    firstStepValues &&
      dispatch(postMedicalReport(firstStepValues)).then((res) => {
        setFirstStepValues(null)
        console.log(res)
      })
    dietValues &&
      dispatch(postDietReport(dietValues)).then((res) => {
        setDietStepValues(null)
        console.log(res)
      })
  }
  return (
    <TransitionsModal isOpenModal={isModalOpen} setModalOpened={() => dispatch(setReportsModalOpen(false))}>
      <div className={Styles.container}>
        <img
          className={Styles.closeButton}
          onClick={() => dispatch(setReportsModalOpen(false))}
          src={closeButton}
          alt='close'
        />
        <h2 className={Styles.h2}>Создание медицинского заключения</h2>
        <form className={Styles.form} onSubmit={handleSubmit}>
          {!medicalReportId ? (
            <FirstStepFieldSet onChange={handleChange} />
          ) : (
            <div className={Styles.wrapper}>
              <TabMenu activeContent={activeContent} setActiveContent={setActiveContent} />
              <div className={Styles.note}>
                {activeContent === 'diet' && 'Заполните поля рекомендаций для питания'}
                {activeContent === 'lifeStyle' && 'Выберите рекомендации по образу жизни'}
                {activeContent === 'nutraceutical' && 'Выберите нутрицевтики'}
                {activeContent === 'research' && 'Выберите исследования'}
              </div>
              {activeContent === 'diet' && <DietReport onChange={handleChange} dietValues={dietValues} />}
              {activeContent === 'lifeStyle' && <div>lifeStyle</div>}
              {activeContent === 'nutraceutical' && <div>Появится в будущих обновлениях</div>}
              {activeContent === 'research' && <div>Появится в будущих обновлениях</div>}
            </div>
          )}
          <AuthSubmitButton
            buttonText={`${
              reportsErrors && reportsErrors.appointment ? 'Заключение уже создано' : 'Создать медзаключение'
            }`}
            onClick={() => {}}
          />
        </form>
      </div>
    </TransitionsModal>
  )
}
