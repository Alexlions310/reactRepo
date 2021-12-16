import React from 'react'
import Styles from './style.module.scss'

export const AdditionalBlog = (props) => {
  return (
    <div className={Styles.additionalBlog_container}>
      <img
        className={Styles.additionalBlog_container__img}
        src={props.img}
        alt='изображение дополнительного небольшого блога'
      />
      <div className={Styles.additionalBlog_container__leftside}>
        <h1 className={Styles.additionalBlog_container__heading}>{props.heading}</h1>
        <p className={Styles.additionalBlog_container__P}>{props.paragraph}</p>
        <div className={Styles.additionalBlog_container__blogTypeTime}>
          <span className={Styles.additionalBlog_container__blogTime}>{props.time}</span>
          <span className={Styles.additionalBlog_container__blogType}>{props.type}</span>
        </div>
      </div>
    </div>
  )
}
