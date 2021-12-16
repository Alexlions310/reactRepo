import { api } from '@app/api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const createAppointment: any = createAsyncThunk('consultationPage/createAppointment', async (data: any) => {
  const response = await api.post<any>('appointments/', data)
  return response as any
})
export const editAppointmentById: any = createAsyncThunk('appointment/getAppointmentList', async function (id, data) {
  const response = await api.patch(`appointments/${id}`, data)
  console.log(response.data)
  return response.data
})
const consultationSlice = createSlice({
  name: 'consultationPage',
  initialState: {
    data: {
      priceType: null,
      title: '',
      priceWay: null,
      valueOptional: '',
      selectDay: '',
      selectTime: null,
      selectTimeForTotal: null,
      is_online: null,
      consultation_type: null,
      selectDayForTitle: '',
      dayOfBirth: null,
      doctor: null,
      day_reception: null,
      email: null,
      address: null,
      coordinateX: null,
      coordinateY: null,
    },
    responseData: {
      consultation_type: 1,
      day_reception: null,
      description: '',
      doctor: null,
      is_online: null,
      time_reception: null,
    },
    dataUser: {
      birthday: null,
      first_name: '',
      gender: null,
    },
    status: null,
  },
  reducers: {
    setData(state, { payload }) {
      return {
        ...state,
        data: {
          ...state.data,
          [payload.key]: payload.value,
        },
      }
    },
    setUserData(state, { payload }) {
      return {
        ...state,
        dataUser: {
          ...state.dataUser,
          [payload.key]: payload.value,
        },
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createAppointment.fulfilled, (state, action) => {
      state.responseData = action.payload.data
      state.status = 'success'
    })
    builder.addCase(createAppointment.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(createAppointment.rejected, (state) => {
      state.status = 'error'
    })
  },
})

export const { setData, setUserData } = consultationSlice.actions

export default consultationSlice.reducer
