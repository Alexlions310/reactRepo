import React from 'react'
import Styles from './style.module.scss'
import { BorderLine } from '../../../../ui/BorderLine'
export const LifeStyle = (props) => {
  return (
    <div className={Styles.mealtime__container}>
      {props.list.map((item) => (
        <div key={item.id}>
          <h5 className={Styles.title}>{item.title}</h5>
          <div className={Styles.time}>{item.time}</div>
          <BorderLine />
        </div>
      ))}
    </div>
  )
}
