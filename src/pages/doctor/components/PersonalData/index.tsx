import React, { useState } from 'react'
import { PersonalInfo } from './components/PersonalInfo'
import { EditData } from './components/EditData'
import { CanceledVisit } from './components/CanceledVisit'
import { CancelVisits } from './components/CancelVisits'

export const PersonalData: React.FC = () => {
  const [view, setView] = useState('info')

  return (
    <>
      {view === 'info' && <PersonalInfo setView={setView} />}
      {view === 'edit' && <EditData setView={setView} />}
      {view === 'canceled' && <CanceledVisit setView={setView} />}
      {view === 'cancel' && <CancelVisits setView={setView} />}
    </>
  )
}
