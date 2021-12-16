import React, { useEffect, useState } from 'react'
import Styles from './style.module.scss'
import arrow from '@icons/arrow-right-blue.svg'
import { BorderLine } from '@components/ui/BorderLine'
import clock from '@icons/clock.svg'
import monitor from '@icons/monitor.svg'
import users from '@icons/users.svg'
import logo from '@icons/zoom.svg'
import { QuestionIcon } from '@components/ui/QuestionIcon'
import navigation from '@icons/navigation.svg'
import { NearestReception } from './components/NearestReception'
import { Total } from '../Total'
import { DoctorInformation } from './components/DoctorInfo'
import { AddDetailInfo } from './components/AddDetailInfo'
import { ButtonColor } from '@components/ui/ButtonColor'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import {
  changeTitle,
  consultationActive,
  mobileState,
  mobileStatePagination,
  setLoadContainer,
  setStateTotalComponent,
} from '../../redux/choiсeConsultationSlicer'
import { setData } from '../../redux/consultationSlicer'
import { CustomRadioInput } from './components/CustomRadioInput'
import { MapModal } from '@components/ui/MapModal'
import { Description } from './components/Description'
import { LoadingFileContainer } from './components/LoadingFileContainer'
import { MobileHeader } from '../MobileHeader'
import useWindowSize from '@helpers/useWindowSizeHook'
import { Sidebar } from '../SideBar'
import { ButtonTransparent } from '@components/ui/ButtonTransparent'

