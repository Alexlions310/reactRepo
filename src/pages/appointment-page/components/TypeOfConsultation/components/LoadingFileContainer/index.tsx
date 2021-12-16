import { InputFile } from '@components/ui/InputFile'
import React, { useState } from 'react'
import { LoadingProgress } from '../LoadingProgress'
import Styles from './style.module.scss'

export const LoadingFileContainer = () => {
  const [file, setFile] = useState(null)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isActive, setIsActive] = useState(false)
  const fileHandler = (e) => {
    setFile(e.target.files[0])
  }

  return (
    <div className={Styles.container}>
      <h6 className={Styles.title}>Результаты исследования</h6>
      <p className={Styles.text}>Прикрепите результаты генетического теста. Врач получит эту информацию до приема</p>

      <div className={Styles.input__wrapper}>
        <InputFile className={Styles.button} value='Выберите файл' onChange={fileHandler} image styleButton />
        <p className={Styles.input__text}>Или перетащите его сюда</p>
      </div>
      {isActive && <LoadingProgress file={file} />}
    </div>
  )
}
