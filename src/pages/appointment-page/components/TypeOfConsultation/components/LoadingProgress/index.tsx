import React from 'react'
import Styles from './style.module.scss'

export const LoadingProgress = (props) => {
  return (
    <div className={Styles.load__wrapper}>
      <div className={Styles.load__status}>
        <div className={Styles.load__text}>
          <span>3</span> из <span>3</span> загружено
        </div>
        <button className={`${Styles.load__text} ${Styles.load__button}`}>Отменить</button>
      </div>
      <div className={Styles.load__item}>
        <div className={Styles.item__info}>
          <img
            className={Styles.item__img}
            src={props.file ? URL.createObjectURL(props.file) : null}
            alt={props.file ? props.file.name : null}
          />
          <div className={Styles.item__desc}>
            <h6 className={Styles.item__name}>ngasd.png</h6>
            <p className={Styles.item__weight}>17 KB</p>
          </div>
        </div>
        <div className={Styles.item__load}>50%</div>
      </div>
    </div>
  )
}
