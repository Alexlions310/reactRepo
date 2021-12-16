import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import userCardHistorySlice from '../../pages/home/redux/userCardHistory'
import userPageSlice from '../../pages/user/redux/userPageSlicer'
import doctorSlicer from '../../pages/doctor/redux/doctorSlicer'
import consultationSlice from '../../pages/appointment-page/redux/consultationSlicer'
import choieConsultationSlice from '../../pages/appointment-page/redux/choiсeConsultationSlicer'
import authSlice from '../../pages/authorization/redux/authSlice'
import profileSlice from '@components/ProfileModal/redux/profileSlice'
import consultationsListSlice from '../../pages/appointment-page/redux/consultationsListSlicer'
import consultationsDateSlice from '../../pages/appointment-page/redux/consultationDateSliser'
import reportsSlice from '@components/MedicalReportsModal/redux/reportsSlice'
import appointmentSlice from '../../pages/my-appointment/redux/appointmentSlicer'
import appointmentByIdSlicer from '../../pages/my-appointment/redux/appointmentByIdSlicer'

export const store = configureStore({
  reducer: {
    user: userSlice,
    userCard: userCardHistorySlice,
    userPage: userPageSlice,
    doctor: doctorSlicer,
    consultationPage: consultationSlice,
    choieConsultationPage: choieConsultationSlice,
    consultationsList: consultationsListSlice,
    consultationCalendar: consultationsDateSlice,
    auth: authSlice,
    profile: profileSlice,
    reports: reportsSlice,
    myAppointment: appointmentSlice,
    myAppointmentById: appointmentByIdSlicer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