export const TypeOfConsultation = () => {
  const dispatch = useAppDispatch()
  const defaultPrice = useAppSelector((state) => state.choieConsultationPage.stateTotalComponent)
  const loadContainer = useAppSelector((state) => state.choieConsultationPage.loadContainer)
  const idConsultation = useAppSelector((state) => state.consultationsList.selectConsultationById)
  const data = useAppSelector((state) => state.consultationsList.data)
  const selectConsultation = data.find((item) => item.id === idConsultation)
  const dataHandler = useAppSelector((state) => state.consultationPage.data)
  const type = dataHandler.consultation_type ? selectConsultation.types[0].title : selectConsultation.types[1].title
  const way = dataHandler.is_online ? 'Онлайн' : 'Лично'
  const [errorType, setErrorType] = useState(false)
  const [errorWay, setErrorWay] = useState(false)
  const select = (e) => {
    if (e.target.id === 'radio-1') {
      dispatch(setData({ key: 'priceType', value: selectConsultation.types[0].price }))
      dispatch(setData({ key: 'consultation_type', value: Number(e.target.value) }))
      dispatch(setLoadContainer(false))
      setErrorType(false)
      dispatch(setStateTotalComponent(false))
    }
    if (e.target.id === 'radio-2') {
      dispatch(setData({ key: 'priceType', value: selectConsultation.types[1].price }))
      dispatch(setData({ key: 'consultation_type', value: Number(e.target.value) }))
      dispatch(setLoadContainer(true))
      setErrorType(false)
      dispatch(setStateTotalComponent(false))
    }
    if (e.target.id === 'radio-3') {
      dispatch(setData({ key: 'priceWay', value: '0' }))
      dispatch(setData({ key: 'is_online', value: true }))
      setErrorWay(false)
      dispatch(setStateTotalComponent(false))
    }
    if (e.target.id === 'radio-4') {
      dispatch(setData({ key: 'priceWay', value: '1500' }))
      dispatch(setData({ key: 'is_online', value: false }))
      setErrorWay(false)
      dispatch(setStateTotalComponent(false))
    }
  }

  const handle = () => {
    if (dataHandler.consultation_type === null && dataHandler.is_online === null) {
      setErrorType(true)
      setErrorWay(true)
    }
    if (dataHandler.consultation_type !== null && dataHandler.is_online === null) {
      setErrorWay(true)
      setErrorType(false)
    }
    if (dataHandler.consultation_type === null && dataHandler.is_online !== null) {
      setErrorType(true)
      setErrorWay(false)
    }
    if (dataHandler.consultation_type !== null && dataHandler.is_online !== null) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
      dispatch(consultationActive(2))
      dispatch(changeTitle({ id: 1, value: `${way}, ${type}` }))
      dispatch(setData({ key: 'doctor', value: selectConsultation.doctors[0].id }))
      dispatch(mobileState({ id: 2, value: true }))
    }
  }
  const [isOpenModal, setModalOpened] = useState(false)
  const openModalMap = (e) => {
    e.preventDefault()
    setModalOpened(!isOpenModal)
  }
  const pagination = useAppSelector((state) => state.choieConsultationPage.list)
  const { width } = useWindowSize()
  const desktop = width >= 829
  const [mobileStep2, setMobileStep2] = useState(false)
  const address = selectConsultation.doctors[0].reception_address
  useEffect(() => {
    dispatch(setData({ key: 'address', value: address.address }))
    dispatch(setData({ key: 'coordinateX', value: Number(address.lat_position) }))
    dispatch(setData({ key: 'coordinateY', value: Number(address.long_position) }))
  }, [address])
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])
  return (
    <div className={`${Styles.reference__container} ${pagination[1].mobile && Styles.reference__mobile}`}>
      <MobileHeader
        title='Подробнее о консультации'
        onClick={() => {
          dispatch(mobileState({ id: 1, value: false }))
          dispatch(mobileStatePagination(false))
          setMobileStep2(false)
        }}
      />
      <MapModal isOpenModal={isOpenModal} setModalOpened={setModalOpened} />
      <div className={Styles.button_back}>
        <ButtonTransparent
          value='Назад к выбору направления'
          onClick={() => {
            dispatch(consultationActive(0))
            dispatch(setData({ key: 'is_online', value: false }))
            dispatch(setData({ key: 'consultation_type', value: null }))
          }}
          before
        />
      </div>
      <div className={Styles.main__conteiner}>
        <div className={Styles.wrapper__container}>
          {!mobileStep2 && (
            <div className={Styles.details__container}>
              <header className={Styles.header}>
                <div className={Styles.header__wrap}>
                  <img src={selectConsultation.image} className={Styles.img} alt='reference' />
                  <h4 className={Styles.title}>{selectConsultation.title}</h4>
                </div>
                {desktop && (
                  <div className={Styles.wrapper}>
                    <img src={clock} className={Styles.icon} alt='clock' />
                    <div className={Styles.duration}>{selectConsultation.types[0].duration}</div>
                  </div>
                )}
              </header>
              {desktop && <BorderLine />}

              <Description selectConsultation={selectConsultation} />
            </div>
          )}
          {(desktop || mobileStep2) && (
            <form className={Styles.form}>
              <h3 className={Styles.checkbox__title}>Выберите тип консультации</h3>
              <div className={Styles.checkbox__container}>
                <CustomRadioInput
                  onChange={select}
                  htmlFor='radio-1'
                  id='radio-1'
                  title={selectConsultation.types[0].title}
                  price={Number(selectConsultation.types[0].price)}
                  text={selectConsultation.types[0].chosen_text}
                  name='type-consultation'
                  value={selectConsultation.types[0].id}
                  error={errorType}
                  checked={dataHandler.consultation_type === selectConsultation.types[0].id}
                />
                <CustomRadioInput
                  onChange={select}
                  htmlFor='radio-2'
                  id='radio-2'
                  title={selectConsultation.types[1].title}
                  price={selectConsultation.types[1].price}
                  text={selectConsultation.types[1].chosen_text}
                  name='type-consultation'
                  value={selectConsultation.types[1].id}
                  error={errorType}
                  checked={dataHandler.consultation_type === selectConsultation.types[1].id}
                />
              </div>
              {(selectConsultation.direction_type === 'genetic' || selectConsultation.direction_type === 'check-up') &&
                loadContainer && <LoadingFileContainer />}
              <h3 className={Styles.checkbox__title}>Как будем проводить консультацию?</h3>
              <div className={Styles.checkbox__container}>
                <div className={Styles.checkbox__wrap}>
                  <CustomRadioInput
                    onChange={select}
                    name='way-consultation'
                    htmlFor='radio-3'
                    id='radio-3'
                    title='Онлайн'
                    src={monitor}
                    error={errorWay}
                    checked={dataHandler.priceWay === '0'}
                  />
                  <div className={Styles.checkbox__mark}>
                    Онлайн консультация не отличается от личного приема. В день консультации мы отправим вам ссылку в
                    Zoom
                    <QuestionIcon text='Zoom — программа для организации видеоконференций' src={logo} />
                  </div>
                </div>
                <div className={Styles.checkbox__wrap}>
                  <CustomRadioInput
                    onChange={select}
                    name='way-consultation'
                    htmlFor='radio-4'
                    id='radio-4'
                    title='Лично'
                    src={users}
                    price='+ 1 500'
                    error={errorWay}
                    checked={dataHandler.priceWay === '1500'}
                  />
                  <div className={Styles.checkbox__mark}>
                    <p className={Styles.checkbox__text}>
                      Только для Омской области. Консультация пройдет по адресу:{' '}
                      <span className={Styles.checkbox__text_bold}>{dataHandler.address}</span>
                    </p>
                    <button className={Styles.button_trasparent} onClick={openModalMap}>
                      <img className={Styles.navigation} src={navigation} />
                      Смотреть на карте
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
          {(desktop || mobileStep2) && selectConsultation.direction_type === 'common' && (
            <AddDetailInfo list={selectConsultation.helped_answers} />
          )}
          {mobileStep2 && (
            <>
              <NearestReception item={selectConsultation.available_time} />
              <Total defaultPrice={defaultPrice} consultation={false} date={false} isBorder={false} />
            </>
          )}
          {(desktop || mobileStep2) && (
            <div className={`${Styles.buttons__container} ${Styles.button_mob}`}>
              <ButtonColor value='Перейти к выбору даты' onClick={handle} type='submit' />
              <div className={Styles.error__handler}>
                {errorType && errorWay && 'Выберите тип приема и консультации'}
                {errorType && !errorWay && 'Выберите тип приема'}
                {!errorType && errorWay && 'Выберите тип консультации'}
              </div>
            </div>
          )}
        </div>
        {desktop && (
          <Sidebar>
            <Total defaultPrice={defaultPrice} consultation={false} date={false} isBorder={false} />
            <NearestReception item={selectConsultation.available_time} />
            <DoctorInformation />
          </Sidebar>
        )}
        {!desktop && (
          <>
            {!mobileStep2 && (
              <>
                <DoctorInformation />
                <NearestReception item={selectConsultation.available_time} />
                <Total defaultPrice={defaultPrice} consultation={false} date={false} isBorder={false} />
                <ButtonColor
                  className={Styles.button_mob}
                  value='Перейти к записи на прием'
                  onClick={() => setMobileStep2(true)}
                />
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}
