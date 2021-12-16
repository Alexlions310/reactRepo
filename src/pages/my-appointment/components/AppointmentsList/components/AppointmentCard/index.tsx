import React from 'react'
import Styles from './style.module.scss'
import timeIcon from '@icons/time.svg'
import avatar from '@images/avatar2.png'
import { setShowMainPage } from '../../../../redux/appointmentSlicer'
import { getAppointmentById, setSelectById } from '../../../../redux/appointmentByIdSlicer'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import moment from 'moment'
import { Price } from '@components/ui/Price'

export const AppointmentCard = (props) => {
  const dispatch = useAppDispatch()
  const dateFomat = moment(props.item.day_reception, 'YYYY-MM-DD').format('D MMMM')
  return (
    <>
      {props.item.status === 'planned' && (
        <div
          className={Styles.record}
          onClick={() => {
            dispatch(setSelectById(props.item.id))
            dispatch(setShowMainPage(false))
          }}
        >
          {' '}
          <h2 className={Styles.title__card}>Запись на прием {dateFomat}</h2>
          <div className={`${Styles.header} ${!props.item.is_online && Styles.offline}`}>
            <div className={Styles.notification}>
              <img src={timeIcon} alt='Иконка' />
              <span className={Styles.across}>{props.item.status === 'planned' && 'Через 10 минут'}</span>
            </div>

            <div className={Styles.container}>
              <span className={Styles.time}>{props.item.time_reception}</span>
              <span className={Styles.online}>{props.item.is_online ? 'Онлайн прием' : 'Личный прием'}</span>
            </div>

            {props.item.is_online && <button className={Styles.start}>Подключиться</button>}
          </div>
          <div className={Styles.doctor_wrap}>
            <img className={Styles.img} src={avatar} alt='avatar' />
            <div className={Styles.desc}>
              <h6 className={Styles.name}>{`${props.item.doctor.first_name} ${props.item.doctor.last_name}`}</h6>
              <p className={Styles.text}>{props.item.doctor.specialty}</p>
            </div>
          </div>
          <div className={Styles.block}>
            <span className={Styles.title}>Консультация</span>
            <p className={Styles.description}>{props.item.consultation_type.direction.title}</p>
          </div>
          <div className={Styles.block}>
            <span className={Styles.title}>Стоимость</span>
            <div className={Styles.wrap}>
              <Price value={props.item.consultation_type.price} className={Styles.description} />
              <button className={Styles.link}>{}</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
