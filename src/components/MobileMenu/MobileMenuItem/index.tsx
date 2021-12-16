import React from 'react'
import Styles from './style.module.scss'

export const MobileMenuItem = ({ icon, text, onClick }) => {
  return (
    <div className={Styles.item} onClick={onClick}>
      <img className={Styles.icon} src={icon} alt='иконка' />
      <p className={Styles.text}>{text}</p>
    </div>
  )
}
