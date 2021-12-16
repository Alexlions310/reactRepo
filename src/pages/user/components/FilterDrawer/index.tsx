import React from 'react'
import Styles from './style.module.scss'

export const FilterDrawer = () => {
  return (
    <div className={Styles.filters_container}>
      <div className={Styles.content}>
        <span>фильтры</span>
      </div>
    </div>
  )
}
