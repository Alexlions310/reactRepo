import React from 'react'
import Styles from './style.module.scss'

export const ButtonSecondary = ({ children }) => {
  return <button className={Styles.button}>{children}</button>
}
