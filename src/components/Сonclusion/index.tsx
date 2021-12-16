import React, { useEffect, useState } from 'react'
import Styles from './style.module.scss'

import { DoctorLife } from './components/DoctorLife'
import { DoctorNutraceuticals } from './components/DoctorNutraceuticals'
import { DoctorSurveys } from './components/DoctorSurveys'

import createIcon from '@icons/create.svg'
import viewIcon from '@icons/view.svg'
import moment from 'moment'
import { useAppSelector } from '@app/redux/hooks'
import { Nutrition } from './components/Nutrition'
import { ButtonWithBorder } from '@components/ui/ButtonWithBorder'
import useWindowSize from '@helpers/useWindowSizeHook'
import { SelectComponent } from '@components/SelectComponent'
interface ConclusionData {
  date: any
}
export const Conclusion: React.FC<ConclusionData> = (props) => {
  const array = [
    { id: 1, title: 'Питание' },
    { id: 2, title: 'Образ жизни' },
    { id: 3, title: 'Нутрицевтики' },
    { id: 4, title: 'Обследования' },
  ]

  const [activeArray, setActiveArray] = useState({ id: null, title: '' })

  useEffect(() => {
    setActiveArray(array[0])
  }, [])
  const dateFormat = moment(props.date, 'YYYY-MM-DD').format('D MMMM, YYYY')
  const userRole = useAppSelector((state) => state.auth.user.info.role)
  const { width } = useWindowSize()
  const desktop = width >= 829

  return (
    desktop && (
      <div className={Styles.consequence}>
        <div className={Styles.header}>
          <div className={Styles.wrap}>
            <span className={Styles.conclusion}>Заключение&nbsp;</span>
            <span className={Styles.date}>{`от ${dateFormat}`}</span>
          </div>
          {userRole === 'doctor' && (
            <button className={Styles.button}>
              <img src={createIcon} alt='Иконка' />
              <span className={Styles.edit}>Редактировать</span>
            </button>
          )}
          {userRole === 'patient' && (
            <button className={Styles.button}>
              <img src={viewIcon} alt='Иконка' />
              <span className={Styles.edit}>Смотреть PDF</span>
            </button>
          )}
        </div>

        <ul className={Styles.list}>
          {array?.map((item) => (
            <li
              key={item.id}
              className={activeArray.id === item.id ? `${Styles.item} ${Styles.item_active}` : `${Styles.item}`}
              onClick={() => setActiveArray(item)}
            >
              {item.title}
            </li>
          ))}
        </ul>

        {activeArray.id === 1 && <Nutrition />}
        {activeArray.id === 2 && <DoctorLife />}
        {activeArray.id === 3 && <DoctorNutraceuticals />}
        {activeArray.id === 4 && <DoctorSurveys />}
        {userRole === 'patient' && (
          <div className={Styles.marketing__block}>
            <div>
              <p className={Styles.text}>Всего 5 товаров</p>
              <div className={Styles.prise_container}>
                <span className={Styles.prise_sale}>1 390 ₽</span>
                <span className={Styles.price}>2 390 ₽</span>
              </div>
              <div className={Styles.discount}>– 1 000 ₽</div>
            </div>
            <ButtonWithBorder value='Выбрать товары' />
          </div>
        )}
      </div>
    )
  )
}
