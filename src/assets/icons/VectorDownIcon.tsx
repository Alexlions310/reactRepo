import React from 'react'

interface VectorIcon {
  active?: string
}

const VectorDownIcon: React.FC<VectorIcon> = ({ active }) => {
  return (
    <svg width='7' height='16' viewBox='0 0 7 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M6 1V14.5L1.5 9.99998'
        stroke={active ? '#7D9DFF' : '#96AFC7'}
        strokeWidth='1.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default VectorDownIcon
