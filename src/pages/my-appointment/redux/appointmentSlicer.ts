import { api } from '@app/api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getAppointmentListPlanned: any = createAsyncThunk('appointment/getAppointmentList', async function () {
  const response = await api.get(`appointments/?status=planned`)
  console.log(response.data)
  return response.data
})
export const getAppointmentListDone: any = createAsyncThunk('appointment/getAppointmentListDone', async function () {
  const response = await api.get(`appointments/?status=done`)
  console.log(response.data)
  return response.data
})
export const getAppointmentListPlannedMore: any = createAsyncThunk(
  'appointment/getAppointmentListPlannedMore',
  async function (page) {
    const response = await api.get(`appointments/?page=${page}&status=planned`)
    return response.data
  },
)
export const getAppointmentListDoneMore: any = createAsyncThunk(
  'appointment/getAppointmentListDoneMore',
  async function (page) {
    const response = await api.get(`appointments/?page=${page}&status=done`)
    return response.data
  },
)
const appointmentSlice = createSlice({
  name: 'appointment',
  initialState: {
    dataPlanned: [],
    dataDone: [],
    statusPlanned: null,
    statusDone: null,
    showMainPage: true,
    paginationPlanned: null,
    paginationDone: null,
    page: 2,
    pageDone: 2,
  },
  reducers: {
    setShowMainPage(state, { payload }) {
      state.showMainPage = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAppointmentListPlanned.fulfilled, (state, action) => {
      state.dataPlanned = action.payload.results
      state.paginationPlanned = action.payload.next
      state.statusPlanned = 'success'
    })
    builder.addCase(getAppointmentListPlanned.pending, (state) => {
      state.statusPlanned = 'loading'
    })
    builder.addCase(getAppointmentListPlanned.rejected, (state) => {
      state.statusPlanned = 'error'
    })
    builder.addCase(getAppointmentListDone.fulfilled, (state, action) => {
      state.dataDone = action.payload.results
      state.paginationDone = action.payload.next
      state.statusDone = 'success'
    })
    builder.addCase(getAppointmentListDone.pending, (state) => {
      state.statusDone = 'loading'
    })
    builder.addCase(getAppointmentListDone.rejected, (state) => {
      state.statusDone = 'error'
    })
    builder.addCase(getAppointmentListPlannedMore.fulfilled, (state, action) => {
      state.dataPlanned.push(...action.payload.results)
      state.paginationPlanned = action.payload.next
      if (state.paginationPlanned !== null) {
        state.page = state.page + 1
      }
    })
    builder.addCase(getAppointmentListDoneMore.fulfilled, (state, action) => {
      state.dataDone.push(...action.payload.results)
      state.paginationDone = action.payload.next
      if (state.paginationDone !== null) {
        state.pageDone = state.pageDone + 1
      }
    })
  },
})

export const { setShowMainPage } = appointmentSlice.actions

export default appointmentSlice.reducer
