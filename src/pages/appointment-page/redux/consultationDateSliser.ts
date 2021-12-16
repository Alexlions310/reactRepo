import { api } from '@app/api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getConsultationCalendar: any = createAsyncThunk(
  'consultationCalendar/getConsultationCalendar',
  async (payload: any) => {
    const response = await api.get(
      `time/calendar/patient/?start_date=${payload.start_date}&end_date=${payload.end_date}&doctor=${payload.doctor}`,
    )
    return response.data
  },
)

const consultationsDateSlice = createSlice({
  name: 'consultationCalendar',
  initialState: {
    data: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getConsultationCalendar.fulfilled, (state, action) => {
      state.data = action.payload
      state.status = 'success'
    })
    builder.addCase(getConsultationCalendar.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(getConsultationCalendar.rejected, (state) => {
      state.status = 'error'
    })
  },
})

// export const { getDataById } = consultationsDateSlice.actions

export default consultationsDateSlice.reducer
