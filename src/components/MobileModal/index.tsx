import React from 'react'
import Styles from './style.module.scss'
// import back from '@icons/mobile-back.svg'
import close from '@icons/mobile-close.svg'
import { DrawerPanel } from '@components/Drawer'

export const MobileModal = ({ title, children, isOpen, setIsModalOpen, className = '' }) => {
  return (
    <DrawerPanel width='100%' anchor='right' open={isOpen} onClose={setIsModalOpen}>
      <div className={Styles.container}>
        <div className={Styles.header}>
          {/* <img src={back} alt='назад' /> */}
          <h2 className={`${Styles.title} ${className}`}>{title}</h2>
          <img className={Styles.icon} src={close} alt='закрыть' onClick={() => setIsModalOpen(false)} />
        </div>
        <div className={Styles.body}>{children}</div>
      </div>
    </DrawerPanel>
  )
}
