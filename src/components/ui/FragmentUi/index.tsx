import React from 'react'
import Styles from './style.module.scss'

export const FragmentUi = (props) => {
  return (
    <div className={Styles.wrap}>
      <img className={Styles.img} src={props.src} alt='icon' />
      <div className={Styles.desc}>
        <div className={Styles.text}>{props.text}</div>
        <div className={Styles.count}>{props.count}</div>
      </div>
    </div>
  )
}
