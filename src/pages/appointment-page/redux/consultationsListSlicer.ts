import { api } from '@app/api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiTypes } from '@app/apiTypes'

export const getConsultationsList: any = createAsyncThunk('consultations/getConsultationsList', async function () {
  const response = await api.get<apiTypes.ConsultationsData>(`consultations/`)
  return response.data
})
// export const getConsultationsById: any = createAsyncThunk('consultations/getConsultationsById', async function (id) {
// const response = await api.get(`consultations/${id}`)
// return response.data
// })

const consultationsListSlice = createSlice({
  name: 'consultations',
  initialState: {
    data: [],
    dataById: {},
    selectConsultationById: null,
    status: null,
  },
  reducers: {
    getDataById(state, { payload }) {
      state.selectConsultationById = payload
      return state
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getConsultationsList.fulfilled, (state, action) => {
      state.data = action.payload.results
      state.status = 'success'
    })
    builder.addCase(getConsultationsList.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(getConsultationsList.rejected, (state) => {
      state.status = 'error'
    })
  },
})

export const { getDataById } = consultationsListSlice.actions

export default consultationsListSlice.reducer
