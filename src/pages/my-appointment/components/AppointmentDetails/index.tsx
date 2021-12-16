import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { ButtonTransparent } from '@components/ui/ButtonTransparent'
import React, { useEffect, useState } from 'react'
import Styles from './style.module.scss'
import useWindowSize from '@helpers/useWindowSizeHook'
import clip from '@icons/clip.svg'
import plus from '@icons/plus.svg'
import warning from '@icons/warning.svg'
import pencil from '@icons/pencil.svg'
import img from '@icons/consultation1.svg'
import loadImg from '@images/attachment.png'
import { setShowMainPage } from '../../redux/appointmentSlicer'
import { Sidebar } from '../../../appointment-page/components/SideBar'
import { TotalDetails } from './components/TotalDetails'
import { DoctorInformation } from '../../../appointment-page/components/TypeOfConsultation/components/DoctorInfo'
import { TotalInformation } from './components/TotalInformation'
import { ButtonColor } from '@components/ui/ButtonColor'
import { Conclusion } from '@components/Сonclusion'
import { AppointmentInformation } from '../AppointmentInformation'
import { getAppointmentById } from '../../redux/appointmentByIdSlicer'

export const AppointmentDetails = (props) => {
  const { width } = useWindowSize()
  const desktop = width >= 829
  const dispatch = useAppDispatch()
  const idAppointment = useAppSelector((state) => state.myAppointmentById.selectById)
  const [editLoadDescription, setEditLoadDescription] = useState(false)
  useEffect(() => {
    dispatch(getAppointmentById(idAppointment))
  }, [])
  const dataById = useAppSelector((state) => state.myAppointmentById.dataById)
  return (
    <>
      {dataById && (
        <>
          {desktop && (
            <div className={Styles.button_back}>
              <ButtonTransparent
                value='Назад на главную'
                before
                onClick={() => {
                  dispatch(setShowMainPage(true))
                }}
              />
            </div>
          )}
          <h1 className={Styles.title}>Запись на прием</h1>
          <div className={Styles.main__conteiner}>
            {dataById?.consultation_type && (
              <div className={Styles.wrapper__container}>
                {dataById?.status === 'done' && (
                  <div className={Styles.wrap}>
                    <Conclusion date={dataById?.day_reception} />
                  </div>
                )}
                <AppointmentInformation />
                <div className={Styles.details__container}>
                  <h4 className={Styles.subtitle}>Ваше сообщение к консультации</h4>
                  <textarea
                    readOnly={!editLoadDescription}
                    className={`${Styles.input} ${editLoadDescription && Styles.input_edit}`}
                    value={dataById?.description}
                    placeholder='Расскажите о своей проблеме подробнее или прикрепите результаты исследования. Врач получит эту информацию до приема'
                  />
                  <div className={Styles.load__container}>
                    <img src={loadImg} alt='foto' className={Styles.load__img} />
                    <img src={loadImg} alt='foto' className={Styles.load__img} />
                    <img src={loadImg} alt='foto' className={Styles.load__img} />
                    <div className={Styles.load__doc}>
                      <img src={clip} alt='clip' />
                      Результаты о... .docx
                    </div>
                    {desktop && (
                      <div className={Styles.load__wrap}>
                        <input type='file' id='fileid' onChange={props.onChange} />
                        <label className={Styles.load__button} htmlFor='fileid'>
                          <img src={plus} />
                        </label>
                      </div>
                    )}
                  </div>
                  {dataById?.status === 'planned' && (
                    <div>
                      {!editLoadDescription ? (
                        <div className={Styles.edit__container}>
                          <p className={Styles.text__warning}>
                            <img src={warning} />
                            Вы можете изменить свое обращение до 8 января 07:30
                          </p>

                          <button onClick={() => setEditLoadDescription(true)} className={Styles.edit__button}>
                            <img src={pencil} />
                            Редактировать
                          </button>
                        </div>
                      ) : (
                        <div className={Styles.button_wrap}>
                          <ButtonColor value='Сохранить' onClick={() => setEditLoadDescription(false)} />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
            {dataById?.consultation_type && desktop && (
              <Sidebar>
                <TotalInformation />
                <DoctorInformation />
                <TotalDetails />
                <p className={Styles.mark}>
                  Изменить дату и время приема можно, написав в техническую поддержку сервиса
                </p>
              </Sidebar>
            )}
          </div>
        </>
      )}
    </>
  )
}
