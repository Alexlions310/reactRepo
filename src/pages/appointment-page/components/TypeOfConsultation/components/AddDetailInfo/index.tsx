import React, { useState } from 'react'
import Styles from './style.module.scss'
import { TagLarge } from '@components/ui/TagLarge'
import arrow from '@icons/arrow-right.svg'

import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setData } from '../../../../redux/consultationSlicer'
import { InputFile } from '@components/ui/InputFile'

export const AddDetailInfo = (props) => {
  const dispatch = useAppDispatch()
  const [isActive, setIsActive] = useState(false)
  const dataHandler = useAppSelector((state) => state.consultationPage.data)
  const openOptional = () => {
    setIsActive(!isActive)
  }
  const addTag = (e) => {
    dispatch(setData({ key: 'valueOptional', value: e.target.innerText }))
  }
  const inputHandler = (e) => {
    dispatch(setData({ key: 'valueOptional', value: e.target.value }))
  }
  return (
    <div className={Styles.container}>
      <div className={`${Styles.button__wrap} ${isActive && Styles.button_isActive}`} onClick={openOptional}>
        <button className={Styles.button}>
          Хотите рассказать подробнее?
          <img className={isActive ? `${Styles.img} ${Styles.img_active}` : Styles.img} alt='arrow' src={arrow} />
        </button>
        <InputFile className={`${Styles.button__transparent} ${Styles.button}`} value='или добавить файл' />
      </div>
      {isActive && (
        <div className={Styles.optional}>
          <textarea
            onChange={inputHandler}
            value={dataHandler.valueOptional}
            className={Styles.optional__input}
            placeholder='Расскажите о своей проблеме подробнее или прикрепите результаты исследования. Врач получит эту информацию до приема'
          />
          <div className={Styles.tag__wrap}>
            {props.list.map((number, id) => (
              <TagLarge key={id} value={number} addTag={addTag} />
            ))}
          </div>
          <div className={`${Styles.button__wrap} ${Styles.button__wrap2}`}>
            <p className={Styles.load__text}>
              Расскажите о своей проблеме подробнее или прикрепите результаты исследования. Врач получит эту до приема
            </p>
            <InputFile value='Добавить файл' image styleButton />
          </div>
        </div>
      )}
    </div>
  )
}
