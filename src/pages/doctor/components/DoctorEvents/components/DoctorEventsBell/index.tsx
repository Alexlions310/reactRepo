import React from 'react'
import Styles from './style.module.scss'

import bellIcon from '@icons/bell-event.svg'

export const DoctorEventsBell: React.FC = () => {
  return (
    <div className={Styles.event}>
      <div className={Styles.content}>
        <div className={Styles.header}>
          <i className={Styles.icon}>
            <img src={bellIcon} alt='Иконка' />
          </i>
          <span className={Styles.title}>Новая запись на прием</span>
        </div>
        <div className={Styles.body}>
          <div className={Styles.wrapper}>
            <div className={Styles.block}>
              <div className={Styles.description}>
                <span className={Styles.time}>11:00</span>
                <span className={Styles.method}>Личный прием</span>
              </div>
              <a className={Styles.link} href='/'>
                {}
              </a>
            </div>
            <div className={Styles.patient}>
              <div className={Styles.info}>
                <div className={Styles.cap}>
                  <span className={Styles.abbreviation}>ЛС</span>
                </div>
                <span className={Styles.name}>Лазарченко Сергей К.</span>
              </div>
              <span className={Styles.appointment}>Прием витаминов и БАД — врачебный контроль</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
