import React, { useCallback, useEffect, useState } from 'react'

import Styles from './style.module.scss'

// eslint-disable-next-line import/named
import { UserModal } from './components/UserModal'
// eslint-disable-next-line import/named
import { UserDrawer } from './components/UserDrawer'
// eslint-disable-next-line import/named
import { UserHeader } from './components/UserHeader'
import { FilterDrawer } from './components/FilterDrawer'

// eslint-disable-next-line import/named
import { getData, changePageSize, pageChange } from './redux/userPageSlicer'

import { PaginationComponent } from '@components/Pagination'
import { DrawerPanel } from '@components/Drawer'
import { TransitionsModal } from '@components/Modal'

import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { Spinner } from '@components/Spinner'

export const UserPage = () => {
  const dispatch = useAppDispatch()
  const userId: string | null = useAppSelector((state) => state.user?.userId)

  const defaultPage = useAppSelector((state) => state.userPage.pagination.number)

  const pageSize = useAppSelector((state) => state.userPage.pagination.size)
  const totalPages = useAppSelector((state) => state.userPage.pagination.totalPages)
  const totalElements = useAppSelector((state) => state.userPage.pagination.totalElements)
  const status = useAppSelector((state) => state.userPage.status)

  const [isOpenFilters, setDrawerOpened] = useState(false)
  const [isOpenOrder, setOrderOpened] = useState(false)
  const [isOpenModal, setModalOpened] = useState(false)
  const [rowCount, setRowCount] = useState([
    { id: 0, value: 10, active: false },
    { id: 1, value: 20, active: false },
    { id: 2, value: 50, active: false },
  ])

  const getUserOrders = useCallback(() => {
    if (userId) {
      const value = {
        userId,
        data: {
          number: defaultPage,
          size: pageSize,
        },
      }
      dispatch(getData(value))
    }
  }, [dispatch, userId, pageSize, defaultPage])

  const setRowCountOnPage = (value) => {
    dispatch(changePageSize(value))
  }

  useEffect(() => {
    getUserOrders()
  }, [userId, rowCount, defaultPage])

  useEffect(() => {
    if (pageSize) {
      const newArr = rowCount.map((item) => {
        if (item.value === pageSize) {
          item.active = true
          return item
        } else {
          item.active = false
          return item
        }
      })
      setRowCount(newArr)
    }
  }, [pageSize])

  const handlePageChange = (e, page) => {
    dispatch(pageChange(Number(page) - 1))
  }

  return (
    <div className={Styles.main_container}>
      <div className={Styles.page_container}>
        <DrawerPanel
          anchor='right'
          open={isOpenFilters}
          onClose={() => setDrawerOpened((isOpen) => !isOpen)}
          width={376}
        >
          <FilterDrawer />
        </DrawerPanel>
        <DrawerPanel anchor='right' open={isOpenOrder} onClose={() => setOrderOpened((isOpen) => !isOpen)} width={676}>
          <UserDrawer />
        </DrawerPanel>
        <TransitionsModal onClose isOpenModal={isOpenModal} setModalOpened={setModalOpened}>
          <UserModal />
        </TransitionsModal>
        <div className={Styles.user_data_content}>
          <UserHeader openFilter={() => setDrawerOpened(true)} openModal={() => setModalOpened(true)} />
          {status === 'loading' || !status ? (
            <div className={Styles.spinner_container}>
              <Spinner />
            </div>
          ) : (
            <div className={Styles.page_container}>
              <div className={`${Styles.page_height}`} />
            </div>
          )}
          <PaginationComponent
            onChange={handlePageChange}
            setRowCountOnPage={setRowCountOnPage}
            rowCount={rowCount}
            totalElements={totalElements}
            totalPages={totalPages}
            defaultPage={defaultPage}
          />
        </div>
      </div>
    </div>
  )
}
