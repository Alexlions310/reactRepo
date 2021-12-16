import React from 'react'
import Styles from './style.module.scss'
import { DevelopLogo } from './devLogo'

export const DevelopingPage = () => {
  const textObject = 'Данными'
  return (
    <div className={Styles.dev_container}>
      <div className={Styles.dev_content}>
        <DevelopLogo />
        <div className={Styles.develop_text_container}>
          <span>Мы непрерывно работаем над улучшением каждого из сервисов.</span>
          <span>{`Скоро вы сможете работать с ${textObject} прямо на этой странице не покидая портал`}</span>
          <span>
            {`Чтобы посмотреть ранее ${textObject} перейдите на портал `}
            <a target='_blank' href='#' rel='noreferrer' />
          </span>
        </div>
      </div>
    </div>
  )
}
