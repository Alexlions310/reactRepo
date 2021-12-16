import React, { useState } from 'react'
import Styles from './style.module.scss'
import question from '@icons/question.svg'
import closeButton from '@icons/close-button-mobile.svg'
import useWindowSize from '@helpers/useWindowSizeHook'

export const QuestionIcon = (props) => {
  const [state, setState] = useState(false)
  const { width } = useWindowSize()
  const desktop = width >= 829
  return (
    <span className={Styles.container}>
      <img
        className={`${Styles.question} ${props.className}`}
        src={question}
        alt='question'
        onClick={() => {
          if (!desktop) {
            setState(true)
          }
        }}
      />
      {state || desktop ? (
        <div className={Styles.help}>
          {props.src ? <img src={props.src} /> : null}
          <p className={Styles.text}>{props.text}</p>
          <button onClick={() => setState(false)} className={Styles.button}>
            <img src={closeButton} className={Styles.button__icon} />
          </button>
        </div>
      ) : null}
    </span>
  )
}
