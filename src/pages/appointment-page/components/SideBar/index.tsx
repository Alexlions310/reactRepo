import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Styles from './style.module.scss'

export const Sidebar = (props) => {
  const refs = useRef<any>()
  const [widthTotal, setWidthTotal] = useState(0)
  useEffect(() => {
    setWidthTotal(refs?.current?.clientWidth)
  }, [widthTotal])
  const [ref1, inView] = useInView({
    threshold: 0,
  })
  return (
    <div ref={refs}>
      <div ref={ref1} />
      <div className={`${!inView && Styles.sidebar}`} style={{ width: widthTotal }}>
        {props.children}
      </div>
    </div>
  )
}
