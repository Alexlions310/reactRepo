import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Styles from './style.module.scss'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'

import { DoctorVisitMobile } from '../DoctorVisit/components/DoctorVisitMobile'

export const DoctorHistoryMobile: React.FC = () => {
  return (
    <div className={Styles.history}>
      <div className={Styles.slider}>
        <Swiper spaceBetween={10} slidesPerView={1} pagination={{ clickable: true }}>
          <SwiperSlide>
            <DoctorVisitMobile />
          </SwiperSlide>
          <SwiperSlide>
            <DoctorVisitMobile />
          </SwiperSlide>
          <SwiperSlide>
            <DoctorVisitMobile />
          </SwiperSlide>
          <SwiperSlide>
            <DoctorVisitMobile />
          </SwiperSlide>
        </Swiper>
      </div>
      <button className={Styles.more}>Смотреть еще 5 записей</button>
    </div>
  )
}
