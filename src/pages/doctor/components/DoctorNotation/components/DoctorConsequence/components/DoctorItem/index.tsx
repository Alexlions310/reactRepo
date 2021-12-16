import React from 'react'
import Styles from './style.module.scss'

export const DoctorItem = ({ children }) => {
  return <span className={Styles.item}>{children}</span>
}
