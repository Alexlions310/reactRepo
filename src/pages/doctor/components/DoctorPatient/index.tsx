import React from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import useWindowSize from '../../../../helpers/useWindowSizeHook'
import { toggleModal } from '../../redux/doctorSlicer'
import Styles from './style.module.scss'

import { DoctorModal } from '../DoctorModal'
import { DoctorRecording } from '../DoctorRecording'
import { DoctorRecordingMobile } from '../DoctorRecording/components/DoctorRecordingMobile'
import { DoctorPatientHistory } from '../DoctorNotation/components/DoctorPatientHistory'
import { DoctorPatientHistoryMobile } from '../DoctorNotation/components/DoctorPatientHistory/components/DoctorPatientHistoryMobile'
import { DoctorPatientLastRecord } from './components/DoctorPatientLastRecord'
import { DoctorPatientData } from './components/DoctorPatientData'

import photoPatient from '@images/photo.png'
import cloudIcon from '@icons/cloud.svg'

import { data1 } from '../../constants'

export const DoctorPatient: React.FC = () => {
  const dispatch = useAppDispatch()
  const displayModal = useAppSelector((state) => state.doctor.displayModal)
  const currentPatient = useAppSelector((state) => state.doctor.currentPatient)
  const { width } = useWindowSize()

  const openModal = () => dispatch(toggleModal())

  return (
    <>
      {displayModal && (
        <DoctorModal>
          {width > 830 ? <DoctorRecording /> : <DoctorRecordingMobile title='Запись на прием' />}
        </DoctorModal>
      )}
      <div className={Styles.patient}>
        <div className={Styles.block}>
          <div className={Styles.info}>
            <div className={Styles.wrapper}>
              <div className={Styles.wrap}>
                {currentPatient.avatar ? (
                  <img className={Styles.photo} src={photoPatient} alt='Фото' />
                ) : (
                  <div className={Styles.cap}>
                    <span>
                      {currentPatient.last_name.substring(0, 1)}
                      {currentPatient.first_name.substring(0, 1)}
                    </span>
                  </div>
                )}
                <div className={Styles.name}>
                  <span className={Styles.secondname}>{currentPatient.last_name}</span>
                  <span className={Styles.firstname}>{currentPatient.first_name}</span>
                </div>
              </div>
              <div className={Styles.connection}>
                <button className={Styles.reception} onClick={openModal}>
                  Записать на прием
                </button>
                <button className={Styles.connect}>
                  <img src={cloudIcon} alt='Иконка' />
                  <span className={Styles.write}>Написать</span>
                  <span className={Styles.count}>1</span>
                </button>
              </div>
            </div>
          </div>
          <DoctorPatientHistory />
        </div>
        <div className={Styles.block}>
          <DoctorPatientLastRecord {...data1[0]} />
          <DoctorPatientData />
        </div>
      </div>
      <div className={`${Styles.patient} ${Styles.patient_mobile}`}>
        <div className={Styles.block}>
          <div className={Styles.info}>
            <div className={Styles.wrapper}>
              <div className={Styles.wrap}>
                <img className={Styles.photo} src={photoPatient} alt='Фото' />
                <div className={Styles.name}>
                  <span className={Styles.secondname}>Сурганова</span>
                  <span className={Styles.firstname}>Ольга Владимировна</span>
                </div>
              </div>
              <button className={`${Styles.reception} ${Styles.reception_desktop}`}>Записать на прием</button>
            </div>
            <button className={`${Styles.reception} ${Styles.reception_mobile}`} onClick={openModal}>
              Записать на прием
            </button>
          </div>
          <DoctorPatientData />
        </div>
        <div className={Styles.block}>
          <DoctorPatientLastRecord {...data1[0]} />
          <DoctorPatientHistoryMobile />
        </div>
      </div>
    </>
  )
}
