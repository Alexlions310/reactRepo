import React from 'react'
import Styles from './style.module.scss'

interface InputRadioProps {
  className?: string
  onChange?: any
  name?: string
  value?: string | number
}

export const InputRadio: React.FC<InputRadioProps> = ({ className, onChange, name, value }) => {
  const cls = [`${Styles.radio}`]

  if (className) {
    cls.push(className)
  }

  return (
    <>
      <input className={Styles.input} onChange={onChange} type='radio' name={name} value={value} />
      <span className={cls.join(' ')}>{}</span>
    </>
  )
}
