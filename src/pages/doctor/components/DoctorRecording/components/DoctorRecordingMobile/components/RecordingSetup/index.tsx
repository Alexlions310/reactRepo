import React, { useState } from 'react'
import Styles from './style.module.scss'

import { InputRadio } from '../../../../../UI/InputRadio'

import caretIcon from '@icons/caret.svg'

export const RecordingSetup = ({ openPopup }) => {
  const [displaySelection, setDisplaySelection] = useState(false)

  const toggleSelection = () => setDisplaySelection((prev) => !prev)

  return (
    <>
      <div className={Styles.container}>
        <span className={Styles.caption}>сегодня, 14 января</span>
        <form className={Styles.form}>
          <div className={Styles.records}>
            <div className={Styles.record}>
              <i>{}</i>
              <span>08:00</span>
            </div>
            <div className={Styles.record}>
              <i>{}</i>
              <span>08:00</span>
            </div>
            <div className={Styles.record}>
              <i>{}</i>
              <span>08:00</span>
            </div>
            <div className={Styles.record}>
              <i>{}</i>
              <span>08:00</span>
            </div>
            <label className={Styles.record}>
              <InputRadio className={Styles.radio} name='date' />
              <span>08:00</span>
            </label>
            <label className={Styles.record}>
              <InputRadio className={Styles.radio} name='date' />
              <span>08:00</span>
            </label>
            <label className={Styles.record}>
              <InputRadio className={Styles.radio} name='date' />
              <span>08:00</span>
            </label>
          </div>
          <div className={Styles.block}>
            <span className={Styles.field}>Выберите направление консультации</span>
            <div className={Styles.select}>
              <div className={Styles.row} onClick={openPopup}>
                <span className={Styles.title}>Консультация врача-нутрициолога</span>
                <button className={Styles.caret}>
                  <img src={caretIcon} alt='Иконка' />
                </button>
              </div>
              {displaySelection && (
                <div className={Styles.selection}>
                  <span className={Styles.option}>Консультация врача-нутрициолога</span>
                  <span className={Styles.option}>Антивозраст (AntiAge)</span>
                  <span className={Styles.option}>Нутрицевтическая подготовка к беременности</span>
                  <span className={Styles.option}>Прием витаминов и БАД — врачебный контроль</span>
                  <span className={Styles.option}>Генетический тест</span>
                  <span className={Styles.option}>Лабораторный чекап</span>
                </div>
              )}
            </div>
          </div>
          <div className={Styles.block}>
            <span className={Styles.field}>Выберите тип консультации</span>
            <div className={Styles.inputs}>
              <label className={Styles.label}>
                Первичная
                <InputRadio name='type' />
              </label>
              <label className={Styles.label}>
                Вторичная
                <InputRadio name='type' />
              </label>
            </div>
          </div>
        </form>
      </div>
      <div className={Styles.confirm}>
        <div className={Styles.wrap}>
          <span>Запись на прием</span>
          <span>выберите дату </span>
        </div>
        <button /* onClick={() => setCompele(true)} */>Записать</button>
      </div>
    </>
  )
}
