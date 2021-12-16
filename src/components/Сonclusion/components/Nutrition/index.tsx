import React, { useState } from 'react'
import Styles from './style.module.scss'
import breakfast from '@icons/mealtime-breakfast.svg'
import lunch from '@icons/mealtime-lunch.svg'
import dinner from '@icons/mealtime-dinner.svg'
import food from '@icons/mealtime-food.svg'
import mark from '@icons/mark.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'

export const Nutrition = () => {
  const [breakfastActive, setBreakfastActive] = useState(true)
  const [lunchActive, setLunchActive] = useState(false)
  const [dinnerActive, setDinnerActive] = useState(false)
  const [foodActive, setFoodActive] = useState(false)
  const isActive = (e) => {
    if (e.currentTarget.id === '1') {
      setBreakfastActive(true)
      setLunchActive(false)
      setDinnerActive(false)
      setFoodActive(false)
      return
    }
    if (e.currentTarget.id === '2') {
      setBreakfastActive(false)
      setLunchActive(true)
      setDinnerActive(false)
      setFoodActive(false)
      return
    }
    if (e.currentTarget.id === '3') {
      setBreakfastActive(false)
      setLunchActive(false)
      setDinnerActive(true)
      setFoodActive(false)
      return
    }
    if (e.currentTarget.id === '4') {
      setBreakfastActive(false)
      setLunchActive(false)
      setDinnerActive(false)
      setFoodActive(true)
    }
  }
  return (
    <div className={Styles.nutrition__container}>
      <Swiper spaceBetween={8} slidesPerView={3.25}>
        <SwiperSlide
          onClick={isActive}
          id='1'
          className={
            breakfastActive ? `${Styles.mealtime__button} ${Styles.mealtime__button_active}` : Styles.mealtime__button
          }
        >
          <img src={breakfast} alt='img' />
          <h5 className={Styles.mealtime__title}>Завтрак</h5>
        </SwiperSlide>
        <SwiperSlide
          onClick={isActive}
          id='2'
          className={
            lunchActive ? `${Styles.mealtime__button} ${Styles.mealtime__button_active}` : Styles.mealtime__button
          }
        >
          <img src={lunch} alt='img' />
          <h5 className={Styles.mealtime__title}>Обед</h5>
        </SwiperSlide>
        <SwiperSlide
          onClick={isActive}
          id='3'
          className={
            dinnerActive ? `${Styles.mealtime__button} ${Styles.mealtime__button_active}` : Styles.mealtime__button
          }
        >
          <img src={dinner} alt='img' />
          <h5 className={Styles.mealtime__title}>Ужин</h5>
        </SwiperSlide>
        <SwiperSlide
          onClick={isActive}
          id='4'
          className={
            foodActive ? `${Styles.mealtime__button} ${Styles.mealtime__button_active}` : Styles.mealtime__button
          }
        >
          <img src={food} alt='img' />
          <h5 className={Styles.mealtime__title}>Продукты</h5>
        </SwiperSlide>
      </Swiper>
      {breakfastActive ? (
        <div className={Styles.nutrition__desc}>
          <h6 className={Styles.title}>Белково-жировой завтрак</h6>
          <ul>
            <li className={Styles.item}>яйца</li>
            <li className={Styles.item}>авокадо</li>
            <li className={Styles.item}>запеканка творожная на 5% твороге</li>
            <li className={Styles.item}>йогурт без сахара</li>
          </ul>
          <div className={Styles.mark__container}>
            <img src={mark} alt='mark' />
            <p className={Styles.mark}>Стакан очень теплой воды через 15 минут после пробуждения</p>
          </div>
        </div>
      ) : null}
      {lunchActive ? (
        <div className={Styles.nutrition__desc}>
          <h6 className={Styles.title}>Овощи</h6>
          <div className={Styles.item}>В большом количестве, кроме картофеля, свеклы и моркови в отварном виде </div>
          <h6 className={Styles.title}>Субпродукты</h6>
          <ul>
            <li className={Styles.item}>печень говяжья</li>
            <li className={Styles.item}>индейка</li>
            <li className={Styles.item}>телятина</li>
          </ul>
          <div className={Styles.mark__container}>
            <img src={mark} alt='mark' />
            <p className={Styles.mark}>При готовке не добавлять молоко и сметану</p>
          </div>
        </div>
      ) : null}
      {dinnerActive ? (
        <div className={Styles.nutrition__desc}>
          <h6 className={Styles.title}>Продукты для ужина</h6>
          <ul>
            <li className={Styles.item}>мясо</li>
            <li className={Styles.item}>рыба</li>
            <li className={Styles.item}>салат с бальзамическим или яблочным уксусом, лимоном</li>
          </ul>
          <h6 className={Styles.title}>Не успеваешь за 3 ч до сна?</h6>
          <ul>
            <li className={Styles.item}>Можно съесть отварное яйцо и овощи</li>
          </ul>
          <div className={Styles.mark__container}>
            <img src={mark} alt='mark' />
            <p className={Styles.mark}>На ужин нельзя есть крупы</p>
          </div>
        </div>
      ) : null}
    </div>
  )
}
