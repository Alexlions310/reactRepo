import React from 'react'
import Styles from './style.module.scss'
import { useAppSelector } from '@app/redux/hooks'

export const Mark = () => {
  const dataHandler = useAppSelector((state) => state.consultationPage.data)
  return (
    <div className={Styles.container}>
      <p className={Styles.wrap}>
        <i className={Styles.dot}>{}</i>— cвободные записи
      </p>
      <p className={Styles.mark}>Изменить дату и время приема можно, написав в техническую поддержку сервиса</p>
      {!dataHandler.is_online ? (
        <p className={Styles.mark}>
          Консультация пройдет по адресу: <span className={Styles.mark_bold}>{dataHandler.address}</span>
        </p>
      ) : null}
    </div>
  )
}
