import { ButtonColor } from '@components/ui/ButtonColor'
import { DoctorInformation } from '../TypeOfConsultation/components/DoctorInfo'
import React, { useEffect, useState } from 'react'
import { Total } from '../Total'
import Styles from './style.module.scss'
import 'react-calendar/dist/Calendar.css'
import { QuestionIcon } from '@components/ui/QuestionIcon'
import { CalendarSmall } from '../../../../components/CalendarSmall'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import classNames from 'classnames/bind'
import { createAppointment } from '../../redux/consultationSlicer'
import { DrawerPanel } from '@components/Drawer'
import useWindowSize from '../../../../helpers/useWindowSizeHook'
import { TransitionsModal } from '@components/Modal'
import moment from 'moment'
import { MobileHeader } from '../MobileHeader'
import { changeTitle, mobileState, mobileStatePagination, setFinishStep } from '../../redux/choiсeConsultationSlicer'
import { Sidebar } from '../SideBar'
import { InputCustom } from '@components/InputCustom'
import { changeUserInfo, getUser } from '../../../authorization/redux/authSlice'

export const PersonalData = () => {
  const dataHandler = useAppSelector((state) => state.consultationPage.data)
  const user = useAppSelector((state) => state.auth.user.info)
  const { width } = useWindowSize()
  const desktop = width >= 829

  const [isActive, setIsActive] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const birthDay = () => {
    if (typeof user.birthday === 'string') {
      return moment(user.birthday, 'YYYY-MM-DD').format('DD.MM.YYYY')
    }
    return null
  }
  const [dayOfBirth, setDayOfBirth] = useState(birthDay)

  useEffect(() => {
    setDayOfBirth(dayOfBirth)
  }, [birthDay])

  const dispatch = useAppDispatch()

  const switchBtn = classNames(Styles.switch, {
    [`${Styles.switch_active}`]: isActive,
  })
  const handle = () => {
    dispatch(changeUserInfo(values))
      .then(() => dispatch(getUser()))
      .then(() => {
        setValues(null)
      })
    dispatch(
      createAppointment({
        doctor: dataHandler.doctor,
        consultation_type: dataHandler.consultation_type,
        description: dataHandler.valueOptional,
        is_online: dataHandler.is_online,
        time_reception: dataHandler.selectTime,
        day_reception: dataHandler.day_reception,
      }),
    )
    dispatch(setFinishStep(true))
  }

  const pagination = useAppSelector((state) => state.choieConsultationPage.list)
  const [values, setValues] = useState({
    first_name: user.first_name,
    gender: user.gender,
    phone: user.phone,
    birthday: birthDay,
  })
  const handleChange = (e) => {
    const { name, value } = e.currentTarget
    setValues({ ...values, [name]: value })
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])
  return (
    <div className={`${Styles.container} ${pagination[3].mobile && Styles.reference__mobile}`}>
      <MobileHeader
        title='Дата и время'
        onClick={() => {
          dispatch(mobileState({ id: 3, value: false }))
          dispatch(mobileStatePagination(false))
          dispatch(changeTitle({ id: 3, value: `${user.first_name}, ${user.phone}` }))
        }}
      />
      <div className={Styles.right}>
        <form className={Styles.content}>
          {/* <h2 className={Styles.form__title}>Заполните личные данные</h2> */}
          <label className={Styles.label} htmlFor='telSave'>
            Телефон&#42;
          </label>

          <input className={Styles.input_save} value={user.phone} readOnly />
          <div className={Styles.wrap}>
            <div onClick={() => setIsActive(!isActive)} className={switchBtn} />
            <span className={Styles.mark}>Хочу использовать другой номер</span>
          </div>
          {isActive && (
            <InputCustom
              labelName='Другой номер&#42;'
              inputType='tel'
              inputName='phone'
              width='270px'
              onChange={handleChange}
            />
          )}
          <InputCustom
            labelName='Имя&#42;'
            inputType='text'
            inputName='first_name'
            width='320px'
            inputValue={values.first_name}
            onChange={handleChange}
          />
          <InputCustom
            labelName='Дата рождения&#42;'
            labelChildren={
              <QuestionIcon
                text='Врач будет использовать ваш возраст для составления медзаключения'
                className={Styles.question}
              />
            }
            placeholder='___.___.______'
            inputType='text'
            inputName='birthday'
            width='200px'
            inputValue={dayOfBirth}
            onClick={() => setShowCalendar(true)}
            Inputchildren={
              desktop ? (
                <TransitionsModal
                  isOpenModal={showCalendar}
                  setModalOpened={() => setShowCalendar((isOpen) => !isOpen)}
                  className={Styles.modal__container}
                  opacity='0'
                  style={{ position: 'absolute', top: '0', left: '0', inset: 'auto' }}
                  disablePortal
                >
                  <CalendarSmall
                    birth={setDayOfBirth}
                    changeShowCalendar={setShowCalendar}
                    setValues={setValues}
                    values={values}
                  />
                </TransitionsModal>
              ) : (
                <DrawerPanel
                  closeIcon
                  width='100%'
                  anchor='bottom'
                  open={showCalendar}
                  onClose={() => setShowCalendar((isOpen) => !isOpen)}
                >
                  <CalendarSmall
                    birth={setDayOfBirth}
                    changeShowCalendar={setShowCalendar}
                    setValues={setValues}
                    values={values}
                  />
                </DrawerPanel>
              )
            }
          />

          <label className={Styles.label} htmlFor='firstName'>
            Пол&#42;
          </label>
          <div className={Styles.wrap}>
            <div className={Styles.radio__container}>
              <input
                className={Styles.radio}
                type='radio'
                id='color1'
                name='gender'
                value='male'
                onChange={(e) => {
                  // handlerChange(e)
                }}
                defaultChecked={user.gender === 'male'}
              />
              <label htmlFor='color1'>Мужской</label>
            </div>

            <div className={Styles.radio__container}>
              <input
                className={Styles.radio}
                type='radio'
                id='color2'
                name='gender'
                value='female'
                onChange={(e) => {
                  // handlerChange(e)
                }}
                defaultChecked={user.gender === 'female'}
              />
              <label htmlFor='color2'>Женский</label>
            </div>
          </div>
        </form>
        {!desktop && (
          <div className={Styles.sidebar_mobile}>
            <Total consultation date isBorder place />
          </div>
        )}
        <div className={Styles.buttons__container}>
          <ButtonColor value='Перейти к оплате' onClick={handle} />
          <p className={Styles.text}>
            Нажимая на кнопку, я даю{` `}
            <span>
              <a href='/' className={Styles.link}>
                согласие на обработку персональных данных
              </a>
            </span>
          </p>
        </div>
        {!desktop && (
          <div className={Styles.sidebar_mobile}>
            <DoctorInformation />
          </div>
        )}
      </div>
      {desktop && (
        <Sidebar>
          <Total consultation date isBorder place />
          <DoctorInformation />
        </Sidebar>
      )}
    </div>
  )
}
