import React, { useState } from 'react'
import Styles from './style.module.scss'

import caretIcon from '@icons/caret.svg'

import { getHalfYear } from '../../../../../../utils/getHalfYear'

interface CalendarMobileProps {
  selectedDay?: any
}

export const CalendarMobile: React.FC<CalendarMobileProps> = ({ selectedDay }) => {
  const halfYears = getHalfYear()

  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentMonth, setCurrentMonth] = useState(halfYears[currentIndex])
  const [selectedDayIndex, setSelectedDayIndex] = useState('')
  // const [selectedDay, setSelectedDay] = useState('')

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
    <div className={Styles.calendar}>
      <div className={Styles.head}>
        <span className={Styles.daytime}>Пн</span>
        <span className={Styles.daytime}>Вт</span>
        <span className={Styles.daytime}>Ср</span>
        <span className={Styles.daytime}>Чт</span>
        <span className={Styles.daytime}>Пт</span>
        <span className={Styles.daytime}>Сб</span>
        <span className={Styles.daytime}>Вс</span>
      </div>
      <div className={Styles.body}>
        <div className={Styles.select}>
          <img
            className={`${Styles.caret} ${Styles.caret_rotate}`}
            src={caretIcon}
            alt='Иконка'
            onClick={() => changeMonth('backward')}
          />
          <span className={Styles.month}>{`${currentMonth.name}`}</span>
          <img className={Styles.caret} src={caretIcon} alt='Иконка' onClick={() => changeMonth('forward')} />
        </div>
        <div className={Styles.days}>
          {currentMonth.days.map((day, index) => (
            <div
              className={selectedDayIndex === index ? `${Styles.day} ${Styles.day_selected}` : `${Styles.day}`}
              key={index}
            >
              <span className={Styles.inner}>{day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
