import React, { useState } from 'react'
import Styles from './style.module.scss'

import caretIcon from '@icons/caret.svg'

interface CancelHoursProps {
  halfYears: any
}

export const CancelHours: React.FC<CancelHoursProps> = ({ halfYears }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentMonth, setCurrentMonth] = useState(halfYears[currentIndex])
  const [selectedDayIndex, setSelectedDayIndex] = useState('')
  const [selectedDay, setSelectedDay] = useState('')

  const changeMonth = (direction) => {
    if (direction === 'forward') {
      if (currentIndex < halfYears.length - 1) {
        setCurrentIndex((prev) => prev + 1)
        setCurrentMonth(halfYears[currentIndex + 1])
      }
    }

    if (direction === 'backward') {
      if (currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1)
        setCurrentMonth(halfYears[currentIndex - 1])
      }
    }
  }

  const selectDay = (dayIndex) => {
    setSelectedDayIndex(dayIndex)
    setSelectedDay(currentMonth.days[dayIndex])
  }

  return (
    <div className={Styles.cancel}>
      <div className={Styles.calendar}>
        <div className={Styles.select}>
          <img
            className={`${Styles.caret} ${Styles.caret_rotate}`}
            src={caretIcon}
            alt='Иконка'
            onClick={() => changeMonth('backward')}
          />
          <span className={Styles.month}>{`${currentMonth.name} ${currentMonth.year}`}</span>
          <img className={Styles.caret} src={caretIcon} alt='Иконка' onClick={() => changeMonth('forward')} />
        </div>
        <div className={Styles.days}>
          {currentMonth.days.map((day, index) => (
            <div
              className={selectedDayIndex === index ? `${Styles.day} ${Styles.day_selected}` : `${Styles.day}`}
              key={index}
            >
              <span className={Styles.inner} onClick={() => selectDay(index)}>
                {day}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* {selectedDay && (
        <div className={Styles.oneday}>
          <span className={Styles.title}>
            сегодня, {selectedDay} {currentMonth.name}
          </span>
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
      )} */}
    </div>
  )
}
