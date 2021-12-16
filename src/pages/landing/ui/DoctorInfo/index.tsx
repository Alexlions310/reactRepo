import React from 'react'
import Styles from './style.module.scss'
import doctorPicture from '@images/cuteDoctor3.png'
import workExperienceIcon from '@icons/workExperienceIcon.svg'
import consultationIcon from '@icons/consultationIcon.svg'
import { ExperienceInfo } from './components'
export const DoctorInfo = () => {
  return (
    <div className={Styles.doctorInfoContainer} id='doctor'>
      <h1 className={Styles.doctorInfoContainer__heading1}>У нас профессиональный врач</h1>
      <div className={Styles.wrapper}>
        <div className={Styles.doctorinfoContainer__leftSide}>
          <img
            className={Styles.doctorInfoContainer__img}
            src={doctorPicture}
            alt='Очень красивая фотография профессионального врача'
          />
        </div>
        <div className={Styles.doctorinfoContainer__rightSide}>
          <h1 className={Styles.doctorInfoContainer__heading2}>Наталья Ивановна Ситникова</h1>
          <p className={Styles.doctorInfoContainer__p1}>врач – нутрициолог</p>
          <span style={{ display: 'flex' }}>
            <ExperienceInfo icon={workExperienceIcon} info='опыт работы' infoNum='15 лет' />
            <ExperienceInfo icon={consultationIcon} info='консультаций ' infoNum='128' />
          </span>
          <h1 className={Styles.doctorInfoContainer__heading3}>Образование</h1>
          <p className={Styles.doctorInfoContainer__p2}>
            Кубанский государственный медицинский университет Профессиональная переподготовка «Стоматология детская»
          </p>
          <h1 className={Styles.doctorInfoContainer__heading3}>Карьера</h1>
          <p className={Styles.doctorInfoContainer__p2}>
            ИНВИТРО — крупнейшая частная медицинская компания в России, специализирующаяся на высокоточной лабораторной
            диагностике и оказании медицинских услуг
          </p>
        </div>
      </div>
    </div>
  )
}
