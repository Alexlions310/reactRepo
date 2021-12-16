import React from 'react'
import Styles from './style.module.scss'
import classNames from 'classnames/bind'

interface ProfileModalInputProps {
  isInputDisabled?: boolean
  handleChange?: (e: any) => void
  setIsInputDisabled?: (boolean) => void
  labelName?: string
  inputType?: string
  inputName?: string
  placeholder?: string
}

export const ProfileModalInput: React.FC<ProfileModalInputProps> = ({
  isInputDisabled,
  handleChange,
  setIsInputDisabled,
  labelName,
  inputType,
  inputName,
  placeholder,
}) => {
  const styles = {
    main: `${Styles.editButton}`,
    hidden: `${Styles.editButton_hidden}`,
  }
  const cx = classNames.bind(styles)

  return (
    <label>
      {labelName}
      <div>
        <input
          type={inputType}
          placeholder={placeholder}
          disabled={isInputDisabled}
          name={inputName}
          onChange={handleChange}
        />
        <div
          className={`${cx('main', { hidden: !isInputDisabled })}`}
          onClick={() => {
            setIsInputDisabled(false)
          }}
        />
      </div>
    </label>
  )
}
