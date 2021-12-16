import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './style.module.scss'

import backIcon from '@icons/back-mobile.svg'
import closeIcon from '@icons/close-blue.svg'

interface DoctorContainerMobileProps {
  title: string
  back: string
}

export const DoctorContainerMobile: React.FC<DoctorContainerMobileProps> = ({ title, back, children }) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <Link to={back}>
          <img src={backIcon} alt='Иконка' />
        </Link>
        <span className={Styles.title}>{title}</span>
        <Link to={back}>
          <img src={closeIcon} alt='Иконка' />
        </Link>
      </div>
      <div className={Styles.body}>{children}</div>
    </div>
  )
}
