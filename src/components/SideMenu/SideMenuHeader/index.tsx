import React from 'react'
import Styles from './style.module.scss'
import arrows from '@icons/menu-arrows.svg'
import message from '@icons/menu-message.svg'
import bell from '@icons/menu-bell.svg'
import pin from '@icons/menu-pin.svg'

export const SideMenuHeader = ({
  handleArrowsClick,
  setActiveContent,
  isMenuOpen,
  activeContent,
  hasMedReport,
  isPinnable,
}) => {
  return (
    <div className={!isMenuOpen ? Styles.container : `${Styles.container} ${Styles.container_opened}`}>
      {!isPinnable && (
        <div className={`${Styles.element} ${Styles.arrows}`}>
          <button
            className={!isMenuOpen ? Styles.button : `${Styles.button} ${Styles.button_reverse}`}
            onClick={() => {
              handleArrowsClick()
              isMenuOpen ? setActiveContent('') : setActiveContent('bell')
            }}
          >
            <img src={arrows} alt='smth' />
          </button>
        </div>
      )}
      {isMenuOpen
        ? null
        : hasMedReport && (
            <div
              className={
                activeContent !== 'pin'
                  ? `${Styles.element} ${Styles.element_underscore}`
                  : `${Styles.element} ${Styles.element_active}`
              }
            >
              <button
                className={Styles.button}
                onClick={() => {
                  setActiveContent('bell')
                  !isMenuOpen && handleArrowsClick()
                }}
              >
                <img src={pin} alt='smth' />
              </button>
            </div>
          )}
      {/* <div
        className={
          activeContent !== 'message'
            ? `${Styles.element} ${Styles.element_underscore}`
            : `${Styles.element} ${Styles.element_active}`
        }
      >
        <button
          className={Styles.button}
          onClick={() => {
            setActiveContent('message')
            !isMenuOpen && handleArrowsClick()
          }}
        >
          <img src={message} alt='smth' />
          <span>Чат</span>
        </button>
      </div> */}
      <div className={activeContent !== 'bell' ? Styles.element : `${Styles.element} ${Styles.element_active}`}>
        <button
          className={Styles.button}
          onClick={() => {
            setActiveContent('bell')
            !isMenuOpen && handleArrowsClick()
          }}
        >
          <img src={bell} alt='smth' />
          <span>События</span>
        </button>
      </div>
    </div>
  )
}
