import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import Styles from './style.module.scss'
import 'swiper/swiper.scss'

import { DoctorPatientPersona } from './components/DoctorPatientPersona'
import { DoctorPatientPersonaMobile } from './components/DoctorPatientPersona/components/DoctorPatientPersonaMobile'
// import { Filter } from '../UI/Filter'

import caretIcon from '@icons/caret-down.svg'
import VectorDownIcon from '../../../../assets/icons/VectorDownIcon'
import VectorUpIcon from '../../../../assets/icons/VectorUpIcon'
import questionIcon from '@icons/question.svg'

export const DoctorPatientList: React.FC = () => {
  const listUniqPatients = useAppSelector((state) => state.doctor.listUniqPatients)
  const [displayPatients, setDisplayPatients] = useState([])
  const [sortType, setSortType] = useState('asc')
  const [filter] = useState(['Все', 'Недавно зарегистрированные', 'Без заключения'])
  const [filterIndex, setFilterIndex] = useState(0)

  const sortingPatients = () => {
    const copyArray = [...displayPatients]

    const isReversed = sortType === 'asc' ? 1 : -1
    const sortedArray = copyArray.sort((a, b) => isReversed * a.last_name.localeCompare(b.last_name))

    const type = sortType === 'asc' ? 'desc' : 'asc'
    setSortType(type)

    setDisplayPatients(sortedArray)
  }

  useEffect(() => {
    setDisplayPatients(listUniqPatients)
  }, [])

  return (
    <>
      <div className={Styles.patients}>
        <div className={Styles.choose}>
          <ul className={Styles.list}>
            {filter.map((item, index) => (
              <li
                key={index}
                className={index === filterIndex ? `${Styles.item} ${Styles.item_active}` : `${Styles.item}`}
                onClick={() => setFilterIndex(index)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={Styles.table}>
          <div className={Styles.header}>
            <div className={Styles.wrap} onClick={sortingPatients}>
              <span className={Styles.head}>Имя</span>
              <div className={Styles.vectors}>
                {sortType === 'asc' ? (
                  <>
                    <VectorDownIcon />
                    <VectorUpIcon active='active' />
                  </>
                ) : (
                  <>
                    <VectorDownIcon active='active' />
                    <VectorUpIcon />
                  </>
                )}
              </div>
            </div>
            <div className={Styles.wrap}>
              <span className={Styles.head}>Последнее обращение</span>
            </div>
            <div className={Styles.wrap}>
              <span className={`${Styles.head} ${Styles.head_mod}`}>Мед. заключение</span>
              <img src={questionIcon} alt='Иконка' />
            </div>
            <div className={Styles.wrap}>
              <span className={Styles.head}>Номер телефона</span>
            </div>
            <div className={Styles.wrap}>{}</div>
          </div>
          <ul className={Styles.content}>
            {displayPatients.map((patient) => (
              <DoctorPatientPersona
                key={patient.id}
                patientId={patient.id}
                firstName={patient.first_name}
                lastName={patient.last_name}
                phone={patient.phone}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className={`${Styles.patients} ${Styles.patients_mobile}`}>
        <div className={Styles.slider}>
          <Swiper spaceBetween={8}>
            <SwiperSlide className={Styles.slide}>
              <span className={`${Styles.item} ${Styles.item_active}`}>Все</span>
            </SwiperSlide>
            <SwiperSlide className={Styles.slide}>
              <span className={Styles.item}>Недавно зарегистрированные</span>
            </SwiperSlide>
            <SwiperSlide className={Styles.slide}>
              <span className={Styles.item}>Без заключения</span>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={Styles.select}>
          <div className={Styles.vectors}>
            <VectorDownIcon />
            <VectorUpIcon />
          </div>
          <span className={Styles.head}>По последнему обращению</span>
          <img src={caretIcon} alt='Иконка' />
        </div>
        <ul className={Styles.content}>
          <DoctorPatientPersonaMobile />
          <DoctorPatientPersonaMobile />
          <DoctorPatientPersonaMobile />
          <DoctorPatientPersonaMobile />
        </ul>
      </div>
    </>
  )
}
