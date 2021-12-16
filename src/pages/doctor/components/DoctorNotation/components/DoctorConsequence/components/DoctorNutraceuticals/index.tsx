import React from 'react'
import Styles from './style.module.scss'

import { DoctorItem } from '../DoctorItem'

export const DoctorNutraceuticals = () => {
  return (
    <>
      <div className={Styles.block}>
        <span className={Styles.title}>Каждый день</span>
        <ul className={Styles.list}>
          <DoctorItem>Витамин Д 10000 МЕ</DoctorItem>
          <DoctorItem>Омега 3 – NFO</DoctorItem>
          <DoctorItem>Фолат Солгар 400 мкг</DoctorItem>
          <DoctorItem>АрмоЛипид</DoctorItem>
          <DoctorItem>Хрома пиколинат Солгар</DoctorItem>
          <DoctorItem>Артишок</DoctorItem>
          <DoctorItem>Магния цитрат Солгар 200 мг</DoctorItem>
        </ul>
      </div>
      <div className={Styles.block}>
        <span className={Styles.title}>Через день</span>
        <ul className={Styles.list}>
          <DoctorItem>Нейробион 3,0 в/м 2</DoctorItem>
        </ul>
      </div>
      <div className={Styles.block}>
        <span className={Styles.title}>2 раза в неделю</span>
        <ul className={Styles.list}>
          <DoctorItem>Нейробион 3,0 в/м 2</DoctorItem>
          <DoctorItem>Магния цитрат Солгар 200 мг</DoctorItem>
        </ul>
      </div>
    </>
  )
}
