import React from 'react'
import Styles from './style.module.scss'
import timeIcon from '@icons/tariffs5.svg'
import queryIcon from '@icons/tariffs4.svg'
import nextBtn from '@icons/tariffs6.svg'
export const Tariffs = (props) => {
  return (
    <div className={Styles.tariffs_container}>
      <div className={Styles.tariffs_container__heading}>
        <img src={props.mainIcon} alt='значок' className={Styles.tariffs_container__MainIcon} />
        <p className={Styles.tariffs_container__p}>{props.headingTxt}</p>
      </div>
      <div className={Styles.tariffs_container__meeting_time}>
        <img
          className={Styles.tariffs_container__clock_icon}
          src={timeIcon}
          alt='значок часов'
          style={props.ageRestriction === undefined ? { marginTop: '8px' } : { marginTop: '4px' }}
        />
        <p className={Styles.tariffs_container__time}>45-60 минут</p>
        <p
          className={Styles.tariffs_container__age_restriction}
          style={props.ageRestriction === undefined ? { display: 'none' } : { display: 'block' }}
        >
          Для людей от 30 лет
        </p>
      </div>
      <p className={Styles.tariffs_container__main_p}>{props.mainP}</p>
      <div className={Styles.tariffs_container__footer}>
        <p className={Styles.tariffs_container__footer_price}>от 2 500 ₽</p>
        <img src={queryIcon} className={Styles.tariffs_container__footer_query} alt='значок запроса' />
        <a
          href='#'
          onClick={(event) => {
            event.preventDefault()
          }}
          className={Styles.tariffs_container__nextBtn}
        >
          <img src={nextBtn} alt='следующая кнопка' />
        </a>
      </div>
    </div>
  )
}
