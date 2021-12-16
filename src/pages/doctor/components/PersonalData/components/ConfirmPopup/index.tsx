import React from 'react'
import Styles from './style.module.scss'

interface ConfirmPopupProps {
  closePopup: any
}

export const ConfirmPopup: React.FC<ConfirmPopupProps> = ({ children, closePopup }) => {
  return (
    <div className={Styles.confirm}>
      <div className={Styles.container}>
        <button className={Styles.exit} onClick={() => closePopup(false)}>
          {}
        </button>
        {children}
      </div>
    </div>
  )
}
