import React, { useState } from 'react'
import Styles from './style.module.scss'

import caretIcon from '@icons/caret.svg'

interface CancelHoursProps {
  halfYears: any
  selectedDay?: any
}

export const CancelHours: React.FC<CancelHoursProps> = ({ halfYears, selectedDay }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentMonth, setCurrentMonth] = useState(halfYears[currentIndex])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedDayIndex, setSelectedDayIndex] = useState('')

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

  // const selectDay = (dayIndex) => {
  //   setSelectedDayIndex(dayIndex)
  //   setSelectedDay(currentMonth.days[dayIndex])
  // }

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
              <span className={Styles.inner} onClick={() => selectedDay(true)}>
                {day}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
