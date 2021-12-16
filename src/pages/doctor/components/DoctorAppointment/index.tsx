import React from 'react'

import { DoctorContainer } from '../DoctorContainer'
import { DoctorNotation } from '../DoctorNotation'

export const DoctorAppointment: React.FC = () => {
  return (
    <>
      <DoctorContainer title='Запись на прием' back='Назад на главную' to='/'>
        <DoctorNotation />
      </DoctorContainer>
    </>
  )
}
