import React from 'react'
import Styles from './style.module.scss'

import attachmentPhoto from '@images/attachment.png'
import clipIcon from '@icons/clip.svg'

export const DoctorPatientInformation: React.FC = () => {
  return (
    <div className={Styles.information}>
      <span className={Styles.header}>Информация от пациента</span>
      <p className={Styles.description}>
        Здравствуйте,У меня уже давно есть проблема с качеством волос и ногтей. Пробовала пить витамин Д от компании
        «АБС» и другие, но ничего не помогает. Прикрепляю фото волос и ногтей на руках (на фото видно, что ногти сильно
        шелушатсяи выглядят нездоровыми, тоже самое и с волосами)
      </p>
      <div className={Styles.attachment}>
        <div className={Styles.photos}>
          <div className={Styles.photo}>
            <img className={Styles.image} src={attachmentPhoto} alt='Фото' />
          </div>
          <div className={Styles.photo}>
            <img className={Styles.image} src={attachmentPhoto} alt='Фото' />
          </div>
          <div className={Styles.photo}>
            <img className={Styles.image} src={attachmentPhoto} alt='Фото' />
          </div>
        </div>
        <div className={Styles.result}>
          <img src={clipIcon} alt='Иконка' />
          <span className={Styles.text}>Результаты о... .docx</span>
        </div>
      </div>
    </div>
  )
}
