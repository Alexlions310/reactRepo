import React, { useState } from 'react'
import Styles from './style.module.scss'

import { ConfirmPopup } from '../ConfirmPopup'

interface CanceledVisitProps {
  setView: any
}

export const CanceledVisit: React.FC<CanceledVisitProps> = ({ setView }) => {
  const [displayConfirm, setDispalyConfirm] = useState(false)

  return (
    <div className={Styles.canceled}>
      <div className={Styles.header}>
        <button className={Styles.back} onClick={() => setView('info')}>
          {}
        </button>
        <span className={Styles.title}>Прием отменен</span>
        <button className={Styles.close}>{}</button>
      </div>
      <ul className={Styles.dates}>
        <li className={Styles.date}>
          <span className={Styles.period}>14 мая - 15 июня,</span>&nbsp;
          <span className={Styles.days}>33 дня</span>
          <button className={Styles.restore} onClick={() => setDispalyConfirm(true)}>
            {}
          </button>
        </li>
        <li className={Styles.date}>
          <span className={Styles.period}>15 февраля,</span>&nbsp;
          <span className={Styles.days}>1 день</span>
          <button className={Styles.restore}>{}</button>
        </li>
        <li className={Styles.date}>
          <span className={Styles.period}>18 февраля - 20 февраля,</span>&nbsp;
          <span className={Styles.days}>2 дня</span>
          <button className={Styles.restore}>{}</button>
        </li>
        <li className={Styles.date}>
          <span className={Styles.period}>16 февраля,</span>&nbsp;
          <span className={Styles.days}>1 день</span>
          <button className={Styles.restore}>{}</button>
        </li>
        <li className={Styles.date}>
          <span className={Styles.period}>13 января - 11 февраля,</span>&nbsp;
          <span className={Styles.days}>2 дня</span>
          <button className={Styles.restore}>{}</button>
        </li>
        <li className={Styles.date}>
          <span className={Styles.period}>14 мая: 14:00, 15:30, 16:00...</span>&nbsp;
          <span className={Styles.days}>5 записей</span>
          <button className={Styles.restore}>{}</button>
        </li>
        <li className={Styles.date}>
          <span className={Styles.period}>14 мая: 14:00, 15:30,</span>&nbsp;
          <span className={Styles.days}>2 записи</span>
          <button className={Styles.restore}>{}</button>
        </li>
      </ul>
      {displayConfirm && (
        <ConfirmPopup closePopup={setDispalyConfirm}>
          <div className={Styles.wrapper}>
            <span className={Styles.caption}>Хотите возобновить прием?</span>
            <span className={Styles.subcaption}>14 мая - 15 июня, 33 дня</span>
            <button className={Styles.yep}>Да, возобновить</button>
            <button className={Styles.nope}>Не возобновлять</button>
          </div>
        </ConfirmPopup>
      )}
    </div>
  )
}
