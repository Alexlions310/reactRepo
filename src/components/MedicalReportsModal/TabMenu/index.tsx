import React, { useEffect, useState } from 'react'
import Styles from './style.module.scss'

export const TabMenu = ({ activeContent, setActiveContent }) => {
  return (
    <div className={Styles.tabMenu}>
      <button
        type='button'
        onClick={() => setActiveContent('diet')}
        className={activeContent !== 'diet' ? Styles.button : `${Styles.button} ${Styles.button_active}`}
      >
        Питание
      </button>
      <button
        type='button'
        onClick={() => setActiveContent('lifeStyle')}
        className={activeContent !== 'lifeStyle' ? Styles.button : `${Styles.button} ${Styles.button_active}`}
      >
        Образ жизни
      </button>
      <button
        type='button'
        onClick={() => setActiveContent('nutraceutical')}
        className={activeContent !== 'nutraceutical' ? Styles.button : `${Styles.button} ${Styles.button_active}`}
      >
        Нутрицевтики
      </button>
      <button
        type='button'
        onClick={() => setActiveContent('research')}
        className={activeContent !== 'research' ? Styles.button : `${Styles.button} ${Styles.button_active}`}
      >
        Исследования
      </button>
    </div>
  )
}
