import React from 'react'
import { useAppSelector } from '@app/redux/hooks'

import { DoctorContainer } from '../DoctorContainer'
import { DoctorPatientList } from '../DoctorPatientList'

export const DoctorPatients: React.FC = () => {
  const listUniqPatients = useAppSelector((state) => state.doctor.listUniqPatients)

  return (
    <>
      <DoctorContainer title='Пациенты' count={listUniqPatients.length} back=''>
        <DoctorPatientList />
      </DoctorContainer>
    </>
  )
}
