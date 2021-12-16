import React, { useState } from 'react'
import Styles from './style.module.scss'

import { RecordingSetup } from './components/RecordingSetup'
import { RecordingComplete } from './components/RecordingComplete'

export const DoctorRecording: React.FC = () => {
  const [compeleRecording, setCompleteRecording] = useState(false)

  const completeRecord = () => setCompleteRecording(true)

  return (
    <div className={Styles.recording}>
      <div className={Styles.block}>
        <span className={Styles.caption}>Запись на прием</span>
      </div>
      {compeleRecording ? <RecordingComplete /> : <RecordingSetup completeRecord={completeRecord} />}
    </div>
  )
}
