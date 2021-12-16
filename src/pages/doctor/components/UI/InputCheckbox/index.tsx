import React from 'react'
import Styles from './style.module.scss'

interface InputCheckboxProps {
  className?: string
  name?: string
  value?: string
  onChange?: any
}

export const InputCheckbox: React.FC<InputCheckboxProps> = ({ className, name, value, onChange }) => {
  const cls = [`${Styles.checkbox}`]

  if (className) {
    cls.push(className)
  }

  return (
    <>
      <input className={Styles.input} type='checkbox' name={name} value={value} onChange={onChange} />
      <span className={cls.join(' ')}>{}</span>
    </>
  )
}
