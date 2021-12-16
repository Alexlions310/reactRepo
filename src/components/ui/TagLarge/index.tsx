import React from 'react'
import Styles from './style.module.scss'

export const TagLarge = (props) => {
  return (
    <span className={Styles.item} onClick={props.addTag}>
      {props.value}
    </span>
  )
}
