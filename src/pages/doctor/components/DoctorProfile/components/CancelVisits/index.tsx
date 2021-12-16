import React, { useState } from 'react'
import Styles from './style.module.scss'

import { CancelDays } from './CancelDays'
import { CancelHours } from './CancelHours'

import { getHalfYear } from '../../../../../../utils/getHalfYear'

interface CancelVisitsProps {
  changeDisplay: any
}

export const CancelVisits: React.FC<CancelVisitsProps> = ({ changeDisplay }) => {
  const [displayDays, setDisplayDays] = useState(true)

  const changeView = (view) => {
    if (view === 'days') {
      setDisplayDays(true)
    } else {
      setDisplayDays(false)
    }
  }

  const halfYears = getHalfYear()

  return (
    <div className={Styles.cancel}>
      <div className={Styles.header}>
        <button className={Styles.backspace} onClick={() => changeDisplay('info')}>
          {}
        </button>
        <span className={Styles.designation}>Отменить дни приема</span>
      </div>
      <div className={Styles.wrapper}>
        <p className={Styles.sub}>Выберите дни или часы, которые будут недоступны для записи пациентам</p>
        <div className={Styles.select}>
          <span
            className={displayDays ? `${Styles.item} ${Styles.item_active}` : `${Styles.item}`}
            onClick={() => changeView('days')}
          >
            Дни
          </span>
          <span
            className={!displayDays ? `${Styles.item} ${Styles.item_active}` : `${Styles.item}`}
            onClick={() => changeView('hours')}
          >
            Часы
          </span>
        </div>
      </div>
      <div className={Styles.head}>
        <div className={Styles.shell}>
          <span className={Styles.daytime}>Пн</span>
          <span className={Styles.daytime}>Вт</span>
          <span className={Styles.daytime}>Ср</span>
          <span className={Styles.daytime}>Чт</span>
          <span className={Styles.daytime}>Пт</span>
          <span className={Styles.daytime}>Сб</span>
          <span className={Styles.daytime}>Вс</span>
        </div>
      </div>
      <div className={Styles.container}>
        {displayDays ? <CancelDays halfYears={halfYears} /> : <CancelHours halfYears={halfYears} />}
      </div>
      <div className={Styles.confirm}>
        <div className={Styles.denomination}>
          {/* <span className={Styles.choose}>Выберите дни для отмены приема</span> */}
          <div className={Styles.choosed}>
            <span>Выбрано 33 дня</span>
            <span>14 мая - 15 июня</span>
          </div>
        </div>
        <button className={Styles.revoke}>Отменить прием</button>
      </div>
    </div>
  )
}
