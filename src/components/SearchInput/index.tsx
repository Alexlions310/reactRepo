import React, { InputHTMLAttributes } from 'react'
import Styles from './style.module.scss'
import search from '@icons/search.png'

interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  text: string
  onChange?: (value: string | undefined) => void
}

export const SearchInput: React.FC<SearchInputProps> = ({ text, onChange }) => {
  return (
    <div className={Styles.input_container}>
      <div className={Styles.input_iconContainer}>
        <img className={Styles.search_icon} src={search} alt='search' />
      </div>
      <input
        className={Styles.search_input}
        type='text'
        value={text}
        onChange={(e) => (onChange ? onChange(e?.target?.value) : undefined)}
      />
    </div>
  )
}
