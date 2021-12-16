import React from 'react'
import Styles from './style.module.scss'
import { ButtonArrow } from '@components/ui/ButtonArrow'

export const CardContainer = (props) => {
  return (
    <div onClick={props.onClick} className={Styles.reference__container}>
      <header className={Styles.reference__header}>
        <img src={props.src} className={Styles.reference__img} alt='logo' />
        <h4 className={Styles.reference__title}>{props.title}</h4>
      </header>
      <div className={Styles.reference__content}>{props.content}</div>
      <ButtonArrow />
    </div>
  )
}
