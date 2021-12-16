import React from 'react'
import Styles from './style.module.scss'

interface EditDataProps {
  setView: any
}

export const EditData: React.FC<EditDataProps> = ({ setView }) => {
  return (
    <div className={Styles.edit}>
      {/* <div className={Styles.notification}>Все изменения сохранены</div> */}
      <div className={Styles.header}>
        <button className={Styles.back} onClick={() => setView('info')}>
          {}
        </button>
        <span className={Styles.title}>Личные данные</span>
        <button className={Styles.close}>{}</button>
      </div>
      <form className={Styles.form}>
        <div className={Styles.block}>
          <label className={Styles.label}>
            <span>Имя*</span>
            <input className={Styles.input} type='text' name='firstname' placeholder='Введите ваше имя' />
          </label>
          <label className={Styles.label}>
            <span>Фамилия</span>
            <input className={Styles.input} type='text' name='secondname' placeholder='Введите вашу фамилию' />
          </label>
        </div>
        <button className={Styles.save}>Сохранить изменения</button>
      </form>
    </div>
  )
}
