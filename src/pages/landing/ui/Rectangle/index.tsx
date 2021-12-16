import React from 'react'
import Lottie from 'react-lottie'
import { defaultOptions } from '../../lotties'
import Styles from './style.module.scss'
import twoGirls from '../../lotties/twoGirls.json'
import plashka from '../../lotties/plashka.json'

export const Rectangle = () => {
  const defaultOptions1 = {
    ...defaultOptions,
    animationData: twoGirls,
  }
  const defaultOptions2 = {
    ...defaultOptions,
    animationData: plashka,
  }
  return (
    <div className={Styles.rectangle}>
      <div className={Styles.leftDiv}>
        <h1 className={Styles.leftDiv__heading}>Помогаем вашему здоровью</h1>
        <ul className={Styles.leftDiv__ul}>
          <li>Консультаци с врачем онлайн и офлайн</li>
          <li>Запись на любое удобное для вас время</li>
          <li>В любом месте с подключением к интернету</li>
          <li>
            Возможность общения с врачем в чате <br /> <span> вне консультации </span>
          </li>
        </ul>
        <button className={Styles.button}>Записаться на прием</button>
      </div>
      <div className={Styles.rightDiv}>
        <Lottie options={defaultOptions1} height='100%' width='100%' />
        <span className={Styles.rightDiv__plashka}>
          <Lottie options={defaultOptions2} height='100%' width='100%' />
        </span>
      </div>
    </div>
  )
}
