import React, { useState } from 'react'
import Styles from './style.module.scss'

import { PatientInfo } from './components/PatientInfo'
import { PatientFiles } from './components/PatientFiles'

import avatarImage from '@images/avatar.png'
import checkIcon from '@icons/check.svg'

export const DoctorChat: React.FC = () => {
  const [view, setView] = useState('info')

  return (
    <>
      {view === 'info' && <PatientInfo setView={setView} />}
      {view === 'files' && <PatientFiles setView={setView} />}
      {view === 'list' && (
        <div className={Styles.chat}>
          <form className={Styles.form}>
            <input className={Styles.input} type='text' name='search' placeholder='Поиск' />
            <button className={Styles.button}>{}</button>
          </form>
          <ul className={Styles.list}>
            <li className={Styles.item}>
              <div className={Styles.avatar}>
                <img className={Styles.image} src={avatarImage} alt='Аватар' />
                <i className={Styles.icon}>{}</i>
              </div>
              <div className={Styles.patient}>
                <div className={Styles.info}>
                  <span className={Styles.name} onClick={() => setView('info')}>
                    Ракова Ольга В.
                  </span>
                  <div className={Styles.wrap}>
                    <img className={Styles.check} src={checkIcon} alt='Статус' />
                    <span className={Styles.time}>14:00</span>
                  </div>
                </div>
                <div className={Styles.block}>
                  <p className={Styles.text}>
                    Здравствуйте, хотела уточнить, как мне лучше принимать нутрицевтики. Днем и вечером ...
                  </p>
                  <span className={Styles.count}>8</span>
                </div>
              </div>
            </li>
            <li className={Styles.item}>
              <div className={Styles.avatar}>
                <img className={Styles.image} src={avatarImage} alt='Аватар' />
                <i className={Styles.icon}>{}</i>
              </div>
              <div className={Styles.patient}>
                <div className={Styles.info}>
                  <span className={Styles.name}>Лазарченко Сергей. К</span>
                  <div className={Styles.wrap}>
                    <img className={Styles.check} src={checkIcon} alt='Статус' />
                    <span className={Styles.time}>14:00</span>
                  </div>
                </div>
                <div className={Styles.block}>
                  <p className={Styles.text}>
                    Здравствуйте, а в какую клинику лучше лучше обратиться для сдачи исследований, кот ...
                  </p>
                  <span className={Styles.count}>12</span>
                </div>
              </div>
            </li>
            <li className={Styles.item}>
              <div className={Styles.avatar}>
                <img className={Styles.image} src={avatarImage} alt='Аватар' />
                <i className={Styles.icon}>{}</i>
              </div>
              <div className={Styles.patient}>
                <div className={Styles.info}>
                  <span className={Styles.name}>Петров Арсений В.</span>
                  <div className={Styles.wrap}>
                    <img className={Styles.check} src={checkIcon} alt='Статус' />
                    <span className={Styles.time}>Суббота</span>
                  </div>
                </div>
                <div className={Styles.block}>
                  <p className={Styles.text}>Арсений, добрый день. Конечно можно</p>
                  <span className={Styles.count}>12</span>
                </div>
              </div>
            </li>
            <li className={Styles.item}>
              <div className={Styles.avatar}>
                <img className={Styles.image} src={avatarImage} alt='Аватар' />
                <i className={Styles.icon}>{}</i>
              </div>
              <div className={Styles.patient}>
                <div className={Styles.info}>
                  <span className={Styles.name}>Серова Валентина В.</span>
                  <div className={Styles.wrap}>
                    <img className={Styles.check} src={checkIcon} alt='Статус' />
                    <span className={Styles.time}>Воскресенье</span>
                  </div>
                </div>
                <div className={Styles.block}>
                  <p className={Styles.text}>
                    Валентина, здравствуйте. Отвечаю на ваш вопрос, принимать лучше не позже, чем за 30 минут до ...
                  </p>
                  <span className={Styles.count}>8</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
