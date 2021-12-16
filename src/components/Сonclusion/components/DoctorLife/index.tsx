import React from 'react'
import Styles from './style.module.scss'

import sleepImage from '@images/sleep.png'
import workoutImage from '@images/workout.png'
import yogaImage from '@images/yoga.png'
export const DoctorLife = () => {
  return (
    <>
      <ul className={Styles.list}>
        <li className={Styles.item}>
          <img src={sleepImage} alt='Иконка' />
          <div className={Styles.block}>
            <span className={Styles.title}>Утренняя зарядка</span>
            <span className={Styles.subtitle}>15 минут</span>
          </div>
        </li>
        <li className={Styles.item}>
          <img src={yogaImage} alt='Иконка' />
          <div className={Styles.block}>
            <span className={Styles.title}>Йога</span>
            <span className={Styles.subtitle}>15 минут</span>
          </div>
        </li>
        <li className={Styles.item}>
          <img src={workoutImage} alt='Иконка' />
          <div className={Styles.block}>
            <span className={Styles.title}>Тренировка по плаванию</span>
            <span className={Styles.subtitle}>30 минут</span>
          </div>
        </li>
        <li className={Styles.item}>
          <img src={sleepImage} alt='Иконка' />
          <div className={Styles.block}>
            <span className={Styles.title}>Сон</span>
            <span className={Styles.subtitle}>8 часов</span>
          </div>
        </li>
      </ul>
    </>
  )
}
