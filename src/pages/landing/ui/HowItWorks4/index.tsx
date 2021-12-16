import React from 'react'
import { HowItWorksHeadings } from '../components'
import Lottie from 'react-lottie'
import { defaultOptions } from '../../lotties'
import privetAnastasiya from '../../lotties/privetAnastasiya.json'
import Styles from './style.module.scss'

export const HowItWorks4 = () => {
  const defaultOptions1 = {
    ...defaultOptions,
    animationData: privetAnastasiya,
  }
  return (
    <div className={Styles.howItworks4Container}>
      <div className={Styles.leftSide}>
        <HowItWorksHeadings headingNum='04' headingTxt='После первого приема' />
        <p className={Styles.leftSide__P}>
          На основе заключения врача мы <br />
          формируем ваш главный экран и подробно
          <br />
          показываем все рекомендации.
          <br /> <br /> Также мы будем напоминать <br /> о прохождении анализов и подсказывать
          <br />о предстоящих записях на прием
        </p>
      </div>
      <div className={Styles.rightSide}>
        <span className={Styles.rightSide__lottie}>
          <Lottie options={defaultOptions1} height='100%' width='100%' />
        </span>
      </div>
      <div className={Styles.rightSide__circle} />
    </div>
  )
}
