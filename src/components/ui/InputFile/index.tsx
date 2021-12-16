import React from 'react'
import Styles from './style.module.scss'
import paperclip from '@icons/paperclip.svg'
import classNames from 'classnames/bind'

export const InputFile = (props) => {
  const inputStyle = classNames(props.className, {
    [`${Styles.load__button}`]: props.styleButton,
    [`${Styles.load__button_plus}`]: props.styleButtonPlus,
  })
  return (
    <div className={Styles.load__wrap}>
      <input type='file' id='fileid' onChange={props.onChange} />
      <label className={inputStyle} htmlFor='fileid'>
        {props.image && <img src={paperclip} />}
        {props.value}
      </label>
    </div>
  )
}
