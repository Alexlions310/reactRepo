import React from 'react'
import Styles from './style.module.scss'

import { DoctorConsequence } from './components/DoctorConsequence'
import { DoctorPatientInformation } from './components/DoctorPatientInformation'
import { DoctorPatientHistory } from './components/DoctorPatientHistory'
import { DoctorPatientHistoryMobile } from './components/DoctorPatientHistory/components/DoctorPatientHistoryMobile'
import { DoctorPatientRecord } from './components/DoctorPatientRecord'
import { DoctorPatientRecordMobile } from './components/DoctorPatientRecord/components/DoctorPatientRecordMobile'
import { DoctorPatientInfo } from './components/DoctorPatientInfo'

import { data1 } from '../../constants'

export const DoctorNotation: React.FC = () => {
  return (
    <>
      <div className={Styles.notation}>
        <div className={Styles.block}>
          <DoctorConsequence />
          <DoctorPatientInformation />
          <DoctorPatientHistory />
        </div>
        <div className={Styles.block}>
          <DoctorPatientRecord {...data1[0]} />
          <DoctorPatientInfo />
        </div>
      </div>
      <div className={`${Styles.notation} ${Styles.notation_mobile}`}>
        <div className={Styles.block}>
          <DoctorPatientInformation />
          <DoctorPatientHistoryMobile />
        </div>
        <div className={Styles.block}>
          <DoctorPatientRecordMobile {...data1[0]} />
          <DoctorPatientInfo />
        </div>
      </div>
    </>
  )
}
