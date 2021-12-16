import React from 'react'
import Styles from './style.module.scss'
import avatar from '@images/avatar2.png'
import icon1 from '@icons/icon1.svg'
import icon2 from '@icons/icon2.svg'
import { BorderLine } from '@components/ui/BorderLine'
import { FragmentUi } from '@components/ui/FragmentUi'

export const DoctorInformation = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.wrap}>
        <img className={Styles.img} src={avatar} alt='avatar' />
        <div className={Styles.desc}>
          <h6 className={Styles.name}>Наталья Ивановна С.</h6>
          <p className={Styles.text}>врач–нутрициолог</p>
        </div>
      </div>
      <BorderLine />
      <div className={Styles.wrap2}>
        <FragmentUi src={icon1} text='опыт работы' count='15 лет' />
        <FragmentUi src={icon2} text='консультаций' count='128' />
      </div>
    </div>
  )
}
