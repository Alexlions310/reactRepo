import React, { useState } from 'react'
import { useAppSelector } from '@app/redux/hooks'
import Styles from './style.module.scss'

import { DoctorDay } from './components/DoctorDay'
import { DoctorDayMobile } from './components/DoctorDay/components/DoctorDayMobile'
import { DoctorWeek } from './components/DoctorWeek'
import { DoctorWeekMobile } from './components/DoctorWeek/components/DoctorWeekMobile'
import { DoctorMonth } from './components/DoctorMonth'
import { DoctorMonthMobile } from './components/DoctorMonth/components/DoctorMonthMobile'
import { Filter } from '../UI/Filter'

import clockIcon from '@icons/clock-big.svg'
import arrowIcon from '@icons/arrow.svg'
import closeIcon from '@icons/close.svg'
import caretIcon from '@icons/caret.svg'
import calendarIcon from '@icons/calendar.svg'

export const DoctorCabinet: React.FC = () => {
  const [displayNotification, setDisplayNotification] = useState(true)
  const [displaySymbols, setDisplaySymbols] = useState(true)
  const filterIndex = useAppSelector((state) => state.doctor.filterIndex)
  const filter = useAppSelector((state) => state.doctor.filter)

  const closeNotification = () => setDisplayNotification(false)
  const closeSymbols = () => setDisplaySymbols(false)

  return (
    <>
      <div className={Styles.cabinet}>
        <Filter list={['На 1 день', '7 дней', '30 дней']} select={!!true} />
        <>
          {filter[filterIndex] === 'day' && <DoctorDay />}
          {filter[filterIndex] === 'week' && <DoctorWeek />}
          {filter[filterIndex] === 'month' && <DoctorMonth />}
        </>
      </div>
      <div className={`${Styles.cabinet} ${Styles.cabinet_mobile}`}>
        {displayNotification && (
          <div className={Styles.notification}>
            <img src={clockIcon} alt='Иконка' />
            <div className={Styles.block}>
              <span className={Styles.across}>Через 10 минут прием</span>
              <div className={Styles.link}>
                <span className={Styles.text}>Перейти к записи</span>
                <img src={arrowIcon} alt='Иконка' />
              </div>
            </div>
            <img className={Styles.close} src={closeIcon} alt='Иконка' onClick={closeNotification} />
          </div>
        )}
        <div className={Styles.select}>
          <img className={`${Styles.caret} ${Styles.caret_rotate}`} src={caretIcon} alt='Иконка' />
          <div className={Styles.mark}>
            <img src={calendarIcon} alt='Иконка' />
            <span className={Styles.designation}>Сегодня</span>
          </div>
          <img className={Styles.caret} src={caretIcon} alt='Иконка' />
        </div>
        <Filter list={['На 1 день', '7 дней', '30 дней']} />
        <>
          {filter[filterIndex] === 'day' && <DoctorDayMobile />}
          {filter[filterIndex] === 'week' && <DoctorWeekMobile />}
          {filter[filterIndex] === 'month' && <DoctorMonthMobile />}
        </>
        {displaySymbols && (
          <div className={Styles.symbols}>
            <div className={Styles.symbol}>
              <i className={`${Styles.color} ${Styles.color_offline}`}>{}</i>
              <span className={Styles.type}>— личный прием</span>
            </div>
            <div className={Styles.symbol}>
              <i className={`${Styles.color} ${Styles.color_online}`}>{}</i>
              <span className={Styles.type}>— онлайн прием</span>
            </div>
            <img className={Styles.close} src={closeIcon} alt='Иконка' onClick={closeSymbols} />
          </div>
        )}
      </div>
    </>
  )
}
