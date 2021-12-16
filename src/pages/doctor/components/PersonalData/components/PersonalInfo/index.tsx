import React, { useState } from 'react'
import Styles from './style.module.scss'

import { Logo } from '@components/Logo'

import searchIcon from '@icons/search-icon.svg'
import editIcon from '@icons/edit-round.svg'
import coinIcon from '@icons/coin.svg'
import arrowIcon from '@icons/arrow-mobile.svg'

interface PersonalInfoProps {
  setView: any
}

export const PersonalInfo: React.FC<PersonalInfoProps> = ({ setView }) => {
  const [display] = useState(true)

  return (
    <div className={Styles.profile}>
      <div className={Styles.container}>
        <div className={Styles.header}>
          <Logo />
          <img src={searchIcon} alt='Иконка' />
        </div>
        <div className={Styles.avatar}>
          <div className={Styles.cap}>
            <span className={Styles.abbreviation}>АО</span>
            <img src={editIcon} alt='Иконка' />
          </div>
          <span className={Styles.name}>Анастасия О.</span>
        </div>
        <ul className={Styles.list}>
          <li className={Styles.item}>
            <div className={Styles.wrapper} onClick={() => setView('edit')}>
              <div className={Styles.wrap}>
                <img src={coinIcon} alt='Иконка' />
                <div className={Styles.block}>
                  <span className={Styles.text}>Личные данные</span>
                </div>
              </div>
              <img src={arrowIcon} alt='Иконка' />
            </div>
          </li>
          <li className={Styles.item}>
            {display ? (
              <div className={Styles.wrapper} onClick={() => setView('cancel')}>
                <div className={Styles.wrap}>
                  <img src={coinIcon} alt='Иконка' />
                  <div className={Styles.block}>
                    <span className={Styles.text}>Отменить дни приема</span>
                    <p className={Styles.description}>
                      Вы можете выбрать дни, которые будут недоступны для записи пациентам
                    </p>
                  </div>
                </div>
                <img src={arrowIcon} alt='Иконка' />
              </div>
            ) : (
              <div className={Styles.cancel}>
                <span className={Styles.title}>Прием отменен</span>
                <ul className={Styles.dates}>
                  <li className={Styles.date}>
                    <span className={Styles.period}>14 мая - 15 июня,</span>&nbsp;
                    <span className={Styles.days}>33 дня</span>
                    <button className={Styles.restore}>{}</button>
                  </li>
                  <li className={Styles.date}>
                    <span className={Styles.period}>15 февраля,</span>&nbsp;
                    <span className={Styles.days}>1 день</span>
                    <button className={Styles.restore}>{}</button>
                  </li>
                  <li className={Styles.date}>
                    <span className={Styles.period}>18 февраля - 20 февраля,</span>&nbsp;
                    <span className={Styles.days}>2 дня</span>
                    <button className={Styles.restore}>{}</button>
                  </li>
                </ul>
                <button className={Styles.more} onClick={() => setView('canceled')}>
                  Смотреть еще 4 даты
                </button>
              </div>
            )}
          </li>
        </ul>
      </div>
      <button className={Styles.logout}>Выйти из аккаунта</button>
    </div>
  )
}
