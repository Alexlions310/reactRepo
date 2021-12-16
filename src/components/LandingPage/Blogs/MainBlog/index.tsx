import React from 'react'
import Styles from './style.module.scss'

export const MainBlog = (props) => {
  return (
    <div className={Styles.mainBlog_container}>
      <img className={Styles.mainBlog_container__img} src={props.img} alt='изображение основного большого блога' />
      <h1 className={Styles.mainBlog_container__heading}>{props.heading}</h1>
      <p className={Styles.mainBlog_container__P}>{props.paragraph}</p>
      <div className={Styles.mainBlog_container__blogTypeTime}>
        <span className={Styles.mainBlog_container__blogTime}>{props.time}</span>
        <span className={Styles.mainBlog_container__blogType}>{props.type}</span>
      </div>
    </div>
  )
}
