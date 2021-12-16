import React, { useState } from 'react'
import Styles from './style.module.scss'
import onboarding1 from '@images/onboarding1.png'
import onboarding2 from '@images/onboarding2.png'
import onboarding3 from '@images/onboarding3.png'
import card1 from '@icons/onboarding-card1.svg'
import card2 from '@icons/onboarding-card2.svg'
import card3 from '@icons/onboarding-card3.svg'
import arrow from '@icons/arrow-right.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CardOnboadging } from './components/CardOnboarding'
import { Logo } from '@components/Logo'
import question from '@icons/question.svg'
import closeButton from '@icons/close-button-mobile.svg'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { ButtonBack } from './components/ButtonBack'
import { ButtonColor } from '@components/ui/ButtonColor'
import { QuestionIcon } from '@components/ui/QuestionIcon'
import { useHistory } from 'react-router'
import useWindowSize from '@helpers/useWindowSizeHook'

SwiperCore.use([Pagination, Navigation])

export const Onboarding = () => {
  const history = useHistory()
  const handlePassOnboarding = () => {
    history.push('/')
  }
  const [state, setState] = useState(false)
  const { width } = useWindowSize()
  const desktop = width >= 829
  return (
    <>
      <div className={Styles.onboarding__logo_container}>
        <Logo />
      </div>
      <div className={Styles.onboarding__container}>
        <button className={Styles.onboarding__button_ignor} onClick={handlePassOnboarding}>
          Пропустить
        </button>
        <ButtonBack value='Назад' />
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: '.next',
            prevEl: '.prev',
            disabledClass: 'button__slider_disable',
          }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className={Styles.onboarding__content}>
              <img className={Styles.onboarding__img} src={onboarding1} alt='img' />

              <h4 className={Styles.onboarding__title}>Привет!</h4>
              <p className={`${Styles.onboarding__text} ${Styles.onboarding__text_width_small}`}>
                Мы хотим немного рассказать о нашем сервисе. Это займет не больше 3 минут
              </p>
              <div className={Styles.onboarding__button_wrapper}>
                <ButtonColor className='next' value='Продолжить' />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={Styles.onboarding__content}>
              <h4 className={Styles.onboarding__title}>Что мы делаем?</h4>
              <p className={Styles.onboarding__text}>Мы помогаем со следующими проблемами</p>
              <Swiper
                className={Styles.card__container}
                breakpoints={{
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  830: {
                    slidesPerView: 3,
                    spaceBetween: 2,
                  },
                  480: {
                    slidesPerView: 1.4,
                  },
                  320: {
                    slidesPerView: 1.2,
                  },
                }}
                navigation={{
                  nextEl: '.next-card',
                }}
              >
                <SwiperSlide>
                  <CardOnboadging title='Выпадение волос' src={card1} />
                </SwiperSlide>
                <SwiperSlide>
                  <CardOnboadging title='Расшифровка анализов' src={card2} />
                </SwiperSlide>
                <SwiperSlide>
                  <CardOnboadging title='Подготовка к беременности' src={card3} />
                </SwiperSlide>
                <SwiperSlide>
                  <CardOnboadging title='Подбор правильного рациона' src={card3} />
                </SwiperSlide>
                <SwiperSlide>
                  <CardOnboadging title='Выпадение волос' src={card1} />
                </SwiperSlide>
                <SwiperSlide>
                  <CardOnboadging title='Расшифровка анализов' src={card2} />
                </SwiperSlide>
                <button className={`next-card ${Styles.card__button}`}>
                  <img src={arrow} />
                </button>
              </Swiper>

              <div className={Styles.onboarding__button_wrapper}>
                <ButtonColor className='next' value='Понятно' />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={Styles.onboarding__content}>
              <img className={Styles.onboarding__img} src={onboarding2} alt='img' />

              <h4 className={Styles.onboarding__title}>Что после консультации?</h4>
              <p className={`${Styles.onboarding__text} ${Styles.onboarding__text_width_large}`}>
                Врач создаст заключение в течение 3 дней после консультации и мы бережно разместим для вас все
                результаты на главном экране
              </p>
              <div className={Styles.onboarding__button_wrapper}>
                <ButtonColor className='next' value='Отлично' />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={Styles.onboarding__content}>
              <img className={Styles.onboarding__img} src={onboarding3} alt='img' />

              <h4 className={Styles.onboarding__title}>Чат с врачом</h4>
              <p className={`${Styles.onboarding__text} ${Styles.onboarding__text_width_middle}`}>
                После посещений первой консультации вы сможете задавать вопросы врачу в чате
              </p>
              <div className={Styles.onboarding__button_wrapper}>
                <ButtonColor className='next' value='Хорошо' />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={Styles.onboarding__content}>
              <img className={Styles.onboarding__img} src={onboarding2} alt='img' />

              <h4 className={Styles.onboarding__title}>Анализы и нутрицевтики</h4>
              <p className={`${Styles.onboarding__text} ${Styles.onboarding__text_width_middle}`}>
                У нас есть проверенные бренды нутрицевтиков и возможность приобрести лабораторные исследования онлайн
              </p>
              <div className={Styles.onboarding__button_wrapper}>
                <ButtonColor className='next' value='Отлично' />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={Styles.onboarding__content}>
              <img className={Styles.onboarding__img} src={onboarding2} alt='img' />
              <h4 className={Styles.onboarding__title}>
                Индивидуальные рекомендации
                {desktop && (
                  <QuestionIcon
                    text='Объяснение о том, что такие рекомендации являются общими и не заменят полноценную консультацию профессионального
        врача'
                  />
                )}
              </h4>
              <p className={`${Styles.onboarding__text} ${Styles.onboarding__text_width_middle}`}>
                Ответьте на вопросы из нашей анкеты и мы сформируем для вас личный план по питанию и нутрицевтикам.
                Хотите пройти опрос?{' '}
                <span className={Styles.container_qu}>
                  <img
                    className={Styles.question}
                    src={question}
                    alt='question'
                    onClick={() => {
                      if (!desktop) {
                        setState(true)
                      }
                    }}
                  />
                  {state || !desktop ? (
                    <div className={Styles.help}>
                      <p className={Styles.text_qu}>
                        Объяснение о том, что такие рекомендации являются общими и не заменят полноценную консультацию
                        профессионального врача
                      </p>
                      <button onClick={() => setState(false)} className={Styles.button_qu}>
                        <img src={closeButton} className={Styles.button__icon} />
                      </button>
                    </div>
                  ) : null}
                </span>
              </p>
              <div className={Styles.onboarding__button_wrapper}>
                <button className={`${Styles.onboarding__button_ignore} ${Styles.onboarding__button_mobile}`}>
                  Нет, пропустить
                </button>
                <ButtonColor value='Да, давайте' className={Styles.onboarding__button_mobile} />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className={Styles.onboarding__mark}>Вы можете пропустить, нажав на кпноку справа вверху</div>
      </div>
    </>
  )
}
