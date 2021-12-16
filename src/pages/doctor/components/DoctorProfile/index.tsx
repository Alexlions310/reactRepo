import React, { useState } from 'react'

import { PersonalInfo } from './components/PersonalInfo'
import { CancelVisits } from './components/CancelVisits'

export const DoctorProfile: React.FC = () => {
  const [displayInfo, setDisplayInfo] = useState(true)

  const changeDisplay = (display) => {
    if (display === 'info') {
      setDisplayInfo(true)
    } else {
      setDisplayInfo(false)
    }
  }

  return (
    <>{displayInfo ? <PersonalInfo changeDisplay={changeDisplay} /> : <CancelVisits changeDisplay={changeDisplay} />}</>
  )
}
