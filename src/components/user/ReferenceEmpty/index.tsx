import React from 'react'
import Styles from './style.module.scss'
import { ButtonColor } from '../../ui/ButtonColor'
import reference1 from '@icons/reference1.png'
import { ButtonTransparent } from '@components/ui/ButtonTransparent'

export const ReferenceEmpty = () => {
  return (
    <>
      <div className={Styles.reference__container}>
        <div className={Styles.reference__wrapper}>
          <img className={Styles.reference__img} src={reference1} alt='reference' />
          <div className={Styles.reference__description}>
            <h3 className={Styles.reference__title}>Для вас пока нет рекомендаций</h3>
            <p className={Styles.reference__text}>
              Запишитесь на консультацию к врачу или заполните анкету, чтобы мы могли сфомировать для вас рекомендации{' '}
            </p>
          </div>
          <div className={Styles.reference__buttons}>
            <ButtonColor value='Записаться на прием' className={Styles.reference__button} />
            <ButtonTransparent value='Заполнить анкету' />
          </div>
        </div>
      </div>
    </>
  )
}
