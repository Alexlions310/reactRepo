import React from 'react'

import { DoctorContainer } from '../DoctorContainer'
import { DoctorPatient } from '../DoctorPatient'

export const DoctorCard: React.FC = () => {
  return (
    <>
      <DoctorContainer title='' back='Назад ко всем пациентам' to='/patients'>
        <DoctorPatient />
      </DoctorContainer>
    </>
  )
}
