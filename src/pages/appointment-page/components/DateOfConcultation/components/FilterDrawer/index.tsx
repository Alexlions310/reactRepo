import React, { useState } from 'react'
import Styles from './style.module.scss'
import arrow from '@icons/arrow-large-blue.svg'
import close from '@icons/close-blue.svg'
import { ButtonColor } from '@components/ui/ButtonColor'
export const FilterDrawerAppointment = (props) => {
  const [count, setCount] = useState(props.newArr.length)
  return (
    <div className={Styles.container}>
      <div className={Styles.navigation}>
        <button className={Styles.arrow} onClick={() => props.setShowFilter(false)}>
          <img src={arrow} />
        </button>

        <h3 className={Styles.title}>Фильтры</h3>
        <button className={Styles.close} onClick={() => props.setShowFilter(false)}>
          <img src={close} alt='close' />
        </button>
      </div>
      <div className={Styles.select__container}>
        <h2 className={Styles.title__select}>Время записи</h2>
        <div className={Styles.radio__container}>
          <input
            className={Styles.radio}
            type='radio'
            id='alltime'
            name='selecttime'
            value={props.newArr.length}
            checked={props.buttonAllCount}
            onChange={(e) => {
              setCount(e.target.value)
              props.selectAll()
            }}
          />
          <label htmlFor='alltime'>Любое время</label>
          <span className={Styles.count}>{props.newArr.length}</span>
        </div>
        <div className={Styles.radio__container}>
          <input
            className={Styles.radio}
            type='radio'
            id='amtime'
            name='selecttime'
            value={props.newArrAM.length}
            checked={props.buttonAMCount}
            onChange={(e) => {
              setCount(e.target.value)
              props.selectAM()
            }}
          />
          <label htmlFor='amtime'>08:00 – 13:00</label>
          <span className={Styles.count}>{props.newArrAM.length}</span>
        </div>
        <div className={Styles.radio__container}>
          <input
            className={Styles.radio}
            type='radio'
            id='pmtime'
            name='selecttime'
            value={props.newArrPM.length}
            checked={props.buttonPMCount}
            onChange={(e) => {
              setCount(e.target.value)
              props.selectPM()
            }}
          />
          <label htmlFor='pmtime'>14:00 – 20:00 </label>
          <span className={Styles.count}>{props.newArrPM.length}</span>
        </div>
      </div>
      <div className={Styles.button__wrap}>
        <ButtonColor
          value={`Показать ${count} записей`}
          onClick={() => {
            props.setShowFilter(false)
            props.setUseFilter(true)
          }}
        />
      </div>
    </div>
  )
}
