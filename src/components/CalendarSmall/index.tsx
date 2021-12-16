import React, { useState } from 'react'
import Styles from './style.module.scss'
import moment from 'moment'
import arrow from '@icons/arrow-calendar.svg'
import { setData } from '../../pages/appointment-page/redux/consultationSlicer'
import 'moment/locale/ru'
import { useAppDispatch } from '@app/redux/hooks'
import classNames from 'classnames/bind'
moment.locale('ru')

export const CalendarSmall = (props) => {
  const dispatch = useAppDispatch()
  const [today, setToday] = useState(moment())
  const [selectDay, setSelectDay] = useState(moment().format('DDMMYYYY'))
  const [selectMonth, setSelectMonth] = useState(moment().format('MMYYYY'))
  const [selectYear, setSelectYear] = useState(moment().format('YYYY'))
  const [daysIsActive, setDaysIsActive] = useState(true)
  const [monthsIsActive, setMonthsIsActive] = useState(false)
  const [yearsIsActive, setYearsIsActive] = useState(false)

  const startDay = today.clone().startOf('month').startOf('week').subtract(1, 'day')
  const day = startDay.clone()
  const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone())

  const prevHandler = (e) => {
    e.preventDefault()
    setToday((prev) => prev.clone().subtract(1, 'month'))
  }
  const nextHandler = (e) => {
    e.preventDefault()
    setToday((prev) => prev.clone().add(1, 'month'))
  }

  const prevYearHandler = (e) => {
    e.preventDefault()
    setToday((prev) => prev.clone().subtract(1, 'year'))
  }
  const nextYearHandler = (e) => {
    e.preventDefault()
    setToday((prev) => prev.clone().add(1, 'year'))
  }
  const nextYearsHandler = (e) => {
    e.preventDefault()
    setToday((prev) => prev.clone().add(12, 'year'))
  }
  const prevYearsHandler = (e) => {
    e.preventDefault()
    setToday((prev) => prev.clone().subtract(12, 'year'))
  }

  const month = today.clone().startOf('year').startOf('month')
  const monthsArray = [...Array(12)].map(() => month.add(1, 'month').clone())
  monthsArray.unshift(monthsArray.pop())

  const selectMonths = (selectMonth) => {
    const count = selectMonth.clone()
    setToday(count)
  }
  const startYear = today.clone().startOf('year')
  const year = startYear.clone()
  const yearsArray = [...Array(12)].map(() => year.subtract(1, 'year').clone())
  const selectYears = (selectYear) => {
    const count = selectYear.clone()
    setToday(count)
  }
  const selectMonthHendler = (e) => {
    e.preventDefault()
    setDaysIsActive(false)
    setMonthsIsActive(true)
    setYearsIsActive(false)
  }
  const selectYearHendler = (e) => {
    e.preventDefault()
    setMonthsIsActive(false)
    setYearsIsActive(true)
  }
  const setDayOfBirthHandler = (data) => {
    dispatch(
      setData({
        key: 'dayOfBirth',
        value: data,
      }),
    )
  }

  const dayStyle = (day) =>
    classNames(Styles.day, {
      [`${Styles.day_active}`]: selectDay === day.format('DDMMYYYY'),
      [`${Styles.day_unmonth}`]: !today.isSame(day, 'month'),
    })
  const monthStyle = (month) =>
    classNames(Styles.date, {
      [`${Styles.date_active}`]: selectMonth === month,
    })
  const yearStyle = (yaer) =>
    classNames(Styles.date, {
      [`${Styles.date_active}`]: selectYear === yaer,
    })

  return (
    <div className={Styles.main__container}>
      <div className={Styles.button__pagination}>
        <button
          onClick={
            (daysIsActive && prevHandler) || (monthsIsActive && prevYearHandler) || (yearsIsActive && prevYearsHandler)
          }
          className={Styles.button}
        >
          <img src={arrow} alt='arrow' />
        </button>
        {daysIsActive && (
          <button onClick={selectMonthHendler} className={Styles.button}>
            {today.format('MMMM YYYY')}
          </button>
        )}
        {monthsIsActive && (
          <button onClick={selectYearHendler} className={Styles.button}>
            {today.format('YYYY')}
          </button>
        )}
        {yearsIsActive && (
          <div className={Styles.button}>{`${yearsArray[11].format('YYYY')} - ${yearsArray[0].format('YYYY')}`}</div>
        )}
        <button
          onClick={
            (daysIsActive && nextHandler) || (monthsIsActive && nextYearHandler) || (yearsIsActive && nextYearsHandler)
          }
          className={`${Styles.button} ${Styles.button__next}`}
        >
          <img src={arrow} alt='arrow' />
        </button>
      </div>
      {daysIsActive && (
        <div className={Styles.container}>
          <div className={Styles.names__container}>
            {[...Array(7)].map((_, i) => (
              <div className={Styles.day__name} key={i}>
                {moment()
                  .day(i + 1)
                  .format('ddd')}
              </div>
            ))}
          </div>
          <div className={Styles.days__container}>
            {daysArray.map((dayItem) => (
              <div
                onClick={() => {
                  setSelectDay(dayItem.format('DDMMYYYY'))
                  setToday(dayItem)
                  props.birth(dayItem.format('DD.MM.YYYY'))
                  props.setValues({ ...props.values, birthday: dayItem.format('YYYY-MM-DD') })
                  setDayOfBirthHandler(dayItem.format('DD.MM.YYYY'))
                  setTimeout(() => {
                    props.changeShowCalendar(false)
                  }, 100)
                }}
                className={dayStyle(dayItem)}
                key={dayItem.format('DDMMYYYY')}
              >
                {dayItem.format('DD')}
              </div>
            ))}
          </div>
        </div>
      )}
      {monthsIsActive && (
        <div className={Styles.date__container}>
          {monthsArray.map((item, i) => (
            <div
              className={monthStyle(item.format('MMYYYY'))}
              key={i}
              onClick={() => {
                setDaysIsActive(true)
                setMonthsIsActive(false)
                setYearsIsActive(false)
                selectMonths(item)
                setSelectMonth(item.format('MMYYYY'))
              }}
            >
              {item.format('MMM').replace(/[.]$/, '')}
            </div>
          ))}
        </div>
      )}
      {yearsIsActive && (
        <div className={Styles.date__container}>
          {yearsArray.reverse().map((item, i) => (
            <div
              className={yearStyle(item.format('YYYY'))}
              key={i}
              onClick={() => {
                setDaysIsActive(false)
                setMonthsIsActive(true)
                setYearsIsActive(false)
                selectYears(item)
                setSelectYear(item.format('YYYY'))
              }}
            >
              {item.format('YYYY')}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
