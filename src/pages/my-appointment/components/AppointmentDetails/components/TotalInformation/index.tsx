import React, { useState } from 'react'
import Styles from './style.module.scss'
import timeIcon from '@icons/time.svg'
import moment from 'moment'
import useWindowSize from '@helpers/useWindowSizeHook'
import { ButtonWithBorder } from '@components/ui/ButtonWithBorder'
import viewIcon from '@icons/view-black.svg'
import { useAppSelector } from '@app/redux/hooks'
import { ConclusionMobile } from '@components/Сonclusion/ConclusionMobile'

export const TotalInformation = () => {
  const dataById = useAppSelector((state) => state.myAppointmentById.dataById)
  const dateFomat = moment(dataById.day_reception, 'YYYY-MM-DD').format('D MMMM')
  const { width } = useWindowSize()
  const desktop = width >= 829
  const [showDrawer, setShowDrawer] = useState(false)
  return (
    <>
      {dataById && (
        <div className={Styles.record}>
          <h2 className={Styles.title__card}>Запись на прием {dateFomat}</h2>
          <div className={`${Styles.header} ${!dataById.is_online && Styles.offline}`}>
            {dataById?.status === 'planned' && (
              <div className={Styles.notification}>
                <img src={timeIcon} alt='Иконка' />
                <span className={Styles.across}>Через 10 минут</span>
              </div>
            )}
            {dataById?.status === 'done' && dataById?.medical_report === null && (
              <div className={Styles.notification}>
                <img src={timeIcon} alt='Иконка' />
                <span className={Styles.across}>Врач готовит заключение</span>
              </div>
            )}
            <div className={Styles.container}>
              <span className={Styles.time}>{dataById?.time_reception}</span>
              <span className={Styles.online}>{dataById?.is_online ? 'Онлайн прием' : 'Личный прием'}</span>
            </div>

            {dataById?.is_online && desktop && <button className={Styles.start}>Подключиться</button>}
          </div>

          <div className={Styles.block}>
            <span className={Styles.title}>Консультация</span>
            <p className={Styles.description}>{dataById?.consultation_type?.direction?.title}</p>
          </div>
          <div className={Styles.block}>
            <span className={Styles.title}>Тип консультации</span>
            <div className={Styles.wrap}>
              <div className={Styles.description}>{dataById?.consultation_type?.title}</div>
            </div>
          </div>
          {!desktop && dataById?.status === 'done' && (
            <ButtonWithBorder
              value='Заключение'
              className={Styles.button}
              before
              src={viewIcon}
              onClick={() => setShowDrawer(true)}
            />
          )}
          <ConclusionMobile showDrawer={showDrawer} setShowDrawer={setShowDrawer} date={dataById.day_reception} />
        </div>
      )}
    </>
  )
}
