import React, { useState } from 'react'
import Styles from './style.module.scss'
import arrow from '@icons/arrow-large-blue.svg'
import close from '@icons/close-blue.svg'
import { DrawerPanel } from '@components/Drawer'
import { setShowMainPage } from '../../redux/appointmentSlicer'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import img from '@icons/consultation1.svg'
import plus from '@icons/plus.svg'
import clip from '@icons/clip.svg'
import warning from '@icons/warning.svg'
import pencil from '@icons/pencil.svg'
import loadImg from '@images/attachment.png'
import { AppointmentInformation } from '../AppointmentInformation'
import { TotalInformation } from '../AppointmentDetails/components/TotalInformation'
import { DoctorInformation } from '../../../appointment-page/components/TypeOfConsultation/components/DoctorInfo'
import { TotalDetails } from '../AppointmentDetails/components/TotalDetails'
import { BorderLine } from '@components/ui/BorderLine'
import { ButtonColor } from '@components/ui/ButtonColor'
import { editAppointmentById } from '../../../appointment-page/redux/consultationSlicer'

export const DrawerMobileById = () => {
  const dispatch = useAppDispatch()
  const showMainPage = useAppSelector((state) => state.myAppointment.showMainPage)
  const dataById = useAppSelector((state) => state.myAppointmentById.dataById)
  const [showEditDrawer, setShowEditDrawer] = useState(false)
  const [description, setDescription] = useState(dataById.desctiption)
  const update = { description }
  const updateAppointment = () => {
    dispatch(editAppointmentById(dataById.id, update))
  }
  return (
    <>
      {dataById && (
        <>
          <DrawerPanel width='100%' anchor='left' open={!showMainPage} onClose={() => dispatch(setShowMainPage(true))}>
            <div className={Styles.container}>
              <div className={Styles.navigation}>
                <button className={Styles.arrow} onClick={() => dispatch(setShowMainPage(true))}>
                  <img src={arrow} />
                </button>

                <h3 className={Styles.title}>Запись на прием</h3>
                <button className={Styles.close} onClick={() => dispatch(setShowMainPage(true))}>
                  <img src={close} alt='close' />
                </button>
              </div>
              <div className={Styles.content}>
                <AppointmentInformation />
                <TotalInformation />
                <div className={Styles.details__container}>
                  <h4 className={Styles.subtitle}>Ваше сообщение к консультации</h4>
                  <div className={Styles.input_container}>
                    <p className={Styles.input}>
                      {dataById?.description === ''
                        ? 'Расскажите о своей проблеме подробнее или прикрепите результаты исследования. Врач получит эту информацию до приема'
                        : dataById?.description}
                    </p>
                  </div>
                  <BorderLine />
                  <div className={Styles.load__container}>
                    <img src={loadImg} alt='foto' className={Styles.load__img} />
                    <img src={loadImg} alt='foto' className={Styles.load__img} />
                    <img src={loadImg} alt='foto' className={Styles.load__img} />
                    <div className={Styles.load__doc}>
                      <img src={clip} alt='clip' />
                      Результаты о... .docx
                    </div>
                  </div>
                  {dataById?.status === 'planned' && (
                    <div>
                      <div className={Styles.edit__container}>
                        <p className={Styles.text__warning}>
                          <img src={warning} />
                          Вы можете изменить свое обращение до 8 января 07:30
                        </p>

                        <button onClick={() => setShowEditDrawer(true)} className={Styles.edit__button}>
                          <img src={pencil} />
                          Редактировать
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <DoctorInformation />
                <TotalDetails />
                <p className={Styles.mark}>
                  Изменить дату и время приема можно, написав в техническую поддержку сервиса
                </p>
              </div>
            </div>
          </DrawerPanel>
          <DrawerPanel width='100%' anchor='left' open={showEditDrawer} onClose={() => setShowEditDrawer(false)}>
            <div className={Styles.navigation}>
              <button className={Styles.arrow} onClick={() => setShowEditDrawer(false)}>
                <img src={arrow} />
              </button>

              <h3 className={Styles.title}>Сообщение к консультации</h3>
              <button className={Styles.close} onClick={() => setShowEditDrawer(false)}>
                <img src={close} alt='close' />
              </button>
            </div>
            <div className={Styles.content}>
              <textarea
                className={`${Styles.input} ${Styles.input_edit}`}
                value={description}
                placeholder='Расскажите о своей проблеме подробнее или прикрепите результаты исследования. Врач получит эту информацию до приема'
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className={Styles.load__container}>
                <div className={`${Styles.load__doc} ${Styles.load__doc_drawer}`}>
                  <img src={clip} alt='clip' />
                  Результаты о... .docx
                </div>
                <img src={loadImg} alt='foto' className={Styles.load__img} />
                <img src={loadImg} alt='foto' className={Styles.load__img} />
                <img src={loadImg} alt='foto' className={Styles.load__img} />

                <div className={Styles.load__wrap}>
                  <input type='file' id='fileid' />
                  <label className={Styles.load__button} htmlFor='fileid'>
                    <img src={plus} />
                  </label>
                </div>
              </div>
              <ButtonColor value='Сохранить' onClick={updateAppointment} />
            </div>
          </DrawerPanel>
        </>
      )}
    </>
  )
}
