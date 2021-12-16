import { api } from '@app/api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiTypes } from '@app/apiTypes'

export const getAppointmentById: any = createAsyncThunk('appointment/getAppointmentList', async function (id) {
  const response = await api.get(`appointments/${id}`)
  return response.data
})

const appointmentByIdSlice = createSlice({
  name: 'appointmentById',
  initialState: {
    dataById: null,
    status: null,
    selectById: null,
  },
  reducers: {
    setSelectById(state, { payload }) {
      state.selectById = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAppointmentById.fulfilled, (state, action) => {
      state.dataById = action.payload
      state.status = 'success'
    })
    builder.addCase(getAppointmentById.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(getAppointmentById.rejected, (state) => {
      state.status = 'error'
    })
  },
})

export const { setSelectById } = appointmentByIdSlice.actions

export default appointmentByIdSlice.reducer
