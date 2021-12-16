import React, { useEffect, useState } from 'react'
import Styles from './style.module.scss'
import { useLocation } from 'react-router-dom'
import { SideMenuHeader } from './SideMenuHeader'
import { SideMenuBody } from './SideMenuBody'
import classNames from 'classnames/bind'
import useWindowSize from '../../helpers/useWindowSizeHook'
import { useAppSelector } from '@app/redux/hooks'

export const SideMenu = () => {
  const location = useLocation()
  const { width } = useWindowSize()
  const isPinnable = width >= 2140
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeContent, setActiveContent] = useState('')
  const hasMedReport = useAppSelector((state) => state.auth.medicalReport.hasMedicalReport)
  const isAuth = useAppSelector((state) => state.auth.user.isLoggedIn)

  useEffect(() => {
    if (isPinnable) {
      setIsMenuOpen(true)
      setActiveContent('bell')
    } else {
      setIsMenuOpen(false)
      setActiveContent('')
    }
  }, [isPinnable])

  const handleOpenMenu = () => {
    setIsMenuOpen((prev) => !prev)
    isMenuOpen && setActiveContent('bell')
  }
  const menuStyles = {
    main: `${Styles.menu}`,
    opened: `${Styles.menu_opened}`,
    pinned: `${Styles.menu_pinned}`,
  }
  const cx = classNames.bind(menuStyles)
  return location.pathname === '/login' ? null : isAuth ? (
    <>
      <div className={Styles.container}>
        <div className={`${cx('main', { opened: isMenuOpen, pinned: isPinnable })}`}>
          <SideMenuHeader
            handleArrowsClick={handleOpenMenu}
            setActiveContent={setActiveContent}
            isMenuOpen={isMenuOpen}
            activeContent={activeContent}
            hasMedReport={hasMedReport}
            isPinnable={isPinnable}
          />
          <SideMenuBody activeContent={activeContent} />
        </div>
      </div>
    </>
  ) : null
}
