import React from 'react'
import Styles from './style.module.scss'

import photoImage from '@images/photo-attachment.png'

export const Photos: React.FC = () => {
  return (
    <div className={Styles.photos}>
      <div className={Styles.block}>
        <div className={Styles.content}>
          <img className={Styles.image} src={photoImage} alt='Фото' />
          <img className={Styles.image} src={photoImage} alt='Фото' />
          <img className={Styles.image} src={photoImage} alt='Фото' />
          <img className={Styles.image} src={photoImage} alt='Фото' />
          <img className={Styles.image} src={photoImage} alt='Фото' />
          <img className={Styles.image} src={photoImage} alt='Фото' />
          <img className={Styles.image} src={photoImage} alt='Фото' />
          <img className={Styles.image} src={photoImage} alt='Фото' />
          <img className={Styles.image} src={photoImage} alt='Фото' />
          <img className={Styles.image} src={photoImage} alt='Фото' />
        </div>
      </div>
      <div className={Styles.block}>
        <span className={Styles.title}>Вчера</span>
        <div className={Styles.content}>
          <img className={Styles.image} src={photoImage} alt='Фото' />
          <img className={Styles.image} src={photoImage} alt='Фото' />
          <img className={Styles.image} src={photoImage} alt='Фото' />
          <img className={Styles.image} src={photoImage} alt='Фото' />
        </div>
      </div>
    </div>
  )
}
