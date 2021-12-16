import React from 'react'
import { useAppDispatch } from '@app/redux/hooks'
import { toggleModal } from '../../redux/doctorSlicer'
import Styles from './style.module.scss'

interface DoctorModalProps {
  title?: string
}

export const DoctorModal: React.FC<DoctorModalProps> = ({ title, children }) => {
  const dispatch = useAppDispatch()

  const closeModal = () => dispatch(toggleModal())

  return (
    <>
      <div className={`${Styles.modal} ${Styles.modal_desktop}`}>
        <div className={Styles.content}>
          <button className={Styles.close} onClick={closeModal}>
            {}
          </button>
          {children}
        </div>
      </div>
      <div className={`${Styles.modal} ${Styles.modal_mobile}`}>
        <div className={Styles.content}>{children}</div>
      </div>
    </>
  )
}
