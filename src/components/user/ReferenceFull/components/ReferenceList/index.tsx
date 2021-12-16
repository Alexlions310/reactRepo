import { Tag } from '@components/ui/Tag'
import React from 'react'
import Styles from './style.module.scss'

export const ReferenceList = (props) => {
  return (
    <div className={Styles.reference__container}>
      <h6 className={Styles.reference__title}>{props.title}</h6>
      <div className={Styles.reference__items}>
        {props.list.map((item, i) => (
          <Tag key={i.toString()} className={Styles.reference__item} value={item} />
        ))}
      </div>
    </div>
  )
}
