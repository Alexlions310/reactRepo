import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { ButtonTransparent } from '@components/ui/ButtonTransparent'
import React, { useEffect, useState } from 'react'
import Styles from './style.module.scss'
import { BorderLine } from '@components/ui/BorderLine'
import useWindowSize from '@helpers/useWindowSizeHook'
import clock from '@icons/clock.svg'
import img from '@icons/consultation1.svg'
import Parser from 'html-react-parser'
import { getAppointmentById } from '../../redux/appointmentByIdSlicer'

export const AppointmentInformation = () => {
  const dispatch = useAppDispatch()
  const { width } = useWindowSize()
  const desktop = width >= 829
  const [visible, setVisible] = useState(false)
  const isVisible = () => {
    setVisible(!visible)
  }
  const dataById = useAppSelector((state) => state.myAppointmentById.dataById)
  console.log(dataById)
  const parser = (str) => {
    if (typeof str === 'string') {
      return Parser(str)
    }
    return null
  }
  const idAppointment = useAppSelector((state) => state.myAppointmentById.selectById)
  useEffect(() => {
    dispatch(getAppointmentById(idAppointment))
  }, [])
  return (
    <>
      <div className={Styles.details__container_main}>
        <header className={Styles.header}>
          <div className={Styles.header__wrap}>
            <img src={img} className={Styles.img} alt='reference' />
            <h4 className={Styles.title__appoimtment}>{dataById?.consultation_type?.direction?.title}</h4>
          </div>

          <div className={Styles.wrapper}>
            <div className={Styles.duration}>
              <img src={clock} alt='clock' />
              {dataById?.consultation_type?.duration}
            </div>
            <div className={Styles.subtitle}>{dataById?.consultation_type?.title}</div>
          </div>
        </header>
        {desktop && <BorderLine />}
        <div className={Styles.container}>
          <div className={Styles.desc}>{parser(dataById?.consultation_type?.small_description)}</div>
          <ButtonTransparent
            styleImg={visible ? `${Styles.arrow_down} ${Styles.arrow_active}` : Styles.arrow_down}
            onClick={isVisible}
            value='Как проходит консультация'
            after
          />
          {visible && <div className={Styles.text}>{Parser(dataById?.consultation_type?.description)}</div>}
        </div>
      </div>
    </>
  )
}
