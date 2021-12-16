import React from 'react'
import Styles from './style.module.scss'

import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { filterChange, filterForward, filterBackward } from '../../../redux/doctorSlicer'

import calendarIcon from '@icons/calendar.svg'
import caretIcon from '@icons/caret.svg'

interface FilterProps {
  list?: any
  select?: any
}

export const Filter: React.FC<FilterProps> = ({ list, select }) => {
  const filterIndex = useAppSelector((state) => state.doctor.filterIndex)
  const filter = useAppSelector((state) => state.doctor.filter)

  const dispatch = useAppDispatch()

  return (
    <div className={Styles.choose}>
      {list && (
        <ul className={Styles.list}>
          {list.map((item, index) => (
            <li
              key={index}
              className={filterIndex === index ? `${Styles.item} ${Styles.item_active}` : `${Styles.item}`}
              onClick={() => dispatch(filterChange(index))}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
      {select && (
        <div className={Styles.select}>
          <div className={Styles.block}>
            <img src={calendarIcon} alt='Иконка' />
            <span className={Styles.designation}>
              {filter[filterIndex] === 'day' && 'Сегодня'}
              {filter[filterIndex] === 'week' && 'Текущая неделя'}
              {filter[filterIndex] === 'month' && 'Текущий месяц'}
            </span>
          </div>
          <div className={Styles.carets}>
            <img
              className={`${Styles.caret} ${Styles.caret_rotate}`}
              onClick={() => dispatch(filterBackward())}
              src={caretIcon}
              alt='Иконка'
            />
            <img className={Styles.caret} onClick={() => dispatch(filterForward())} src={caretIcon} alt='Иконка' />
          </div>
        </div>
      )}
    </div>
  )
}
