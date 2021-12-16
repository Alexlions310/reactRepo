import React from 'react'
import { HowItWorksHeadings } from '../components'
import Lottie from 'react-lottie'
import { defaultOptions } from '../../lotties'
import plashka from '../../lotties/plashka.json'
import Styles from './style.module.scss'
import linePic3 from '@icons/howItWorks3-2.png'

export const HowItWorks3 = () => {
  const defaultOptions1 = {
    ...defaultOptions,
    animationData: plashka,
  }

  return (
    <div className={Styles.settingLineStyle}>
      <div className={Styles.howItworks3Container}>
        <div className={Styles.leftSide}>
          <span className={Styles.leftSide__lottie}>
            <Lottie options={defaultOptions1} height='100%' width='100%' />
          </span>
        </div>
        <div className={Styles.rightSide}>
          <HowItWorksHeadings headingNum='03' headingTxt='Заключение от врача' />
          <p className={Styles.rightSide__P}>
            После приема врач сделает для вас заключение <br />
            с рекомендациями по питанию, приему
            <br />
            нутрицевтиков и образу жизни. Также врач
            <br />
            назначит необходимые анализы для
            <br /> следующего приема
          </p>
        </div>
      </div>
      <div className={Styles.leftSide__circle} />
      <img
        className={Styles.settingLineStyle__img}
        src={linePic3}
        alt='линия, соединяющая третий и четвертый заголовки'
      />
    </div>
  )
}
