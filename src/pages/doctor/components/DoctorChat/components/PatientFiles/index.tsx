import React, { useState } from 'react'
import Styles from './style.module.scss'

import { Photos } from './components/Photos'
import { Documents } from './components/Documents'

import backIcon from '@icons/back-chat.svg'

interface PatientFilesProps {
  setView: any
}

export const PatientFiles: React.FC<PatientFilesProps> = ({ setView }) => {
  const [type, setType] = useState('photo')

  const changeType = (type) => setType(type)

  return (
    <div className={Styles.files}>
      <div className={Styles.header}>
        <button className={Styles.back} onClick={() => setView('info')}>
          <img src={backIcon} alt='Иконка' />
          <span>Назад</span>
        </button>
        <span className={Styles.caption}>Файлы</span>
      </div>
      <div className={Styles.body}>
        <div className={Styles.tabs}>
          <span
            className={type === 'photo' ? `${Styles.tab} ${Styles.tab_active}` : `${Styles.tab}`}
            onClick={() => changeType('photo')}
          >
            Фото
          </span>
          <span
            className={type !== 'photo' ? `${Styles.tab} ${Styles.tab_active}` : `${Styles.tab}`}
            onClick={() => changeType('documents')}
          >
            Документы
          </span>
        </div>
        <div className={Styles.container}>
          {type === 'photo' && <Photos />}
          {type === 'documents' && <Documents />}
        </div>
      </div>
    </div>
  )
}
