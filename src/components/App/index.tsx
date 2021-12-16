import React, { useCallback, useEffect } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import { Footer } from '../Footer'
// import { HomePage } from '../../pages/home'
import { Wrapper } from '../Wrapper'

import { PageNotFount } from '../../pages/not-found'
// import { DevelopingPage } from '../../pages/developing'
import { DoctorPage } from '../../pages/doctor/'
// eslint-disable-next-line import/named
import { AccessDeniedPage } from '../../pages/access-denied'

import { useAppDispatch, useAppSelector } from '@app/redux/hooks'

import Styles from './style.module.scss'
import { getUserRole } from '@app/redux/userSlice'
import { ProtectedRoute } from '@components/Router/protected-route'
// eslint-disable-next-line camelcase
import { USER_ROlES } from '../../global-constants'
import { Spinner } from '@components/Spinner'
import { LandingPage } from '../../pages/landing'
import { UserPage } from '../../pages/user'
import { Header } from '@components/Header'
// eslint-disable-next-line
import { AuthorizationPage } from '../../pages/authorization'
// import { LandingPage } from '../../pages/landing'
import { UserSpace } from '../../pages/user-space'
import { SideMenu } from '@components/SideMenu'
import { AppointmentPage } from '../../pages/appointment-page'
import { MobileMenu } from '@components/MobileMenu'
// import { PersonalData } from '../../pages/doctor/components/PersonalData'
import { tokenCheck, getUser } from '../../pages/authorization/redux/authSlice'
import { Onboarding } from '@components/user/Onboarding'

import { DoctorRoutes } from '../Router/DoctorRoutes'
import { MyAppointment } from '../../pages/my-appointment'

const App = () => {
  const dispatch = useAppDispatch()
  const userId: string | null = useAppSelector((state) => state.user?.userId)
  const user = useAppSelector((state) => state.auth.user.info)
  const userrr = useAppSelector((state) => state.auth.user)
  const userRole = useAppSelector((state) => state.auth.user.info.role)
  const loggedIn = useAppSelector((state) => state.auth.user.isLoggedIn)
  const token = localStorage.getItem('JWT')
  const getUserAgreements = useCallback(() => {
    if (userId) {
      dispatch(getUserRole(userId))
    }
  }, [dispatch, userId])

  useEffect(() => {
    getUserAgreements()
  }, [getUserAgreements])

  useEffect(() => {
    if (token) {
      dispatch(tokenCheck(token)).then(() => dispatch(getUser()))
      // .then(() => dispatch(getMedicalReports()))
    }
    console.log('Зарегистрируйтесь!')
  }, [dispatch, loggedIn])

  console.log('user', userrr)
  console.log('userRole', userRole)

  return (
    <Router>
      <div className={Styles.app_container}>
        {user ? (
          <>
            <section className={Styles.app_wrapper}>
              <SideMenu />
              <Wrapper>
                <Header />
                <Switch>
                  {userRole === 'doctor' && <DoctorRoutes />}

                  <Route path='/' exact component={LandingPage} />
                  <ProtectedRoute
                    allowedUsersTypes={[USER_ROlES.user, USER_ROlES.admin]}
                    path='/example-user-page'
                    exact
                    component={UserPage}
                  />
                  <ProtectedRoute
                    allowedUsersTypes={[USER_ROlES.doctor]}
                    path='/example-doctor'
                    exact
                    component={DoctorPage}
                  />
                  <ProtectedRoute
                    path='/admin-doctor-page'
                    exact
                    component={DoctorPage}
                    allowedUsersTypes={[USER_ROlES.doctor, USER_ROlES.admin, USER_ROlES.user]}
                  />
                  <ProtectedRoute
                    path='/appointment-page'
                    exact
                    component={AppointmentPage}
                    allowedUsersTypes={[USER_ROlES.doctor, USER_ROlES.admin, USER_ROlES.user]}
                  />
                  <ProtectedRoute
                    path='/user-space'
                    exact
                    component={UserSpace}
                    allowedUsersTypes={[USER_ROlES.doctor, USER_ROlES.admin, USER_ROlES.user]}
                  />
                  <ProtectedRoute
                    path='/my-appointment'
                    exact
                    component={MyAppointment}
                    allowedUsersTypes={[USER_ROlES.doctor, USER_ROlES.admin, USER_ROlES.user]}
                  />

                  <Route path='/not-found' exact component={PageNotFount} />
                  <Route path='/access-denied' exact component={AccessDeniedPage} />
                  {/* <Route path='/landing' exact component={LandingPage} /> */}
                  <Route path='/login' exact component={AuthorizationPage} />
                  {/* <Route path='/login' exact component={PersonalData} /> */}
                  <Route path='/onboarding' exact component={Onboarding} />
                  <Route path='*'>
                    <Redirect to='/not-found' />
                  </Route>
                </Switch>
                <Footer />
              </Wrapper>
              <MobileMenu />
            </section>
          </>
        ) : (
          <div className={Styles.spinner_container}>
            <Spinner />
          </div>
        )}
      </div>
    </Router>
  )
}

export default App

// fixing conflicts
