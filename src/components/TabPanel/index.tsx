import React from 'react'

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
  className?: string
  contentStyle?: string
}

export const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, className, contentStyle, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className={className}
      {...other}
    >
      {value === index && <div className={contentStyle || ''}>{children}</div>}
    </div>
  )
}
