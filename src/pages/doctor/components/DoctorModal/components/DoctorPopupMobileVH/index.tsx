import React from 'react'
import Styles from './style.module.scss'

import backIcon from '@icons/back-mobile.svg'
import closeIcon from '@icons/close-blue.svg'

interface DoctorPopupMobileVHVHProps {
  title: string
  backPopup?: any
  closePopup: any
}

export const DoctorPopupMobileVH: React.FC<DoctorPopupMobileVHVHProps> = ({
  title,
  backPopup,
  closePopup,
  children,
}) => {
  return (
    <div className={Styles.popup}>
      <div className={Styles.header}>
        <img
          className={backPopup ? `${Styles.button}` : `${Styles.button} ${Styles.button_hide}`}
          src={backIcon}
          alt='Иконка'
          onClick={backPopup}
        />
        <span className={Styles.title}>{title}</span>
        <img src={closeIcon} alt='Иконка' onClick={closePopup} />
      </div>
      <div className={Styles.body}>{children}</div>
    </div>
  )
}
