import React, { useState } from 'react'
import { useAppDispatch } from '@app/redux/hooks'
import { toggleModal, createAppointment } from '../../../../redux/doctorSlicer'
import Styles from './style.module.scss'

import { RecordingSetup } from './components/RecordingSetup'
import { CalendarMobile } from '../../../UI/Calendar/CalendarMobile'
import { DoctorPopupMobile } from '../../../DoctorModal/components/DoctorPopupMobile'
import { DoctorPopupMobileVH } from '../../../DoctorModal/components/DoctorPopupMobileVH'

import backIcon from '@icons/back-mobile.svg'
import closeIcon from '@icons/close-blue.svg'

interface DoctorRecordingMobileProps {
  title: string
}

export const DoctorRecordingMobile: React.FC<DoctorRecordingMobileProps> = ({ title }) => {
  const dispatch = useAppDispatch()

  const [record, setRecord] = useState({ date: '', direction: '', type: '' })
  const [displayPopup, setDisplayPopup] = useState(true)
  const [dispalyPopupVH, setDispalyPopupVH] = useState(false)

  const closeModal = () => dispatch(toggleModal())

  const openPopup = () => setDisplayPopup(true)
  const closePopup = () => setDisplayPopup(false)

  const closePopupVH = () => setDispalyPopupVH(false)

  const handlerChange = (event) => setRecord({ ...record, [event.target.name]: event.target.value })

  const selectDirection = (direction) => {
    setRecord({ ...record, direction })
    // toggleSelection()
  }

  const addAppointment = () =>
    dispatch(
      createAppointment({
        doctor: 1,
        patient: 1,
        consultation_type: 1,
        is_online: true,
      }),
    )

  return (
    <div className={Styles.recording}>
      <div className={Styles.header}>
        <img src={backIcon} alt='Иконка' />
        <span className={Styles.title}>{title}</span>
        <img src={closeIcon} alt='Иконка' onClick={closeModal} />
      </div>
      <CalendarMobile />
      {displayPopup && (
        <DoctorPopupMobile closePopup={closePopup}>
          <RecordingSetup openPopup={openPopup} />
        </DoctorPopupMobile>
      )}
      {dispalyPopupVH && (
        <DoctorPopupMobileVH title='Направление консультации' backPopup={closePopupVH} closePopup={closePopupVH}>
          <>
            <div className={Styles.wrapper}>
              <span className={Styles.field}>Выберите направление консультации</span>
              <div className={Styles.radios}>
                <label className={Styles.lab}>
                  <input className={Styles.input} type='radio' name='type' onChange={handlerChange} />
                  <span className={Styles.radio}>{}</span>
                  Консультация врача-нутрициолога
                </label>
                <label className={Styles.lab}>
                  <input className={Styles.input} type='radio' name='type' onChange={handlerChange} />
                  <span className={Styles.radio}>{}</span>
                  Антивозраст (AntiAge)
                </label>
                <label className={Styles.lab}>
                  <input className={Styles.input} type='radio' name='type' onChange={handlerChange} />
                  <span className={Styles.radio}>{}</span>
                  Нутрицевтическая подготовка к беременности
                </label>
                <label className={Styles.lab}>
                  <input className={Styles.input} type='radio' name='type' onChange={handlerChange} />
                  <span className={Styles.radio}>{}</span>
                  Прием витаминов и БАД — врачебный контроль
                </label>
                <label className={Styles.lab}>
                  <input className={Styles.input} type='radio' name='type' onChange={handlerChange} />
                  <span className={Styles.radio}>{}</span>
                  Генетический тест
                </label>
                <label className={Styles.lab}>
                  <input className={Styles.input} type='radio' name='type' onChange={handlerChange} />
                  <span className={Styles.radio}>{}</span>
                  Лабораторный чекап
                </label>
              </div>
            </div>
            <button className={Styles.choose}>Выбрать консультацию</button>
          </>
        </DoctorPopupMobileVH>
      )}
      {dispalyPopupVH && (
        <DoctorPopupMobileVH title='Запись на прием' closePopup={closePopupVH}>
          <>
            <div className={Styles.wrapperrr}>
              <span className={Styles.warning}>Пациент записан на прием</span>
              <span className={Styles.desc}>Сурганова О. В. записан(а) на прием</span>
              <span className={Styles.date}>14 мая, вторник, 14:00</span>
            </div>
            <button className={Styles.choose}>Перейти к записи</button>
          </>
        </DoctorPopupMobileVH>
      )}
    </div>
  )
}
