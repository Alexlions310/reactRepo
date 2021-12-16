import React from 'react'
import Styles from './style.module.scss'
import { TransitionsModal } from '../../Modal'

import useWindowSize from '@helpers/useWindowSizeHook'
import { MobileModal } from '@components/MobileModal'
import { MapComponent } from '../Map'

export const MapModal = (props) => {
  const { width } = useWindowSize()
  const desktop = width >= 829
  return (
    <>
      {desktop && (
        <TransitionsModal
          onClose
          isOpenModal={props.isOpenModal}
          setModalOpened={props.setModalOpened}
          className={Styles.modal__container}
        >
          <div className={Styles.map__container}>
            <div className={Styles.map__header}>Место приема</div>
            <MapComponent />
          </div>
        </TransitionsModal>
      )}
      {!desktop && (
        <MobileModal
          title='Место приема'
          isOpen={props.isOpenModal}
          setIsModalOpen={props.setModalOpened}
          className={Styles.title}
        >
          <div className={Styles.map__container_mobile}>
            <MapComponent />
          </div>
        </MobileModal>
      )}
    </>
  )
}
