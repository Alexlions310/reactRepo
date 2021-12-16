import React from 'react'
import './style.scss'

interface Prop {
  text?: string
}

export const Spinner: React.FC<Prop> = ({ text }) => {
  return (
    <div className='spinner'>
      <div className='lds-dual-ring' />
      <p style={{ color: '#808080' }}>{text}</p>
    </div>
  )
}
