import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setDataAppointment, setDateAppointment, createAppointment } from '../../../../redux/doctorSlicer'
import { formateDate, formateDateShort, formateDateDay } from '../../../../../../utils/formateDate'
import Styles from './style.module.scss'

import { Calendar } from '../../../UI/Calendar'
import { InputRadio } from '../../../UI/InputRadio'

import caretIcon from '@icons/caret.svg'

interface RecordingSetupProps {
  completeRecord: any
}

export const RecordingSetup: React.FC<RecordingSetupProps> = ({ completeRecord }) => {
  const dispatch = useAppDispatch()
  const listConsultationDirection = useAppSelector((state) => state.doctor.listConsultationDirection)
  const dataAppointment = useAppSelector((state) => state.doctor.dataAppointment)
  const [selectedDate, setSelectedDate] = useState(null)
  const [formatedDate, setFormatedDate] = useState(null)
  const [formatedDateShort, setFormatedDateShort] = useState(null)
  const [formatedDateDay, setDormatedDateDay] = useState(null)
  const [timeAppointment, setTimeAppointment] = useState(null)
  const [selectedDirection, setSelectedDirection] = useState(listConsultationDirection[0])
  const [displaySelection, setDisplaySelection] = useState(false)

  const selectDay = (date) => {
    setSelectedDate(date)
    dispatch(setDataAppointment({ ...dataAppointment, day_reception: date }))
  }

  const selectTime = (event) => {
    setTimeAppointment(event.target.value)
    dispatch(setDataAppointment({ ...dataAppointment, time_reception: event.target.value }))
  }

  const toggleSelection = () => setDisplaySelection((prev) => !prev)

  const selectDirection = (direction) => {
    setSelectedDirection(direction)
    // dispatch(setDataAppointment({...dataAppointment, direction}))
    toggleSelection()
  }

  const selectType = (event) =>
    dispatch(setDataAppointment({ ...dataAppointment, consultation_type: Number(event.target.value) }))

  const addAppointment = () => {
    dispatch(createAppointment(dataAppointment))
    dispatch(setDateAppointment(`${formatedDateShort}, ${formatedDateDay}, ${timeAppointment}`))
    completeRecord()
  }

  useEffect(() => {
    const date = formateDate(selectedDate)
    const dateShort = formateDateShort(selectedDate)
    const dateDay = formateDateDay(selectedDate)

    setFormatedDate(date)
    setFormatedDateShort(dateShort)
    setDormatedDateDay(dateDay)
  }, [selectedDate])

  return (
    <div className={Styles.container}>
      <Calendar selectDay={selectDay} />
      {selectedDate && (
        <div className={Styles.oneday}>
          {new Date().getDate() === new Date(selectedDate).getDate() ? (
            <span className={Styles.today}>сегодня, {formatedDate}</span>
          ) : (
            <span className={Styles.today}>{formatedDate}</span>
          )}
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
              <InputRadio className={Styles.inputDate} onChange={selectTime} name='date' value='08:00' />
              <span className={Styles.time}>08:00</span>
            </label>
            <label className={`${Styles.visit} ${Styles.visit_selected}`}>
              <InputRadio className={Styles.inputDate} onChange={selectTime} name='date' value='09:00' />
              <span className={Styles.time}>08:00</span>
            </label>
            <label className={Styles.visit}>
              <InputRadio className={Styles.inputDate} onChange={selectTime} name='date' value='10:00' />
              <span className={Styles.time}>08:00</span>
            </label>
          </div>
        </div>
      )}
      <div className={Styles.content}>
        <form className={Styles.form}>
          <div className={Styles.block}>
            <span className={Styles.field}>Выберите направление консультации</span>
            <div className={Styles.select}>
              <div className={Styles.row} onClick={toggleSelection}>
                <span className={Styles.title}>{selectedDirection.title}</span>
                <button className={Styles.caret}>
                  <img
                    className={displaySelection ? `${Styles.arrow} ${Styles.icon_arrow}` : `${Styles.arrow}`}
                    src={caretIcon}
                    alt='Иконка'
                  />
                </button>
              </div>
              {displaySelection && (
                <div className={Styles.selection}>
                  {listConsultationDirection.map((option) => (
                    <span key={option.id} className={Styles.option} onClick={() => selectDirection(option)}>
                      {option.title}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className={Styles.block}>
            <span className={Styles.field}>Выберите тип консультации</span>
            <div className={Styles.inputs}>
              <label className={Styles.label}>
                Первичная
                <InputRadio className={Styles.inputType} onChange={selectType} name='type' value={1} />
              </label>
              <label className={Styles.label}>
                Вторичная
                <InputRadio className={Styles.inputType} onChange={selectType} name='type' value={2} />
              </label>
            </div>
          </div>
        </form>
      </div>
      <div className={Styles.confirm}>
        <div className={Styles.denomination}>
          {selectedDate ? (
            <div className={Styles.choosed}>
              <span>Запись на прием</span>
              <span>
                {formatedDateShort}, {formatedDateDay}, {timeAppointment}
              </span>
            </div>
          ) : (
            <div className={Styles.choosed}>
              <span>Запись на прием</span>
              <span>выберите дату</span>
            </div>
          )}
        </div>
        <button className={Styles.revoke} onClick={addAppointment}>
          Записать
        </button>
      </div>
    </div>
  )
}
