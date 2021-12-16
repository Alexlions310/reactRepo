import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Styles from './style.module.scss'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'

import { DoctorPatientVisitMobile } from '../DoctorPatientVisit/components/DoctorPatientVisitMobile'

export const DoctorPatientHistoryMobile: React.FC = () => {
  return (
    <div className={Styles.history}>
      <span className={Styles.caption}>Все записи пациента</span>
      <div className={Styles.slider}>
        <Swiper spaceBetween={10} slidesPerView={1} pagination={{ clickable: true }}>
          <SwiperSlide>
            <DoctorPatientVisitMobile />
          </SwiperSlide>
          <SwiperSlide>
            <DoctorPatientVisitMobile />
          </SwiperSlide>
          <SwiperSlide>
            <DoctorPatientVisitMobile />
          </SwiperSlide>
          <SwiperSlide>
            <DoctorPatientVisitMobile />
          </SwiperSlide>
        </Swiper>
      </div>
      <button className={Styles.more}>Смотреть еще 5 записей</button>
    </div>
  )
}
