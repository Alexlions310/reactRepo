import React from 'react'
import Parser from 'html-react-parser'
import Styles from './style.module.scss'
import MedServices1 from '@icons/MedServices1.svg'
import MedServices2 from '@icons/MedServices2.svg'
import MedServices3 from '@icons/MedServices3.svg'
import MedServices4 from '@icons/MedServices4.svg'
import MedServices5 from '@icons/MedServices5.svg'
import MedServices6 from '@icons/MedServices6.svg'
import MedServices7 from '@icons/MedServices7.svg'
import MedServices8 from '@icons/MedServices8.svg'
import nextIcon from '@icons/nextIcon.svg'
import mainIcon1 from '@icons/tariffs1.svg'
import mainIcon2 from '@icons/tariffs2.svg'
import mainIcon3 from '@icons/tariffs3.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Rectangle } from './ui/Rectangle'
import { MedServices } from '@components/LandingPage/MedServices'
import { Tariffs } from '@components/LandingPage/Tariffs'
import { Blogs } from '@components/LandingPage/Blogs'
import { DoctorInfo } from './ui/DoctorInfo'
import { HowItWorks1 } from './ui/HowItWorks1'
import { HowItWorks2 } from './ui/HowItWorks2'
import { HowItWorks3 } from './ui/HowItWorks3'
import { HowItWorks4 } from './ui/HowItWorks4'
import BlogsLoadingBtn from './ui/components'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import SwiperCore, { Navigation, Pagination } from 'swiper'

SwiperCore.use([Pagination, Navigation])

export const LandingPage = () => {
  return (
    <div className={Styles.main_container}>
      <Rectangle />
      <div className={Styles.main_container__MedServices}>
        <h1 className={Styles.main_container__heading}>Мы поможем тебе</h1>
        <Swiper
          loop
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            760: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1100: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          navigation={{
            nextEl: '.nextBtn',
          }}
          style={{ position: 'relative' }}
        >
          <SwiperSlide>
            <MedServices img={MedServices1} paragraph='Выпадение волос' />
          </SwiperSlide>
          <SwiperSlide>
            <MedServices img={MedServices2} paragraph='Лишний вес' />
          </SwiperSlide>
          <SwiperSlide>
            <MedServices img={MedServices3} paragraph='Чувство усталости' />
          </SwiperSlide>
          <SwiperSlide>
            <MedServices img={MedServices4} paragraph='Отсутствие работоспособности' />
          </SwiperSlide>
          <SwiperSlide>
            <MedServices img={MedServices5} paragraph='Тяга к сладкому' />
          </SwiperSlide>
          <SwiperSlide>
            <MedServices img={MedServices6} paragraph='Повышенный аппетит' />
          </SwiperSlide>
          <SwiperSlide>
            <MedServices img={MedServices7} paragraph='Возрастные заболевания' />
          </SwiperSlide>
          <SwiperSlide>
            <MedServices img={MedServices8} paragraph='Другая проблема' />
          </SwiperSlide>
          <button className={`nextBtn ${Styles.nextBtn}`}>
            <img src={nextIcon} />
          </button>
        </Swiper>
      </div>
      <DoctorInfo />
      <HowItWorks1 />
      <HowItWorks2 />
      <HowItWorks3 />
      <HowItWorks4 />
      <h1 className={Styles.main_container__tariffsHeading} id='consultations'>
        Попробовать сейчас
      </h1>
      <div className={Styles.main_container__flexedTariffs}>
        <Tariffs
          mainIcon={mainIcon1}
          headingTxt={Parser('Консультация <br /> врача-нутрициолога')}
          mainP={Parser(
            'Обсудим цели и выявим негативные <br /> внешние факторы в образе жизни. <br /> Составим список анализов для выявления <br /> причин возникновения проблем со <br /> здоровьем',
          )}
        />
        <Tariffs
          mainIcon={mainIcon2}
          headingTxt={Parser('Антивозраст (AntiAge)')}
          mainP={Parser(
            'Обсудим профилактику возраст <br /> ассоциированных заболеваний. <br /> Сформируем список анализов «маркеров <br /> старения»',
          )}
          ageRestriction='Для людей от 30 лет'
        />
        <Tariffs
          mainIcon={mainIcon1}
          headingTxt={Parser('Нутрицевтическая <br /> подготовка к беременности')}
          mainP={Parser(
            'Выявим дефицит витаминов и минералов, <br /> имеющих значение для здорового зачатия <br /> или восстановления после родов',
          )}
        />
        <Tariffs
          mainIcon={mainIcon3}
          headingTxt={Parser('Прием витаминов и БАД <br />— врачебный контроль')}
          mainP={Parser(
            'Обсудим уже принимаемые добавки. <br /> Назначим анализы для определения <br /> индивидуальной потребности в витаминах <br />и БАД',
          )}
        />
        <Tariffs
          mainIcon={mainIcon2}
          headingTxt={Parser('Генетический тест')}
          mainP={Parser(
            'Подберем план питания, образа жизни,<br />тип нагрузки и составим прием витаминов <br/>с учетом их метаболической активности',
          )}
        />
        <Tariffs
          mainIcon={mainIcon1}
          headingTxt={Parser('Лабораторный чекап')}
          mainP={Parser(
            'Оценим текущее состояния здоровья <br /> на основе комплекса лабораторных <br /> исследований',
          )}
        />
      </div>
      {/* <div className={Styles.main_container__blogs_container} id='blog'>
        <h1 className={Styles.main_container__blogs_heading}>Пишем о здоровье для вас</h1>
        <Blogs />
      </div>
      <BlogsLoadingBtn /> */}
    </div>
  )
}
