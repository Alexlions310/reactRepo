import React, { useState } from 'react'
import Styles from './style.module.scss'
import for1 from '@images/for-you1.png'
import for2 from '@images/for-you2.png'
import for3 from '@images/for-you3.png'
import for4 from '@images/for-you4.png'
import arrow from '@icons/arrow-right-blue.svg'
import arrowRight from '@icons/arrow-right.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import SwiperCore, { Navigation } from 'swiper'

import 'swiper/components/pagination/pagination.scss'
import { Events } from '@components/user/Events'

SwiperCore.use([Navigation])
export const ForYou = () => {
  const [forYouActive, setForYouActive] = useState(true)
  const [eventActive, setEventActive] = useState(false)
  const isActive = () => {
    setEventActive(!eventActive)
    setForYouActive(!forYouActive)
  }
  return (
    <>
      <h2 className={Styles.title}>Для вас</h2>
      <div className={Styles.button__container_mobile}>
        <button
          onClick={isActive}
          className={forYouActive ? `${Styles.button} ${Styles.button_active}` : Styles.button}
        >
          Для вас
        </button>
        <button onClick={isActive} className={eventActive ? `${Styles.button} ${Styles.button_active}` : Styles.button}>
          События
        </button>
      </div>
      {forYouActive ? (
        <Swiper
          className={Styles.slider__container}
          loop
          breakpoints={{
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            830: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            300: {
              spaceBetween: 10,
              slidesPerView: 'auto',
              direction: 'vertical',
              loop: false,
            },
          }}
          navigation={{
            nextEl: '.next-card',
          }}
        >
          <SwiperSlide className={Styles.foryou}>
            <img className={Styles.foryou__img} src={for1} alt='for-you' />
            <h6 className={Styles.foryou__title}>Нутрицевтики. Мифы</h6>
            <p className={Styles.foryou__text}>В статье развенчиваем мифы о нутрицевтиках</p>
            <button className={Styles.foryou__button}>
              Читать <img className={Styles.arrow} src={arrow} alt='arrow' />
            </button>
          </SwiperSlide>
          <SwiperSlide className={Styles.foryou}>
            <img className={Styles.foryou__img} src={for2} alt='for-you' />
            <h6 className={Styles.foryou__title}>Нутрицевтики.</h6>
            <p className={Styles.foryou__text}>нутрицевтиках</p>
            <button className={Styles.foryou__button}>
              Читать <img className={Styles.arrow} src={arrow} alt='arrow' />
            </button>
          </SwiperSlide>
          <SwiperSlide className={Styles.foryou}>
            <img className={Styles.foryou__img} src={for3} alt='for-you' />
            <h6 className={Styles.foryou__title}>Нутрицевтики. Мифы</h6>
            <p className={Styles.foryou__text}>В статье развенчиваем мифы о нутрицевтиках</p>
            <button className={Styles.foryou__button}>
              Читать <img className={Styles.arrow} src={arrow} alt='arrow' />
            </button>
          </SwiperSlide>
          <SwiperSlide className={Styles.foryou}>
            <img className={Styles.foryou__img} src={for4} alt='for-you' />
            <h6 className={Styles.foryou__title}>Нутрицевтики. Мифы</h6>
            <p className={Styles.foryou__text}>В статье развенчиваем мифы о нутрицевтиках</p>
            <button className={Styles.foryou__button}>
              Читать <img className={Styles.arrow} src={arrow} alt='arrow' />
            </button>
          </SwiperSlide>
          <SwiperSlide className={Styles.foryou}>
            <img className={Styles.foryou__img} src={for3} alt='for-you' />
            <h6 className={Styles.foryou__title}>Нутрицевтики. Мифы</h6>
            <p className={Styles.foryou__text}>В статье развенчиваем мифы о нутрицевтиках</p>
            <button className={Styles.foryou__button}>
              Читать <img className={Styles.arrow} src={arrow} alt='arrow' />
            </button>
          </SwiperSlide>
          <button className={`next-card ${Styles.navigation__button}`}>
            <img src={arrowRight} />
          </button>
        </Swiper>
      ) : null}
      {eventActive ? <Events /> : null}
    </>
  )
}
