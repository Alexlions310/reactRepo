import React from 'react'
import Styles from './style.module.scss'
export const MedServices = (props) => {
  return (
    <div className={Styles.service}>
      <img className={Styles.service__img} src={props.img} alt='медицинские услуги' />
      <p className={Styles.service__p}>{props.paragraph}</p>
    </div>
  )
}
