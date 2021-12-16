import React, { useEffect } from 'react'
import Styles from './style.module.scss'

import { CardContainer } from '@components/ui/CardContainer'
import clock from '@icons/clock.svg'
import { Price } from '@components/ui/Price'
import { QuestionIcon } from '@components/ui/QuestionIcon'
import warning from '@icons/warning.svg'
import { BorderLine } from '@components/ui/BorderLine'
import {
  consultationActive,
  changeTitle,
  mobileState,
  mobileStatePagination,
} from '../../redux/choiсeConsultationSlicer'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setData } from '../../redux/consultationSlicer'
import { getConsultationsList, getDataById } from '../../redux/consultationsListSlicer'
import { formatPrice } from '@helpers/formatPrice'
import moment from 'moment'
import { Tag } from '../../../../components/ui/Tag'
import { MobileHeader } from '../MobileHeader'
import { Spinner } from '@components/Spinner'

export const ConsultationFull = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getConsultationsList())
  }, [])
  const data = useAppSelector((state) => state.consultationsList.data)
  console.log(data)
  const status = useAppSelector((state) => state.consultationsList.status)
  const pagination = useAppSelector((state) => state.choieConsultationPage.list)
  const dateConvert = (day) => {
    return moment(day, 'YYYY-MM-DD').format('DD MMMM')
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])
  return (
    <div className={`${Styles.reference__container} ${pagination[0].mobile && Styles.reference__mobile}`}>
      <MobileHeader
        title='Выбор консультации'
        onClick={() => {
          dispatch(mobileState({ id: 0, value: false }))
          dispatch(mobileStatePagination(false))
        }}
      />
      {status === 'success' &&
        data.map((item) => (
          <CardContainer
            onClick={() => {
              dispatch(setData({ key: 'title', value: item.title }))
              dispatch(consultationActive(1))
              dispatch(changeTitle({ id: 0, value: item.title }))
              dispatch(getDataById(item.id))
              dispatch(mobileState({ id: 1, value: true }))
            }}
            title={item.title}
            src={item.image}
            key={item.id}
            content={
              <>
                <div className={Styles.wrapper}>
                  <img src={clock} className={Styles.icon} alt='clock' />
                  <div className={Styles.duration}>{data[0].types[0].duration}</div>
                  {item.mark && <div className={Styles.mark}>{item.mark}</div>}
                </div>
                <p className={Styles.text}>{item.description}</p>
                <BorderLine />
                <div className={Styles.reception}>Ближайший прием {dateConvert(item.available_time.day)}</div>
                {item.available_time.receptions.map((tag, id) => (
                  <span key={id}>
                    <Tag value={tag} />
                  </span>
                ))}
                {item.warning ? (
                  <>
                    <div className={Styles.warning}>
                      <img src={warning} className={Styles.warning__img} alt='warning' />
                      {item.warning}
                    </div>
                  </>
                ) : null}
                <div className={Styles.price}>
                  <Price value={formatPrice(data[0].types[0].price)} />
                  <QuestionIcon />
                </div>
              </>
            }
          />
        ))}
      {status === 'error' && <div>Ошибка</div>}
      {status === 'loading' && <Spinner />}
    </div>
  )
}
