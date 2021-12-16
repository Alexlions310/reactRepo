import React from 'react'
import { HowItWorksHeadings } from '../components'
import Lottie from 'react-lottie'
import Styles from './style.module.scss'
import zapisNaPriem from '../../lotties/zapisNaPriem.json'
import linePic from '@icons/howItWorks1-2.svg'

export const HowItWorks1 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: zapisNaPriem,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <div className={Styles.mainWrapper} id='howItWorks'>
      <h1 className={Styles.Main_heading}>Как это работает?</h1>
      <div className={Styles.howItworks1Container}>
        <div className={Styles.leftSide}>
          <HowItWorksHeadings headingNum='01' headingTxt='Запись на консультацию' />
          <p className={Styles.leftSide__P}>
            Выберите консультацию и расскажите <br />
            о своих проблемах.Врач ознакомится <br />с вашими данными до начала
          </p>
        </div>
        <div className={Styles.rightSide}>
          <span className={Styles.rightSide__lottie}>
            <Lottie options={defaultOptions} height='100%' width='100%' />
          </span>
        </div>
        <img className={Styles.leftSide__img} src={linePic} alt='Линия, соединяющая первый заголовок и второй' />
        <div className={Styles.rightSide__circle} />
      </div>
    </div>
  )
}
