import React from 'react'
import Styles from './style.module.scss'

export const CardOnboadging = (props) => {
  return (
    <div className={Styles.card__container}>
      <img className={Styles.card__img} src={props.src} alt='img' />
      <h5 className={Styles.card__title}>{props.title}</h5>
    </div>
  )
}
