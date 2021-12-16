import React from 'react'
import { SwipeableDrawer } from '@material-ui/core'

import Styles from './style.module.scss'
export const DrawerPanel = ({
  width,
  height = '100%',
  anchor,
  open,
  children,
  onClose,
  scrollbar = false,
  closeIcon = false,
}) => {
  return (
    <>
      <SwipeableDrawer onOpen={() => {}} anchor={anchor} open={open} onClose={onClose}>
        {closeIcon && <div className={Styles.icon} onClick={onClose} />}
        <div style={{ width, height, overflow: 'auto' }} className={scrollbar ? 'block-scroll' : ''}>
          {children}
        </div>
      </SwipeableDrawer>
    </>
  )
}
