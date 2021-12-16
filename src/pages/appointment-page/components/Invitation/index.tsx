import { MapComponent } from '../../../../components/ui/Map'
import React, { useEffect, useState } from 'react'
import Styles from './style.module.scss'
import bell from '@icons/bell-black.svg'
import bellRing from '@icons/bell-ring.svg'
import comix from '@icons/comix.svg'
import { SelectComponent } from '../../../../components/SelectComponent'
import { ButtonTransparent } from '@components/ui/ButtonTransparent'
import { BorderLine } from '@components/ui/BorderLine'
import { Link } from 'react-router-dom'
import { ButtonWithBorder } from '@components/ui/ButtonWithBorder'
import { MapModal } from '@components/ui/MapModal'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import useWindowSize from '@helpers/useWindowSizeHook'
import { Total } from '../Total'
import { Sidebar } from '../SideBar'
import { DoctorInformation } from '../TypeOfConsultation/components/DoctorInfo'
import { InputCustom } from '../../../../components/InputCustom'
import { changeUserInfo } from '../../../authorization/redux/authSlice'

export const Invitation = () => {
  const dispatch = useAppDispatch()
  const [valueSelect, setValueSelect] = useState('')
  const responseData = useAppSelector((state) => state.consultationPage.responseData)
  const userData = useAppSelector((state) => state.auth.user.info)
  const dataHandler = useAppSelector((state) => state.consultationPage.data)
  const isOnline = responseData.is_online
  const [isOpenModal, setModalOpened] = useState(false)
  const openModalMap = (e) => {
    e.preventDefault()
    setModalOpened(!isOpenModal)
  }
  const isValid = useAppSelector((state) => state.auth.isValidInput.email)
  const [showSuccessContainer, setShowSuccessContainer] = useState(false)
  const user = useAppSelector((state) => state.auth.user.info)
  const [email, setEmail] = useState(user.email)
  const handleChange = (e) => {
    setEmail(e.target.value)
    console.log(email)
    console.log(e.target.value)
  }
  const sendReminderEmail = (e) => {
    e.preventDefault()
    if (isValid) {
      setShowSuccessContainer(true)
      dispatch(changeUserInfo(email))
    }
  }
  const sendReminderSMS = (e) => {
    e.preventDefault()
    console.log('sms')
  }
  const { width } = useWindowSize()
  const desktop = width >= 829
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])
  return (
    <div className={Styles.main__content}>
      <MapModal isOpenModal={isOpenModal} setModalOpened={setModalOpened} />
      <h1 className={Styles.title}>{userData.first_name}, ждем вас на прием</h1>
      <div className={Styles.container}>
        <div className={Styles.right}>
          <div className={Styles.content}>
            {isOnline ? (
              <p className={Styles.text}>
                За 10 минут до начала приема врач пришлет в чат приглашение на конференцию в Zoom. Не опаздывайте
              </p>
            ) : (
              <div className={Styles.map__container} onClick={openModalMap}>
                <MapComponent className={Styles.wrap} />
                <p className={Styles.text}>
                  Консультация пройдет по адресу: <span className={Styles.text_bold}>{dataHandler.address}</span>
                </p>
              </div>
            )}

            <div className={`${Styles.wrapper} ${Styles.wrapper_bg}`}>
              <img src={showSuccessContainer ? bellRing : bell} alt='bell' />
              <div className={Styles.description}>
                <h6 className={Styles.subtitle}>Напомнить о приеме?</h6>
                {!showSuccessContainer && <p className={Styles.description__text}>Напомним за день до даты приема</p>}
                {showSuccessContainer && (
                  <p className={Styles.description__text}>
                    Пришлем напоминание за день до приема на <span className={Styles.text_bold}>{email}</span>
                  </p>
                )}
                {!showSuccessContainer && (
                  <div className={Styles.select__wrapper}>
                    <SelectComponent
                      setValueSelect={setValueSelect}
                      value1='Выбрать способ'
                      value2='В смс сообщении'
                      value3='По почте'
                      value4='В личном кабинете'
                    />
                    {valueSelect === 'По почте' && (
                      <>
                        <form className={Styles.input__container} noValidate>
                          <InputCustom
                            inputType='email'
                            inputName='email'
                            placeholder='Введите ваш email'
                            onChange={handleChange}
                          />
                        </form>
                        <ButtonTransparent
                          value='Напомнить'
                          onClick={sendReminderEmail}
                          styleButton={Styles.buttot_transparent}
                        />
                      </>
                    )}
                    {valueSelect === 'В смс сообщении' && (
                      <ButtonTransparent
                        value='Напомнить'
                        onClick={sendReminderSMS}
                        styleButton={Styles.buttot_transparent}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className={`${Styles.wrapper} ${Styles.wrapper_mobile}`}>
              <img src={comix} alt='comix' className={Styles.comix} />
              <div className={Styles.description}>
                <h6 className={Styles.subtitle}>Чат с врачем</h6>
                <p className={`${Styles.description__text} ${Styles.description__text_mr}`}>
                  Теперь у вас есть личный чат с врачем. Он находится в панели слева. Консультации с врачем в чате
                  проходят по будням 3 раза в неделю
                </p>
              </div>
            </div>
            <div>
              <BorderLine />
            </div>

            <p className={`${Styles.text} ${Styles.text_mr}`}>
              Посмотреть подробности записи можно в разделе{' '}
              <Link to='/my-appointment' className={Styles.link}>
                мои приёмы
              </Link>
            </p>
            <Link to='/my-appointment' className={Styles.link}>
              <ButtonWithBorder value='Перейти в мои приемы' />
            </Link>
          </div>
          {!desktop && (
            <div className={Styles.sidebar_mobile}>
              <Total consultation date isBorder place />
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
    </div>
  )
}
