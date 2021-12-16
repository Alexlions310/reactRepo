import React from 'react'
import Styles from './style.module.scss'
import createIcon from '@icons/clock.svg'
import viewIcon from '@icons/view.svg'
import ok from '@icons/ok-white.svg'
import moment from 'moment'
import { getAppointmentById, setSelectById } from '../../../../../../redux/appointmentByIdSlicer'
import { useAppDispatch } from '@app/redux/hooks'
import { setShowMainPage } from '../../../../../../redux/appointmentSlicer'
interface DoctorVisitProps {
  title: string
  subtitle: string
  date: any
  conclusion: boolean
  conclusionIsReady: boolean
  time: string
  id: any
}

export const PastAppointment: React.FC<DoctorVisitProps> = (props) => {
  const { title, subtitle, date, time, conclusion, conclusionIsReady, id } = props
  const dateFomat = moment(date, 'YYYY-MM-DD').format('DD MMMM, dddd')
  const dispatch = useAppDispatch()
  return (
    <li className={Styles.visit}>
      <div className={Styles.block}>
        <span className={`${Styles.title} ${Styles.title_mod}`}>{title}</span>
        <span className={Styles.subtitle}>{subtitle}</span>
      </div>
      <div className={Styles.block}>
        <span className={Styles.title}>{dateFomat}</span>
        <span className={Styles.subtitle}>{time}</span>
      </div>
      <div className={Styles.block}>
        <div className={Styles.conclusion}>
          {conclusion ? (
            <>
              <img src={createIcon} alt='Иконка' />
              <span className={Styles.text}>Врач готовит заключение</span>
            </>
          ) : (
            <>
              <button
                className={`${Styles.text} ${Styles.text_mod}`}
                onClick={() => {
                  dispatch(setSelectById(id))
                  dispatch(setShowMainPage(false))
                  dispatch(getAppointmentById(id))
                }}
              >
                <img src={viewIcon} alt='Иконка' />
                Смотреть заключение
              </button>
            </>
          )}
        </div>
        {conclusionIsReady && (
          <span className={Styles.conclusionIsReady}>
            <img src={ok} alt='ok' />
            Заключение готово
          </span>
        )}
      </div>
    </li>
  )
}
