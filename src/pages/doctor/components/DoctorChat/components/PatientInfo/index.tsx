import React from 'react'
import Styles from './style.module.scss'

import backIcon from '@icons/back-chat.svg'
import avatarImage from '@images/avatar.png'
import searchIcon from '@icons/search-blue.svg'
import clipIcon from '@icons/clip.svg'
import checkIcon from '@icons/check.svg'
import checksIcon from '@icons/checks.svg'

interface PatientInfoProps {
  setView: any
}

export const PatientInfo: React.FC<PatientInfoProps> = ({ setView }) => {
  return (
    <div className={Styles.info}>
      <div className={Styles.header}>
        <button className={Styles.back} onClick={() => setView('list')}>
          <img src={backIcon} alt='Иконка' />
        </button>
        <div className={Styles.content}>
          <div className={Styles.wrap}>
            <div className={Styles.avatar}>
              <img className={Styles.image} src={avatarImage} alt='Аватар' />
              <i className={Styles.icon}>{}</i>
            </div>
            <div className={Styles.data}>
              <span className={Styles.name}>Лазарченко Сергей. К</span>
              <span className={Styles.status}>В сети</span>
            </div>
          </div>
          <div className={Styles.icons}>
            <div className={Styles.item}>
              <img src={searchIcon} alt='Иконка' />
            </div>
            <div className={Styles.item} onClick={() => setView('files')}>
              <img src={clipIcon} alt='Иконка' />
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.body}>
        <div className={Styles.user}>
          <div className={Styles.avatar}>
            <img className={Styles.image} src={avatarImage} alt='Аватар' />
          </div>
          <div className={Styles.block}>
            <div className={Styles.wrapper}>
              <span>Лазарченко Сергей. К</span>
              <div className={Styles.date}>
                <span>13:00</span>
              </div>
            </div>
            <p className={Styles.message}>
              Здравствуйте, а в какую клинику лучше лучше обратиться для сдачи исследований, которые вы мне назначили? У
              меня в городе есть инвитро и еще пару других
            </p>
          </div>
        </div>
        <div className={Styles.user}>
          <div className={Styles.avatar}>
            <img className={Styles.image} src={avatarImage} alt='Аватар' />
          </div>
          <div className={Styles.block}>
            <div className={Styles.wrapper}>
              <span>Наталья Ивановна</span>
              <div className={Styles.date}>
                <img src={checksIcon} alt='Статус' />
                <span>13:00</span>
              </div>
            </div>
            <p className={Styles.message}>Сергей, здравстуйте! Рекомендую вам обратиться в клинику Инвитро</p>
            <div className={Styles.previous}>
              <p className={Styles.message}>Подскажите, какие еще есть клиники в вашем городе?</p>
              <div className={Styles.date}>
                <img src={checksIcon} alt='Статус' />
                <span>13:00</span>
              </div>
            </div>
            <div className={Styles.previous}>
              <p className={Styles.message}>
                Не забудьте о том, что у исследований есть срок, в течение которого они являются актуальными
              </p>
              <div className={Styles.date}>
                <img src={checkIcon} alt='Статус' />
                <span>13:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form className={Styles.form}>
        <img src={clipIcon} alt='Иконка' />
        <input className={Styles.input} type='text' placeholder='Введите сообщение' />
      </form>
    </div>
  )
}
