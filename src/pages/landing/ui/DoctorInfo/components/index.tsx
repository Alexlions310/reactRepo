import React from 'react'
import Styles from './style.module.scss'

export const ExperienceInfo = (props) => {
  return (
    <div className={Styles.workExp}>
      <img className={Styles.workExp__icon} src={props.icon} alt='значок' />
      <span>
        <p className={Styles.workExp__info}>{props.info}</p>
        <span className={Styles.workExp__infoNum}>{props.infoNum}</span>
      </span>
    </div>
  )
}
