import React, { useState } from 'react'
import Styles from './style.module.scss'

import { CancelDays } from './CancelDays'
import { CancelHours } from './CancelHours'
import { ConfirmPopup } from '../ConfirmPopup'

import { getHalfYear } from '../../../../../../utils/getHalfYear'

interface CancelVisitProps {
  setView: any
}

export const CancelVisits: React.FC<CancelVisitProps> = ({ setView }) => {
  const [displayDays, setDisplayDays] = useState(true)
  const [selectedDay, setSelectedDay] = useState(false)

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
        <button className={Styles.back} onClick={() => setView('info')}>
          {}
        </button>
        <span className={Styles.title}>Отменить дни приема</span>
        <button className={Styles.close}>{}</button>
      </div>
      <div className={Styles.select}>
        <p className={Styles.text}>Выберите дни или часы, которые будут недоступны для записи пациентам</p>
        <ul className={Styles.list}>
          <li
            className={displayDays ? `${Styles.item} ${Styles.item_active}` : `${Styles.item}`}
            onClick={() => changeView('days')}
          >
            <span>Дни</span>
          </li>
          <li
            className={!displayDays ? `${Styles.item} ${Styles.item_active}` : `${Styles.item}`}
            onClick={() => changeView('hours')}
          >
            <span>Часы</span>
          </li>
        </ul>
      </div>
      <div className={Styles.calendar}>
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
        <div className={Styles.content}>
          {displayDays ? (
            <CancelDays halfYears={halfYears} />
          ) : (
            <CancelHours halfYears={halfYears} selectedDay={setSelectedDay} />
          )}
        </div>
      </div>
      {selectedDay && (
        <ConfirmPopup closePopup={setSelectedDay}>
          <div className={Styles.wrapper}>
            <span className={Styles.caption}>сегодня, 14 января</span>
            <div className={Styles.visits}>
              <div className={`${Styles.visit} ${Styles.visit_expired}`}>
                <i className={Styles.icon}>{}</i>
                <span className={Styles.time}>08:00</span>
              </div>
              <div className={`${Styles.visit} ${Styles.visit_expired}`}>
                <i className={Styles.icon}>{}</i>
                <span className={Styles.time}>08:00</span>
              </div>
              <div className={`${Styles.visit} ${Styles.visit_expired}`}>
                <i className={Styles.icon}>{}</i>
                <span className={Styles.time}>08:00</span>
              </div>
              <div className={`${Styles.visit} ${Styles.visit_expired}`}>
                <i className={Styles.icon}>{}</i>
                <span className={Styles.time}>08:00</span>
              </div>
              <label className={`${Styles.visit} ${Styles.visit_selected}`}>
                <input className={Styles.input} type='checkbox' />
                <span className={Styles.checkbox}>{}</span>
                <span className={Styles.time}>08:00</span>
              </label>
              <label className={`${Styles.visit} ${Styles.visit_selected}`}>
                <input className={Styles.input} type='checkbox' />
                <span className={Styles.checkbox}>{}</span>
                <span className={Styles.time}>08:00</span>
              </label>
              <label className={Styles.visit}>
                <input className={Styles.input} type='checkbox' />
                <span className={Styles.checkbox}>{}</span>
                <span className={Styles.time}>08:00</span>
              </label>
            </div>
          </div>
          <div className={Styles.block}>
            <div className={Styles.designation}>
              {/* <span className={Styles.choosed}>Выберите часы для отмены приема</span> */}
              <span className={Styles.denotation}>Выбрано 5 записей</span>
              <span className={Styles.choosed}>14 мая: 14:00, 15:30, 16:00 17:30, 18:00</span>
            </div>
            <button className={Styles.confirm}>Отменить прием</button>
          </div>
        </ConfirmPopup>
      )}
    </div>
  )
}
