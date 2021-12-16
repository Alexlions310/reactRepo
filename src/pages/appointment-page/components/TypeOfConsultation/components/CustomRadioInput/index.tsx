import React from 'react'
import Styles from './style.module.scss'

export const CustomRadioInput = (props) => {
  return (
    <div className={Styles.custom__input}>
      <input
        type='radio'
        id={props.id}
        onChange={props.onChange}
        name={props.name}
        checked={props.checked}
        value={props.value}
      />
      <label className={`${Styles.label} ${props.error && Styles.label_error}`} htmlFor={props.htmlFor}>
        <h4 className={Styles.title}>
          {props.src && <img src={props.src} className={Styles.img} />}
          {props.title}
        </h4>
        <div className={Styles.price}>
          {props.price}
          {props.price && ' ₽'}
        </div>
        {props.text && <p className={Styles.text}>{props.text}</p>}
        <span className={Styles.mark} />
      </label>
    </div>
  )
}
