import { DrawerPanel } from '@components/Drawer'
import React, { useState } from 'react'
import Styles from './style.module.scss'
import arrow from '@icons/arrow-large-blue.svg'
import close from '@icons/close-blue.svg'
import useWindowSize from '@helpers/useWindowSizeHook'
import moment from 'moment'
import { SelectComponent } from '@components/SelectComponent'
import { Nutrition } from '../components/Nutrition'
import { DoctorLife } from '../components/DoctorLife'
import { DoctorNutraceuticals } from '../components/DoctorNutraceuticals'
import { DoctorSurveys } from '../components/DoctorSurveys'

export const ConclusionMobile = (props) => {
  const dateFormat = moment(props.date, 'YYYY-MM-DD').format('D MMMM, YYYY')
  const { width } = useWindowSize()
  const desktop = width >= 829
  const [valueSelect, setValueSelect] = useState('Питание')
  return (
    !desktop && (
      <DrawerPanel width='100%' anchor='left' open={props.showDrawer} onClose={() => props.setShowDrawer(false)}>
        <div className={Styles.container}>
          <div className={Styles.navigation}>
            <button className={Styles.arrow} onClick={() => props.setShowDrawer(false)}>
              <img src={arrow} />
            </button>

            <h3 className={Styles.title}>Заключение врача</h3>
            <button className={Styles.close} onClick={() => props.setShowDrawer(false)}>
              <img src={close} alt='close' />
            </button>
          </div>
          <div className={Styles.content}>
            <div className={Styles.wrap}>
              <h2 className={Styles.subtitle}>Заключение&nbsp;</h2>
              <span className={Styles.date}>{`от ${dateFormat}`}</span>
            </div>
            <SelectComponent
              setValueSelect={setValueSelect}
              value1='Питание'
              value2='Образ жизни'
              value3='Нутрицевтики'
              value4='Исследования'
            />
          </div>
          <div className={Styles.content__container}>
            {valueSelect === 'Питание' && <Nutrition />}
            {valueSelect === 'Образ жизни' && <DoctorLife />}
            {valueSelect === 'Нутрицевтики' && <DoctorNutraceuticals />}
            {valueSelect === 'Исследования' && <DoctorSurveys />}
          </div>
        </div>
      </DrawerPanel>
    )
  )
}
