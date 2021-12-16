import React, { useEffect, useState } from 'react'
import Styles from './style.module.scss'

import { DoctorNutrition } from './components/DoctorNutrition'
import { DoctorLife } from './components/DoctorLife'
import { DoctorNutraceuticals } from './components/DoctorNutraceuticals'
import { DoctorSurveys } from './components/DoctorSurveys'

import createIcon from '@icons/create.svg'

export const DoctorConsequence: React.FC = () => {
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

  return (
    <div className={Styles.consequence}>
      <div className={Styles.header}>
        <div className={Styles.wrap}>
          <span className={Styles.conclusion}>Заключение&nbsp;</span>
          <span className={Styles.date}>от 15 февраля, 2020</span>
        </div>
        <button className={Styles.button}>
          <img src={createIcon} alt='Иконка' />
          <span className={Styles.edit}>Редактировать</span>
        </button>
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
      {activeArray.id === 1 && <DoctorNutrition />}
      {activeArray.id === 2 && <DoctorLife />}
      {activeArray.id === 3 && <DoctorNutraceuticals />}
      {activeArray.id === 4 && <DoctorSurveys />}
    </div>
  )
}
