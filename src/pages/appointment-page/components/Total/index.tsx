import { QuestionIcon } from '@components/ui/QuestionIcon'
import React from 'react'
import Styles from './style.module.scss'
import { BorderLine } from '@components/ui/BorderLine'
import { useAppSelector } from '@app/redux/hooks'

export const Total = (props) => {
  const dataHandler = useAppSelector((state) => state.consultationPage.data)
  const data = useAppSelector((state) => state.consultationsList.data)
  const idConsultation = useAppSelector((state) => state.consultationsList.selectConsultationById)
  const selectConsultation = data.find((item) => item.id === idConsultation)
  const total = Number(dataHandler.priceType) + Number(dataHandler.priceWay)

  return (
    <div className={Styles.container}>
      <h3 className={Styles.title}>Запись на прием</h3>
      {props.consultation && (
        <div className={Styles.item}>
          <h6 className={Styles.subtitle}>Консультация</h6>
          <span className={Styles.item__title}>{dataHandler.title}</span>
        </div>
      )}
      {props.date && (
        <div className={Styles.item}>
          <h6 className={Styles.subtitle}>Дата и время приема</h6>
          <span className={Styles.item__title}>{`${dataHandler.selectDay} ${dataHandler.selectTimeForTotal}`}</span>
        </div>
      )}
      {props.place && !dataHandler.is_online && (
        <div className={Styles.item}>
          <h6 className={Styles.subtitle}>Место приема</h6>
          <span className={Styles.item__title}>{dataHandler.address}</span>
        </div>
      )}
      {props.defaultPrice ? (
        <ul className={Styles.wrap}>
          <li>
            <span className={Styles.item__title}>
              Стоимость
              <QuestionIcon
                text='Точная стоимость появится после выбора типа приема и консультации'
                className={Styles.question}
              />
            </span>
            <span className={Styles.item__price}>от 2 500 ₽</span>
          </li>
        </ul>
      ) : (
        <>
          {props.isBorder && <BorderLine />}
          <ul className={Styles.wrap}>
            <li>
              {dataHandler.consultation_type ? (
                <span className={Styles.item__title}>{selectConsultation.types[0].title}</span>
              ) : (
                <span className={Styles.item__title}>{selectConsultation.types[1].title}</span>
              )}

              <span className={Styles.item__price}>{dataHandler.priceType} ₽</span>
            </li>
            <li>
              {dataHandler.is_online ? (
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

              <span className={Styles.item__price}>{dataHandler.priceWay} ₽</span>
            </li>
          </ul>
        </>
      )}

      {!props.defaultPrice && (
        <>
          <BorderLine />
          <ul className={Styles.wrap}>
            <li>
              <span className={Styles.total__item}>Итого</span>
              <span className={Styles.total__price}>{total} ₽</span>
            </li>
          </ul>
        </>
      )}
    </div>
  )
}
