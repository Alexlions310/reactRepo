import React, { useEffect, useState } from 'react'
import Styles from './style.module.scss'

import breakfastIcon from '@icons/breakfast.svg'
import dinnerIcon from '@icons/dinner.svg'
import supperIcon from '@icons/supper.svg'
import foodIcon from '@icons/food.svg'

export const DoctorNutrition = () => {
  const arr = [
    { id: 1, img: breakfastIcon, title: 'Завтрак' },
    { id: 2, img: dinnerIcon, title: 'Обед' },
    { id: 3, img: supperIcon, title: 'Ужин' },
    { id: 4, img: foodIcon, title: 'Продукты' },
  ]

  const [activeArr, setActiveArr] = useState({ id: null, img: null, title: '' })

  useEffect(() => {
    setActiveArr(arr[0])
  }, [])

  return (
    <>
      <ul className={Styles.list}>
        {arr?.map((item) => (
          <li
            key={item.id}
            className={activeArr.id === item.id ? `${Styles.term} ${Styles.term_active}` : `${Styles.term}`}
            onClick={() => setActiveArr(item)}
          >
            <img className={Styles.icon} src={item.img} alt='Иконка' />
            <span className={Styles.designation}>{item.title}</span>
          </li>
        ))}
      </ul>
      <div className={Styles.description}>
        <span className={Styles.title}>Белково-жировой завтрак</span>
        <ul className={Styles.enumeration}>
          <li>
            <i>{}</i>
            <span>яйца</span>
          </li>
          <li>
            <i>{}</i> <span>авакадо</span>
          </li>
          <li>
            <i>{}</i>
            <span>запеканка творожная на 5% твороге</span>
          </li>
          <li>
            <i>{}</i>
            <span>йогурт без сахара</span>
          </li>
        </ul>
        <div className={Styles.obligatory}>
          <i className={Styles.asterisk}>
            <span>*</span>
          </i>
          <span className={Styles.extra}>Стакан очень теплой воды через 15 минут после пробуждения</span>
        </div>
      </div>
    </>
  )
}
