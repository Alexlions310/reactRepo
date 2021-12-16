import React from 'react'
import Styles from './style.module.scss'

export const DoctorPopupMobile = ({ closePopup, children }) => {
  return (
    <div className={Styles.popup}>
      <div className={Styles.container}>
        <button className={Styles.exit} onClick={closePopup}>
          {}
        </button>
        {children}
      </div>
    </div>
  )
}
