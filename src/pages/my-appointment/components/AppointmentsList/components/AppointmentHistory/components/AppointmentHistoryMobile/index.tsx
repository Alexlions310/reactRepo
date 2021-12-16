import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Styles from './style.module.scss'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
import closeIcon from '@icons/close-blue.svg'
import { AppointmentHistoryCardMobile } from '../AppointmentHistoryCardMobile'
import { DrawerPanel } from '../../../../../../../../components/Drawer'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { ButtonColor } from '@components/ui/ButtonColor'
import { getAppointmentListDoneMore } from '../../../../../../redux/appointmentSlicer'
import useWindowSize from '@helpers/useWindowSizeHook'
interface CardsProps {
  statusDone: string
  dataDone: any
}
export const AppointmentHistoryMobile: React.FC<CardsProps> = (props) => {
  const dispatch = useAppDispatch()
  const [showDrawer, setShowDrawer] = useState(false)
  const paginationDone = useAppSelector((state) => state.myAppointment.paginationDone)
  const pageDone = useAppSelector((state) => state.myAppointment.pageDone)
  const showMore = () => {
    dispatch(getAppointmentListDoneMore(pageDone))
  }
  const { width } = useWindowSize()
  const desktop = width >= 829
  return (
    <div className={Styles.history}>
      <div className={Styles.slider}>
        <Swiper spaceBetween={10} slidesPerView={1} pagination={{ clickable: true }}>
          {props.dataDone &&
            props.statusDone === 'success' &&
            props.dataDone.slice(0, 5).map((item) => (
              <>
                <SwiperSlide>
                  <AppointmentHistoryCardMobile
                    key={item.id}
                    title={item.consultation_type.direction.title}
                    date={item.day_reception}
                    conclusion={item.medical_report}
                    time={item.time_reception}
                    id={item.id}
                  />
                </SwiperSlide>
              </>
            ))}
        </Swiper>
      </div>
      {props.dataDone && props.statusDone === 'success' && (
        <button className={Styles.more} onClick={() => setShowDrawer(true)}>
          Смотреть еще {props.dataDone.length - 5} записей
        </button>
      )}
      {!desktop && (
        <DrawerPanel width='100%' anchor='top' open={showDrawer} onClose={() => setShowDrawer((isOpen) => !isOpen)}>
          <div className={Styles.navigation}>
            <h3 className={Styles.title}>Прошедшие записи</h3>
            <button className={Styles.close} onClick={() => setShowDrawer(false)}>
              <img src={closeIcon} alt='close' />
            </button>
          </div>
          <div className={Styles.container}>
            {props.dataDone &&
              props.statusDone === 'success' &&
              props.dataDone
                .slice(5)
                .map((item) => (
                  <AppointmentHistoryCardMobile
                    key={item.id}
                    title={item.consultation_type.direction.title}
                    date={item.day_reception}
                    conclusion={item.medical_report}
                    time={item.time_reception}
                    id={item.id}
                  />
                ))}
            {paginationDone && (
              <div className={Styles.button__container}>
                <ButtonColor value='Показать еще' onClick={showMore} />
              </div>
            )}
          </div>
        </DrawerPanel>
      )}
    </div>
  )
}
