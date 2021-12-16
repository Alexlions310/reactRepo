import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './style.module.scss'

import backIcon from '@icons/back.svg'

interface DoctorContainerProps {
  title: string
  count?: number
  back: string
  to?: string
}

export const DoctorContainer: React.FC<DoctorContainerProps> = ({ title, count, back, to, children }) => {
  return (
    <div className={Styles.container}>
      {back && (
        <Link className={Styles.link} to={to}>
          <img src={backIcon} alt='Иконка' />
          <span>{back}</span>
        </Link>
      )}
      {count && title ? (
        <div className={Styles.caption}>
          <span className={Styles.title}>{title}</span>
          <strong className={Styles.count}>{count}</strong>
        </div>
      ) : (
        <div className={Styles.caption}>
          <span className={Styles.title}>{title}</span>
        </div>
      )}
      {children}
    </div>
  )
}
