import React from 'react'
import { HowItWorksHeadings } from '../components'
import Lottie from 'react-lottie'
import { defaultOptions } from '../../lotties'
import Styles from './style.module.scss'
import twoGirls from '../../lotties/twoGirls.json'
import linePic2 from '@icons/howItWorks2-2.png'

export const HowItWorks2 = () => {
  const defaultOptions1 = {
    ...defaultOptions,
    animationData: twoGirls,
  }
  return (
    <div className={Styles.settingLineStyle}>
      <div className={Styles.howItworks2Container}>
        <div className={Styles.leftSide}>
          <HowItWorksHeadings headingNum='02' headingTxt='Посещение приема' />
          <p className={Styles.leftSide__P}>
            Мы предалагаем личный и онлайн прием. <br />
            Онлайн консультация ничем не отличается
            <br />
            от личной.
            <br /> <br /> В день консультации мы отправим вам <br /> ссылку в Zoom
          </p>
        </div>
        <div className={Styles.rightSide}>
          <span className={Styles.rightSide__lottie}>
            <Lottie options={defaultOptions1} height='100%' width='100%' />
          </span>
        </div>
      </div>
      <img className={Styles.settingLineStyle__img} src={linePic2} alt='' />
    </div>
  )
}
