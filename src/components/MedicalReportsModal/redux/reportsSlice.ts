import { api } from '@app/api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// export const getUserRole = createAsyncThunk('user/getUserData', async (userId: string) => {
//   const response = await api.get<apiTypes.UserData>(`user/${userId}`)
//   return response.data
// })
export const postMedicalReport: any = createAsyncThunk('reports/postMedicalReport', async (values) => {
  const response = await api.post('medical-report/', values)
  return response
})

export const postDietReport: any = createAsyncThunk('reports/postDietReport', async (values) => {
  const response = await api.post('diet-report/', values)
  return response
})

export const getMedicalReportId: any = createAsyncThunk('reports/getMedicalReportId', async (appointmentId) => {
  const response = await api.get(`appointments/${appointmentId}`)
  return response
})

export const reportsSlice = createSlice({
  name: 'reports',
  initialState: {
    modalIsOpen: false,
    appointmentId: null,
    medicalReportId: null,
    errors: null,
  },
  reducers: {
    setReportsModalOpen(state, { payload }) {
      state.modalIsOpen = payload
    },
    setAppointmentId(state, { payload }) {
      state.appointmentId = payload
    },
    setMedicalReportId(state, { payload }) {
      state.appointmentId = payload
    },
  },
  extraReducers: {
    [postMedicalReport.fulfilled]: (state, { payload }) => {
      if (payload.status === 201) {
        state.medicalReportId = payload.data.id
        console.log(payload)
      } else {
        // console.log(payload)
        state.errors = payload.data
      }
    },
    [postDietReport.fulfilled]: (state, { payload }) => {
      if (payload.status === 201) {
        state.modalIsOpen = false
      } else {
        console.log(payload)
        state.errors = payload.data
      }
    },
    [getMedicalReportId.fulfilled]: (state, { payload }) => {
      state.medicalReportId = payload?.data?.medical_report?.id
    },
  },
})

export const { setReportsModalOpen, setAppointmentId } = reportsSlice.actions

export default reportsSlice.reducer
