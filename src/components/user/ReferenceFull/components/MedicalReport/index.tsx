import React from 'react'
import Styles from './style.module.scss'
import pushPin from '@icons/push-pin.svg'
import arrow from '@icons/arrow-right-large.svg'

export const MedicalReport = () => {
  return (
    <button className={Styles.button}>
      <img src={pushPin} className={Styles.image} alt='' />
      <div className={Styles.desc}>
        <h5 className={Styles.title}>Медицинское заключение</h5>
        <p className={Styles.text}>02.04.2020</p>
      </div>
      <img className={Styles.arrow} src={arrow} alt='arrow' />
    </button>
  )
}
