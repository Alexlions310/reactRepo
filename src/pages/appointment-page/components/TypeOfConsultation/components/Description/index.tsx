import React, { useState } from 'react'
import Styles from './style.module.scss'
import Parser from 'html-react-parser'
import arrow from '@icons/arrow-right-blue.svg'
import { ButtonTransparent } from '@components/ui/ButtonTransparent'
import { ButtonWithBorder } from '@components/ui/ButtonWithBorder'
import classNames from 'classnames/bind'
import clock from '@icons/clock.svg'
import useWindowSize from '@helpers/useWindowSizeHook'

export const Description = (props) => {
  const [first, setFirst] = useState(true)
  const [second, setSecond] = useState(false)
  const [visible, setVisible] = useState(false)
  const isActive = () => {
    setFirst(!first)
    setSecond(!second)
    setVisible(false)
  }
  const isVisible = () => {
    setVisible(!visible)
  }

  const buttonStyleFirst = classNames(Styles.button, {
    [`${Styles.button_active}`]: first,
  })
  const buttonStyleSecond = classNames(Styles.button, {
    [`${Styles.button_active}`]: second,
  })
  const { width } = useWindowSize()
  const desktop = width >= 829
  return (
    <div className={Styles.container}>
      <div className={Styles.buttons}>
        <div>
          <button onClick={isActive} className={buttonStyleFirst} disabled={first}>
            {props.selectConsultation.types[0].title}
          </button>
        </div>
        <div>
          <button onClick={isActive} className={buttonStyleSecond} disabled={second}>
            {props.selectConsultation.types[1].title}
          </button>
        </div>
      </div>
      {!desktop && (
        <div className={Styles.wrapper}>
          <img src={clock} className={Styles.icon} alt='clock' />
          <div className={Styles.duration}>{props.selectConsultation.types[0].duration}</div>
        </div>
      )}
      {first && <div className={Styles.desc}>{Parser(props.selectConsultation.types[0].small_description)}</div>}
      {second && <div className={Styles.desc}>{Parser(props.selectConsultation.types[1].small_description)}</div>}

      <ButtonTransparent
        styleImg={visible ? `${Styles.arrow_down} ${Styles.arrow_active}` : Styles.arrow_down}
        onClick={isVisible}
        value={
          props.selectConsultation.direction_type === 'genetic' && first
            ? 'Как сделать генетический тест?'
            : 'Как проходит консультация'
        }
        after
      />
      {first && visible && <div className={Styles.text}>{Parser(props.selectConsultation.types[0].description)}</div>}
      {second && visible && <div className={Styles.text}>{Parser(props.selectConsultation.types[1].description)}</div>}
      {props.selectConsultation.direction_type === 'genetic' && (
        <div className={Styles.genetic__container}>
          <div className={Styles.genetic__descrintion}>
            <h6 className={Styles.description__title}>Генетический тест</h6>
            <p className={Styles.description__text}>Можно приобрести в нашем магазине</p>
          </div>
          <ButtonWithBorder className={Styles.button__border} value='Перейти в каталог' />
        </div>
      )}
    </div>
  )
}
