import useWindowSize from '@helpers/useWindowSizeHook'
import React from 'react'
import Styles from './style.module.scss'
import arrow from '@icons/arrow-large-blue.svg'

export const MobileHeader = (props) => {
  const { width } = useWindowSize()
  const desktop = width >= 829
  return (
    <>
      {!desktop && (
        <button className={Styles.navigation} onClick={props.onClick}>
          <img src={arrow} className={Styles.arrow} />
          <h3 className={Styles.text}>{props.title}</h3>
        </button>
      )}
    </>
  )
}
