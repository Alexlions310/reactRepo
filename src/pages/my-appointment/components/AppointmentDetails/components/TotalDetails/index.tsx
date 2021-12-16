import { useAppSelector } from '@app/redux/hooks'
import { BorderLine } from '@components/ui/BorderLine'
import { QuestionIcon } from '@components/ui/QuestionIcon'
import React from 'react'
import Styles from './style.module.scss'

export const TotalDetails = () => {
  const dataById = useAppSelector((state) => state.myAppointmentById.dataById)
  const priceWay = dataById?.is_online ? '0' : '1500'
  const total = Number(dataById?.consultation_type?.price) + Number(priceWay)
  return (
    <div className={Styles.container}>
      <ul className={Styles.wrap}>
        <li>
          <span className={Styles.item__title}>{dataById?.consultation_type?.title}</span>
          <span className={Styles.item__price}>{dataById?.consultation_type?.price} ₽</span>
        </li>
        <li>
          {dataById?.is_online ? (
            <span className={Styles.item__title}>
              Онлайн
              <QuestionIcon
                text='При онлайн приеме вы платите только за консультацию'
                className={Styles.question}
                help={Styles.help}
              />
            </span>
          ) : (
            <span className={Styles.item__title}>
              Лично
              <QuestionIcon text='Стоимость личного приема' className={Styles.question} help={Styles.help} />
            </span>
          )}

          <span className={Styles.item__price}>{priceWay} ₽</span>
        </li>
      </ul>
      <BorderLine />
      <ul className={Styles.wrap}>
        <li>
          <span className={Styles.total__item}>Оплачено</span>
          <span className={Styles.total__price}>{total} ₽</span>
        </li>
      </ul>
    </div>
  )
}
