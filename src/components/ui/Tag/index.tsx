import React from 'react'
import Styles from './style.module.scss'

export const Tag = (props) => {
  return <span className={Styles.item}>{props.value}</span>
}
