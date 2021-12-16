import { Tag } from '@components/ui/Tag'
import moment from 'moment'
import React from 'react'
import Styles from './style.module.scss'

export const NearestReception = (props) => {
  const dateConvert = (day) => {
    return moment(day, 'YYYY-MM-DD').format('DD MMMM')
  }
  return (
    <div className={Styles.container}>
      <div className={Styles.wrap}>
        <h5 className={Styles.reseption__title}>Лично</h5>
        <div className={Styles.reception}>Ближайший прием {dateConvert(props.item.day)}</div>
        {props.item.receptions.map((i, id) => (
          <span key={id}>
            <Tag value={i} />
          </span>
        ))}
      </div>

      <h5 className={Styles.reseption__title}>Онлайн</h5>
      <div className={Styles.reception}>Ближайший прием {dateConvert(props.item.day)}</div>
      {props.item.receptions.map((i, id) => (
        <span key={id}>
          <Tag value={i} />
        </span>
      ))}
    </div>
  )
}
