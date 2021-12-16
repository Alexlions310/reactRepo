import React from 'react'
import Styles from './style.module.scss'

import { DoctorItem } from '../DoctorItem'

export const DoctorSurveys = () => {
  return (
    <>
      <div className={Styles.block}>
        <DoctorItem>Тиреотропный гормон (ТТГ, тиротропин, Thyroid)</DoctorItem>
        <DoctorItem>Тироксин свободный (Т4 свободный, FT4)</DoctorItem>
        <DoctorItem>Трийодтиронин свободный (Т3 свободный, FT3)</DoctorItem>
        <DoctorItem>Антитела к тиреоидной пероксидазе (АТ-ТПО)</DoctorItem>
      </div>
    </>
  )
}
