import React, { useEffect, useState } from 'react'
import Styles from './style.module.scss'
import moment from 'moment'
import { Day } from './components/Day'
import arrow from '@icons/arrow-small.svg'
import { Total } from '../Total'
import { DayTitle } from './components/DayTitle'
import { SelectTime } from './components/SelectTime'
import { ButtonColor } from '@components/ui/ButtonColor'
import { Mark } from './components/Mark'
import 'moment/locale/ru'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setData } from '../../redux/consultationSlicer'
import {
  changeTitle,
  consultationActive,
  mobileState,
  mobileStatePagination,
} from '../../redux/choiсeConsultationSlicer'
import { getConsultationCalendar } from '../../redux/consultationDateSliser'
import filter from '@icons/filter.svg'

import { DrawerPanel } from '../../../../components/Drawer'
import useWindowSize from '../../../../helpers/useWindowSizeHook'
import { FilterDrawerAppointment } from '../DateOfConcultation/components/FilterDrawer'
import { MobileHeader } from '../MobileHeader'
import { Sidebar } from '../SideBar'
moment.locale('ru')

export const DateOfConsultation = () => {
  const [today, setToday] = useState(moment())
  const [buttonAllCount, setButtonAllCount] = useState(true)
  const [buttonAMCount, setButtonAMCount] = useState(false)
  const [buttonPMCount, setButtonPMCount] = useState(false)

  const startDay = today.clone().startOf('month').startOf('week').subtract(1, 'day')
  const day = startDay.clone()
  const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone())

  const prevHandler = () => {
    setToday((prev) => prev.clone().subtract(1, 'month'))
    dispatch(
      getConsultationCalendar({
        start_date: daysArray[0].subtract(1, 'month').format('YYYY-MM-DD'),
        end_date: daysArray[41].subtract(1, 'month').format('YYYY-MM-DD'),
        doctor: '2',
      }),
    )
  }
  const nextHandler = () => {
    setToday((prev) => prev.clone().add(1, 'month'))
    dispatch(
      getConsultationCalendar({
        start_date: daysArray[0].add(1, 'month').format('YYYY-MM-DD'),
        end_date: daysArray[41].add(1, 'month').format('YYYY-MM-DD'),
        doctor: '2',
      }),
    )
  }
  const isToday = (day) => moment().isSame(day, 'day')
  const isCurrentMonth = (month) => today.isSame(month, 'month')
  const selectAM = () => {
    setButtonAMCount(true)
    setButtonAllCount(false)
    setButtonPMCount(false)
  }
  const selectPM = () => {
    setButtonAMCount(false)
    setButtonAllCount(false)
    setButtonPMCount(true)
  }
  const selectAll = () => {
    setButtonAMCount(false)
    setButtonAllCount(true)
    setButtonPMCount(false)
  }
  const dispatch = useAppDispatch()
  const dataHandler = useAppSelector((state) => state.consultationPage.data)
  const [errorDate, setErrorDate] = useState(false)
  const [errorTime, setErrorTime] = useState(false)
  const handle = () => {
    if (dataHandler.day_reception !== null && dataHandler.selectTime !== null) {
      dispatch(consultationActive(3))
      dispatch(changeTitle({ id: 2, value: `${dataHandler.selectDayForTitle} ${dataHandler.selectTimeForTotal}` }))
      dispatch(mobileState({ id: 3, value: true }))
    }
    if (dataHandler.day_reception === null && dataHandler.selectTime === null) {
      setErrorDate(true)
      setErrorTime(true)
    }
    if (dataHandler.day_reception !== null && dataHandler.selectTime === null) {
      setErrorDate(false)
      setErrorTime(true)
    }
    if (dataHandler.day_reception === null && dataHandler.selectTime !== null) {
      setErrorDate(true)
      setErrorTime(false)
    }
  }
  const [select, setSelect] = useState(null)
  const [time, showTime] = useState(false)

  useEffect(() => {
    dispatch(
      getConsultationCalendar({
        start_date: daysArray[0].format('YYYY-MM-DD'),
        end_date: daysArray[41].format('YYYY-MM-DD'),
        doctor: '2',
      }),
    )
  }, [])
  const arrAvailableDate = useAppSelector((state) => state.consultationCalendar.data)
  const newArr = arrAvailableDate.filter((item) => item.is_available === true)
  const newArrAM = newArr.filter(
    (item) => item.receptions[0].is_available !== false && item.receptions[1].is_available !== false,
  )
  const newArrPM = newArr.filter(
    (item) => item.receptions[3].is_available !== false && item.receptions[4].is_available !== false,
  )

  const availebleDate = (currentDay) => {
    if (buttonAllCount) {
      return newArr.includes(newArr.find((el) => el.day === currentDay))
    } else if (buttonAMCount) {
      return newArrAM.includes(newArrAM.find((el) => el.day === currentDay))
    } else if (buttonPMCount) {
      return newArrPM.includes(newArrPM.find((el) => el.day === currentDay))
    }
  }
  const availebleTime = () => {
    return newArr.find((el) => moment(el.day, 'YYYY-MM-DD').format('DDMMYYYY') === select)
  }
  const { width } = useWindowSize()
  const desktop = width >= 829
  const [showFilter, setShowFilter] = useState(false)
  const [useFilter, setUseFilter] = useState(false)
  const pagination = useAppSelector((state) => state.choieConsultationPage.list)
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])
  return (
    <div className={`${Styles.main__content} ${pagination[2].mobile && Styles.reference__mobile}`}>
      {!desktop && (
        <DrawerPanel width='100%' anchor='left' open={showFilter} onClose={() => setShowFilter((isOpen) => !isOpen)}>
          <FilterDrawerAppointment
            setShowFilter={setShowFilter}
            newArr={newArr}
            newArrAM={newArrAM}
            newArrPM={newArrPM}
            selectAM={selectAM}
            selectPM={selectPM}
            selectAll={selectAll}
            setUseFilter={setUseFilter}
            buttonAllCount={buttonAllCount}
            buttonAMCount={buttonAMCount}
            buttonPMCount={buttonPMCount}
          />
        </DrawerPanel>
      )}
      <MobileHeader
        title=' Дата и время'
        onClick={() => {
          dispatch(mobileState({ id: 2, value: false }))
          dispatch(mobileStatePagination(false))
        }}
      />
      {!desktop && (
        <div className={Styles.text__container}>
          <h1 className={Styles.title}>Выберите дату и время</h1>
          <p className={Styles.text__wrap}>
            <i className={Styles.dot}>{}</i>— cвободные записи
          </p>
        </div>
      )}
      <div className={Styles.buttons__wrapper}>
        <div className={`${Styles} ${Styles.button__pagination}`}>
          <button onClick={prevHandler} className={Styles.button__prev}>
            <img src={arrow} alt='arrow' />
          </button>
          <div className={Styles.text}>{today.format('MMMM')}</div>
          <button onClick={nextHandler} className={Styles.button__next}>
            <img src={arrow} alt='arrow' />
          </button>
        </div>
        <hr className={Styles.hr} />
        <div className={Styles.buttons__filter_container}>
          <button
            onClick={selectAll}
            className={buttonAllCount ? `${Styles.button} ${Styles.button_active}` : Styles.button}
          >
            Любое время<span className={Styles.count}>{newArr.length}</span>
          </button>
          <button
            onClick={selectAM}
            className={buttonAMCount ? `${Styles.button} ${Styles.button_active}` : Styles.button}
          >
            08:00 – 13:00<span className={Styles.count}>{newArrAM.length}</span>
          </button>
          <button
            onClick={selectPM}
            className={buttonPMCount ? `${Styles.button} ${Styles.button_active}` : Styles.button}
          >
            14:00 – 20:00<span className={Styles.count}>{newArrPM.length}</span>
          </button>
        </div>
        <button className={Styles.button__filter} onClick={() => setShowFilter(true)}>
          {useFilter && <span className={Styles.button__filter_active} />}
          <img src={filter} alt='filter' />
        </button>
      </div>
      <div className={Styles.container}>
        <div className={Styles.right}>
          <div className={Styles.content}>
            <div className={Styles.calendar__container}>
              {[...Array(7)].map((_, i) => (
                <DayTitle
                  key={i}
                  value={moment()
                    .day(i + 1)
                    .format('ddd')}
                />
              ))}
              {daysArray.map((dayItem) => (
                <Day
                  isToday={isToday(dayItem)}
                  isAvailable={availebleDate(dayItem.format('YYYY-MM-DD'))}
                  isCurrentMonth={isCurrentMonth(dayItem)}
                  key={dayItem.format('DDMMYYYY')}
                  value={
                    isCurrentMonth(dayItem)
                      ? dayItem.format('D')
                      : desktop
                      ? `${dayItem.format('D')} ${dayItem.format('MMM').replace(/[.]$/, '')}`
                      : dayItem.format('D')
                  }
                  onClick={() => {
                    setSelect(dayItem.format('DDMMYYYY'))
                    dispatch(
                      setData({
                        key: 'selectDayForTitle',
                        value: `${dayItem.format('D MMMM')}, ${dayItem.format('dddd')}`,
                      }),
                    )
                    dispatch(setData({ key: 'selectDay', value: dayItem.format('D MMMM') }))
                    dispatch(setData({ key: 'day_reception', value: dayItem.format('YYYY-MM-DD') }))
                    showTime(true)
                  }}
                  className={select === dayItem.format('DDMMYYYY')}
                />
              ))}
            </div>
          </div>
          {!desktop && (
            <div className={Styles.sidebar_mobile}>
              {time ? <SelectTime timesArr={availebleTime()} /> : null}
              <Total consultation={false} date={false} isBorder={false} />
              <Mark />
            </div>
          )}
          <div className={`${Styles.buttons__container} ${Styles.button_mob}`}>
            <div className={Styles.buttons}>
              <ButtonColor value='Перейти к вводу личных данных' onClick={handle} type='submit' />
              <div className={Styles.error__handler}>
                {errorDate && errorTime && 'Выберите дату и время приема'}
                {errorDate && !errorTime && 'Выберите дату приема'}
                {!errorDate && errorTime && 'Выберите время приема'}
              </div>
            </div>
          </div>
        </div>
        {desktop && (
          <Sidebar>
            {time ? <SelectTime timesArr={availebleTime()} /> : null}
            <Total consultation={false} date={false} isBorder={false} />
            <Mark />
          </Sidebar>
        )}
      </div>
    </div>
  )
}
