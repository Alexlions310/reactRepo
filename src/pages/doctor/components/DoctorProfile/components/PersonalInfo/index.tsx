import React, { useState } from 'react'
import Styles from './style.module.scss'

interface PersonalInfoProps {
  changeDisplay: any
}

export const PersonalInfo: React.FC<PersonalInfoProps> = ({ changeDisplay }) => {
  const [formInputs, setFormInputs] = useState({
    firstname: { value: 'Анастасия', disabled: true },
    secondname: { value: '', disabled: true },
  })

  const handlerChange = (event) => {
    setFormInputs({
      ...formInputs,
      [event.target.name]: { ...formInputs[event.target.name], value: event.target.value },
    })
  }

  const unlockInput = (event, nameInput) => {
    event.preventDefault()

    setFormInputs({
      ...formInputs,
      [nameInput]: { ...formInputs[nameInput], disabled: !formInputs[nameInput].disabled },
    })
  }

  return (
    <div className={Styles.info}>
      {/* <div className={Styles.doctor}>
        <div className={Styles.cap}>
          <span className={Styles.abbreviation}>АО</span>
        </div>
        <div className={Styles.data}>
          <span className={Styles.firstname}>Анастасия О.</span>
          <button className={Styles.logout}>Выйти</button>
        </div>
      </div> */}
      <form className={Styles.form}>
        <span className={Styles.title}>Личные данные</span>
        <label className={Styles.label} htmlFor='firstname'>
          Имя*
        </label>
        <div className={Styles.field}>
          <input
            className={Styles.input}
            type='text'
            name='firstname'
            value={formInputs.firstname.value}
            onChange={handlerChange}
            disabled={formInputs.firstname.disabled}
            required
          />
          <button className={Styles.edit} onClick={(event) => unlockInput(event, 'firstname')}>
            {}
          </button>
        </div>
        <label className={Styles.label} htmlFor='secondname'>
          Фамилия
        </label>
        <div className={Styles.field}>
          <input
            className={Styles.input}
            type='text'
            name='secondname'
            value={formInputs.secondname.value}
            onChange={handlerChange}
            disabled={formInputs.secondname.disabled}
          />
          <button className={Styles.edit} onClick={(event) => unlockInput(event, 'secondname')}>
            {}
          </button>
        </div>
      </form>

      <div className={Styles.container}>
        <div className={Styles.block}>
          <span className={Styles.caption}>Прием отменен</span>
          <div className={Styles.canceled}>
            <div className={Styles.visit}>
              <span className={Styles.date}>14 мая - 15 июня</span>,&nbsp;
              <span className={Styles.days}>33 дня</span>
              <button className={Styles.back}>{}</button>
            </div>
            <div className={Styles.visit}>
              <span className={Styles.date}>15 февраля</span>,&nbsp;
              <span className={Styles.days}> 1 день</span>
              <button className={Styles.back}>{}</button>
            </div>
            <div className={Styles.visit}>
              <span className={Styles.date}>18 февраля - 20 февраля</span>,&nbsp;
              <span className={Styles.days}>2 дня</span>
              <button className={Styles.back}>{}</button>
            </div>
            <div className={Styles.visit}>
              <span className={Styles.date}>14 мая: 14:00, 15:30, 16:00 17:30, 18:00</span>,&nbsp;
              <span className={Styles.days}>5 записей</span>
              <button className={Styles.back}>{}</button>
            </div>
            <div className={Styles.visit}>
              <span className={Styles.date}>14 мая: 14:00, 15:30</span>,&nbsp;
              <span className={Styles.days}>2 записи</span>
              <button className={Styles.back}>{}</button>
            </div>
            <button className={Styles.more} onClick={() => changeDisplay('cancel')}>
              добавить еще
            </button>
          </div>
        </div>
      </div>

      <div className={Styles.container}>
        <div className={Styles.block}>
          <span className={Styles.caption}>Отменить часы или дни приема</span>
          <div className={Styles.cancel}>
            <p className={Styles.text}>Вы можете выбрать дни или часы, которые будут недоступны для записи пациентам</p>
            <button className={Styles.choose} onClick={() => changeDisplay('cancel')}>
              Выбрать дни
            </button>
          </div>
        </div>
      </div>

      <div className={`${Styles.container} ${Styles.container_mod}`}>
        <div className={Styles.block}>
          <span className={Styles.caption}>Хотите возобновить прием?</span>
          <div className={Styles.confirm}>
            <span className={Styles.day}>14 мая - 15 июня, 33 дня</span>
            <div className={Styles.wrap}>
              <button className={Styles.yep}>Да, возобновить</button>
              <button className={Styles.nope}>Не возобновлять</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
