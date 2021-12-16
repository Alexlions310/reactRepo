import React, { useState } from 'react'
import Styles from './style.module.scss'

import caretIcon from '@icons/caret.svg'

import { getHalfYear } from '../../../../../utils/getHalfYear'

interface CalendarProps {
  selectDay?: any
}

export const Calendar: React.FC<CalendarProps> = ({ selectDay }) => {
  const halfYears = getHalfYear()

  const [currentMonthIndex, setCurrentMonthIndex] = useState(0)
  const [currentMonth, setCurrentMonth] = useState(halfYears[currentMonthIndex])
  const [selectedDayIndex, setSelectedDayIndex] = useState(null)

  const changeMonth = (direction) => {
    if (direction === 'forward') {
      if (currentMonthIndex < halfYears.length - 1) {
        setCurrentMonthIndex((prev) => prev + 1)
        setCurrentMonth(halfYears[currentMonthIndex + 1])
      }
    }

    if (direction === 'backward') {
      if (currentMonthIndex > 0) {
        setCurrentMonthIndex((prev) => prev - 1)
        setCurrentMonth(halfYears[currentMonthIndex - 1])
      }
    }
  }

  const onClickDay = (day, index) => {
    const dayString = day >= 10 ? `${day}` : `0${day}`
    const date = `${currentMonth.year}-${currentMonth.month.number}-${dayString}`

    setSelectedDayIndex(index)
    selectDay(date)
  }

  return (
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
      <div className={Styles.body}>
        <div className={Styles.select}>
          <img
            className={`${Styles.caret} ${Styles.caret_rotate}`}
            src={caretIcon}
            alt='Иконка'
            onClick={() => changeMonth('backward')}
          />
          <span className={Styles.month}>{`${currentMonth.month.name} ${currentMonth.year}`}</span>
          <img className={Styles.caret} src={caretIcon} alt='Иконка' onClick={() => changeMonth('forward')} />
        </div>
        <div className={Styles.days}>
          {currentMonth.days.map((day, index) => (
            <div
              className={selectedDayIndex === index ? `${Styles.day} ${Styles.day_selected}` : `${Styles.day}`}
              key={index}
            >
              {day.month !== currentMonth.month.number ? (
                <span className={`${Styles.inner} ${Styles.inner_disabled}`}>{day.number}</span>
              ) : (
                <span className={Styles.inner} onClick={() => onClickDay(day.number, index)}>
                  {day.number}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
