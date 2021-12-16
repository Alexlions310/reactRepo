import React from 'react'
import Styles from './style.module.scss'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { consultationActive, mobileState, mobileStatePagination } from '../../redux/choiсeConsultationSlicer'
import arrow from '@icons/arrow.svg'
export const AppointmentPagination = () => {
  const list = useAppSelector((state) => state.choieConsultationPage.list)
  const dispatch = useAppDispatch()
  const handleClick = (e) => {
    if (window.innerWidth < 829) {
      dispatch(mobileStatePagination(true))
      dispatch(mobileState({ id: Number(e.currentTarget.id), value: true }))
    }
    dispatch(consultationActive(Number(e.currentTarget.id)))
  }
  const statusMenu = useAppSelector((state) => state.choieConsultationPage.mobilePagination)
  return (
    <div className={`${Styles.root} ${statusMenu && Styles.root__mobile}`}>
      <h1 className={Styles.title}>Запись на прием</h1>
      <div className={Styles.container}>
        {list.map((step) => (
          <button
            key={step.id.toString()}
            disabled={!step.isPassed}
            className={Styles.step}
            id={step.id.toString()}
            onClick={handleClick}
          >
            <div className={Styles.wrapper}>
              {step.isFull ? (
                <div className={Styles.is__ok} />
              ) : (
                <div className={`${Styles.step__logo} ${step.isActive && Styles.step__logo_active}`}>
                  {Number(step.id) + 1}
                </div>
              )}

              <div className={Styles.step__desc}>
                <h5 className={`${Styles.step__title} ${step.isActive && Styles.step__title_active}`}>{step.title}</h5>
                <div className={`${Styles.step__text} ${step.isActive && Styles.step__text_active}`}>
                  {step.textDefault}
                </div>
              </div>
            </div>
            <img className={Styles.arrow} src={arrow} />
          </button>
        ))}
      </div>
    </div>
  )
}
