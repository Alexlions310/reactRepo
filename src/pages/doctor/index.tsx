import React, { useCallback, useEffect, useState } from 'react'
import Styles from './style.module.scss'

import '../../components/Pagination/style.scss'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Tabs from '@material-ui/core/Tabs'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Tab from '@material-ui/core/Tab'
import { createTheme } from '@material-ui/core/styles'
import { MuiThemeProvider } from '@material-ui/core'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DoctorContainer } from './components/DoctorContainer'
import { DoctorCabinet } from './components/DoctorCabinet'
import { DoctorHistory } from './components/DoctorHistory'
import { DoctorNotation } from './components/DoctorNotation'
import { DoctorPatientList } from './components/DoctorPatientList'
import { DoctorPatient } from './components/DoctorPatient'
import { PersonalData } from './components/PersonalData'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PaginationComponent } from '@components/Pagination'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DrawerPanel } from '@components/Drawer'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TransitionsModal } from '@components/Modal'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TabPanel } from '@components/TabPanel'

import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
// import { changePageSize, getDoctorPageData, pageChange } from './redux/doctorSlicer'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Spinner } from '@components/Spinner'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const theme = createTheme({
  props: {
    // Name of the component
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application!
    },
  },
})

export const DoctorPage = () => {
  const dispatch = useAppDispatch()
  const displayPopup = useAppSelector((state) => state.doctor.displayPopup)
  const userId: string | null = useAppSelector((state) => state.user?.userId)
  const defaultPage = useAppSelector((state) => state.doctor?.pagination.number)
  const pageSize = useAppSelector((state) => state.doctor?.pagination.size)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const totalPages = useAppSelector((state) => state.doctor?.pagination.totalPages)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const totalElements = useAppSelector((state) => state.doctor?.pagination.totalElements)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const status = useAppSelector((state) => state.doctor?.status)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpenDoctorInfo, setDoctorOpened] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpenModal, setModalOpened] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [value, setValue] = useState(0)

  const [rowCount, setRowCount] = useState([
    { id: 0, value: 10, active: false },
    { id: 1, value: 20, active: false },
    { id: 2, value: 50, active: false },
  ])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChange = (event: React.ChangeEvent, newValue: number) => {
    setValue(newValue)
  }

  const getUserOrders = useCallback(() => {
    if (userId) {
      const value = {
        userId,
        data: {
          number: defaultPage,
          size: pageSize,
        },
      }
      // dispatch(getDoctorPageData(value))
    }
  }, [dispatch, userId, pageSize, defaultPage])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const setRowCountOnPage = (value) => {
    // dispatch(changePageSize(value))
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handlePageChange = (e, page) => {
    // dispatch(pageChange(Number(page) - 1))
  }

  return (
    <MuiThemeProvider theme={theme}>
      <div className={Styles.arm_main_container}>
        <DoctorContainer title='Личный кабинет' back=''>
          <DoctorCabinet />
        </DoctorContainer>
        <DoctorContainer title='Прошедшие записи' back=''>
          <DoctorHistory />
        </DoctorContainer>
        <DoctorContainer title='Запись на прием' back='Назад на главную'>
          <DoctorNotation />
        </DoctorContainer>
        <DoctorContainer title='Пациенты' count={35} back=''>
          <DoctorPatientList />
        </DoctorContainer>
        <DoctorContainer title='' back='Назад ко всем пациентам'>
          <DoctorPatient />
        </DoctorContainer>
        {/* <PersonalData /> */}

        {/* <DrawerPanel
          anchor='right'
          open={isOpenDoctorInfo}
          onClose={() => setDoctorOpened((isOpen) => !isOpen)}
          width={676}
        >
          <DoctorDrawer />
        </DrawerPanel>
        <TransitionsModal isOpenModal={isOpenModal} setModalOpened={setModalOpened}>
          <DoctorModal />
        </TransitionsModal>
        <div className={Styles.arm_orders_content}>
          <div className={Styles.header_container}>
            <div className={Styles.header_content}>
              <Tabs value={value} onChange={handleChange} aria-label='simple tabs example'>
                <Tab style={{ textTransform: 'none' }} label='Таб 1' {...a11yProps(0)} />
                <Tab style={{ textTransform: 'none' }} label='Таб 2' {...a11yProps(1)} />
              </Tabs>
            </div>
          </div>
          <TabPanel
            contentStyle={`${Styles.tab_content}`}
            className={`${Styles.arm_tab_table}`}
            value={value}
            index={0}
          >
            {status === 'loading' || !status ? (
              <div className={Styles.spinner_container}>
                <Spinner />
              </div>
            ) : (
              <div className={Styles.spinner_container}>
                <Spinner />
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
          </TabPanel>
          <TabPanel
            contentStyle={`${Styles.tab_content}`}
            className={`${Styles.arm_tab_table}`}
            value={value}
            index={1}
          >
            {status === 'loading' || !status ? (
              <div className={Styles.spinner_container}>
                <Spinner />
              </div>
            ) : (
              <div className={Styles.spinner_container}>
                <Spinner />
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
          </TabPanel>
        </div> */}
      </div>
    </MuiThemeProvider>
  )
}
