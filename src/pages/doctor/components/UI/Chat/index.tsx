import React from 'react'
import Styles from './style.module.scss'

import cloudIcon from '@icons/cloud.svg'

export const Chat: React.FC = () => {
  return (
    <div className={Styles.chat}>
      <img src={cloudIcon} alt='Иконка' />
      <span className={Styles.count}>1</span>
    </div>
  )
}
