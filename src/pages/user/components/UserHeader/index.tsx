import React from 'react'
import { SearchInput } from '@components/SearchInput'
import basket from '@icons/basket.png'
import Styles from './style.module.scss'

const title = 'Диагнозы'

export const UserHeader = (props) => {
  return (
    <div className={Styles.header}>
      {title}
      <div className={Styles.buttons__container}>
        <SearchInput text='' />
        <button className={Styles.filter_button} type='button' onClick={props.openFilter}>
          Фильтры
        </button>
        <button className={Styles.basket_btn} type='button' onClick={props.openModal}>
          <img className={Styles.basket_icon} src={basket} alt='basket' />
        </button>
      </div>
    </div>
  )
}
