import React from 'react'

import { DoctorContainer } from '../DoctorContainer'
import { DoctorCabinet } from '../DoctorCabinet'
import { DoctorHistory } from '../DoctorHistory'

export const DoctorMain: React.FC = () => {
  return (
    <>
      <DoctorContainer title='Личный кабинет' back=''>
        <DoctorCabinet />
      </DoctorContainer>
      <DoctorContainer title='Прошедшие записи' back=''>
        <DoctorHistory />
      </DoctorContainer>
    </>
  )
}
