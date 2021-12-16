import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import React, { useState } from 'react'
import { Time } from '../Time'
import Styles from './style.module.scss'
import { setData } from '../../../../redux/consultationSlicer'

export const SelectTime = (props) => {
  const dataHandler = useAppSelector((state) => state.consultationPage.data)
  const dispatch = useAppDispatch()
  const [isActive, setIsActive] = useState(null)
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <h6 className={Styles.title}>Выберите время</h6>
        <div className={Styles.tip}>{dataHandler.selectDay}</div>
      </div>
      <div className={Styles.time__container}>
        {props.timesArr.receptions.map((item) => (
          <Time
            id={item.id}
            key={item.id}
            value={item.time}
            onClick={(e) => {
              setIsActive(Number(e.target.id))
              dispatch(setData({ key: 'selectTime', value: e.target.id }))
              dispatch(setData({ key: 'selectTimeForTotal', value: e.target.innerText }))
            }}
            isActive={isActive === item.id}
            disabled={item.is_available === false}
          />
        ))}
      </div>
    </div>
  )
}
