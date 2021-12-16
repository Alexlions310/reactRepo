import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { apiTypes } from '@app/apiTypes'
import { api } from '@app/api'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

export const getListAppointments: any = createAsyncThunk('doctor/getListAppointments', async (data) => {
  const response = await api.get('appointments/', data)
  return response
})

export const getListAppointmentsDate: any = createAsyncThunk('doctor/getListAppointmentsDate', async (data: any) => {
  const response = await api.get(
    `appointments?day_reception_after=${data.dayAfter}&day_reception_before=${data.dayBefore}`,
    data,
  )
  return response
})

export const getListPatients: any = createAsyncThunk('doctor/getListPatients', async () => {
  const response = await api.get('user/users/')
  return response
})

export const getPatient: any = createAsyncThunk('doctor/getPatient', async (data) => {
  const response = await api.get(`user/users/${data}`)
  return response
})

export const createAppointment: any = createAsyncThunk('doctor/createAppointment', async (data) => {
  const response = await api.post('appointments/', data)
  return response
})

export const getAppointment: any = createAsyncThunk('doctor/getAppointment', async (data) => {
  const response = await api.get(`appointments/${data}`, data)
  return response
})

export const changeAppointment: any = createAsyncThunk('doctor/changeAppointment', async (data) => {
  const response = await api.put(`appointments/${data}`, data)
  return response
})

export const changeFieldAppointment: any = createAsyncThunk('doctor/changeFieldAppointment', async (data) => {
  const response = await api.patch(`appointments/${data}`, data)
  return response
})

export const deleteAppointment: any = createAsyncThunk('doctor/deleteAppointment', async (data) => {
  const response = await api.delete(`appointments/${data}`)
  return response
})

export const startAppointment: any = createAsyncThunk('doctor/startAppointment', async (data) => {
  const response = await api.post(`appointments/${data}/start`, data)
  return response
})

export const uploadFilesAppointment: any = createAsyncThunk('doctor/uploadFilesAppointment', async (data) => {
  const response = await api.post(`appointments/${data}/upload`, data)
  return response
})

export const createMedicalReport: any = createAsyncThunk('doctor/createMedicalReport', async (data) => {
  const response = await api.post('medical-report/', data)
  return response
})

export const getDoctorCalendar: any = createAsyncThunk('doctor/getDoctorCalendar', async (data) => {
  const response = await api.get('time/calendar/doctor/', data)
  return response
})

export const getConsultationDirection: any = createAsyncThunk('doctor/getConsultationDirection', async (data) => {
  const response = await api.get('consultations/', data)
  return response
})

export const getConsultationType: any = createAsyncThunk('doctor/getConsultationType', async (data) => {
  const response = await api.get('consultations/types/', data)
  return response
})

export const getListNotifications: any = createAsyncThunk('doctor/getListNotifications', async (data) => {
  const response = await api.get('notifications/', data)
  return response
})

export const doctorSlice = createSlice({
  name: 'doctor',
  initialState: {
    listAppointments: [],
    listAppointmentsDone: [],
    listPatients: [],
    listUniqPatients: [],
    listConsultationType: [],
    listConsultationDirection: [],
    currentAppointment: {},
    currentPatient: {},
    currentAppointmentsPatient: [],
    displayModal: false,
    dataAppointment: {
      doctor: 1,
      consultation_type: null,
      description: '',
      is_online: true,
      time_reception: '',
      day_reception: '',
    },
    dateAppointment: '',
    pageData: [],
    status: null,
    error: null,
    pagination: {
      number: 0,
      size: 10,
      totalElements: null,
      totalPages: null,
    },
    filterIndex: 0,
    filter: ['day', 'week', 'month'],
  } as unknown as any, // тут будет тип из apiTypes
  reducers: {
    changePageSize: (state, { payload }) => {
      state.pagination.size = payload
    },
    pageChange: (state, { payload }) => {
      state.pagination.number = payload
    },
    toggleModal: (state) => {
      state.displayModal = !state.displayModal
    },
    filterChange: (state, { payload }) => {
      state.filterIndex = payload
    },
    filterForward: (state) => {
      if (state.filterIndex === state.filter.length - 1) {
        state.filterIndex = 0
      } else {
        state.filterIndex++
      }
    },
    filterBackward: (state) => {
      if (state.filterIndex === 0) {
        state.filterIndex = state.filter.length - 1
      } else {
        state.filterIndex--
      }
    },
    setListUniqPatients: (state, { payload }) => {
      state.listUniqPatients = payload
    },
    setCurrentPatient: (state, { payload }) => {
      state.currentPatient = payload
    },
    setCurrentAppointmentsPatient: (state, { payload }) => {
      state.currentAppointmentsPatient = payload
    },
    setDataAppointment: (state, { payload }) => {
      state.dataAppointment = payload
    },
    setDateAppointment: (state, { payload }) => {
      state.dateAppointment = payload
    },
  },
  extraReducers: {
    [getListPatients.fulfilled]: (state, { payload }) => {
      console.log('getListPatients', payload)
      state.listPatients = payload.data.results

      const obj = {}

      payload.data.results.forEach((patient) => {
        obj[patient.id] = patient
      })

      const uniqPatients = Object.keys(obj).map((id) => {
        return obj[id]
      })

      state.listUniqPatients = uniqPatients
      state.status = 'success'
    },
    [getListPatients.rejected]: (state, { payload }) => {
      console.log('getListPatients', payload)
      state.status = 'error'
    },
    [getListAppointmentsDate.fulfilled]: (state, { payload }) => {
      console.log('getListAppointmentsDate', payload)
      state.status = 'success'
    },
    [getListAppointmentsDate.rejected]: (state, { payload }) => {
      console.log('getListAppointmentsDate', payload)
      state.status = 'error'
    },
    [getPatient.fulfilled]: (state, { payload }) => {
      console.log('getPatient', payload)
      state.currentPatient = payload.data
      state.status = 'success'
    },
    [getPatient.rejected]: (state, { payload }) => {
      console.log('getPatient', payload)
      state.status = 'error'
    },
    [getListAppointments.pending]: (state) => {
      state.status = 'loading'
    },
    [getListAppointments.fulfilled]: (state, { payload }) => {
      console.log('getListAppointments', payload)
      state.listAppointments = payload.data.results

      const doneAppointments = payload.data.results.filter((item) => item.status === 'done')

      state.listAppointmentsDone = doneAppointments
      state.status = 'success'
    },
    [getListAppointments.rejected]: (state, { payload }) => {
      console.log('getListAppointments', payload)
      state.status = 'error'
    },
    [createAppointment.fulfilled]: (state, { payload }) => {
      console.log('createAppointment', payload)
      state.status = 'success'
    },
    [getAppointment.fulfilled]: (state, { payload }) => {
      console.log('getAppointment', payload)
      state.currentAppointment = payload
      state.status = 'success'
    },
    [changeAppointment.fulfilled]: (state, { payload }) => {
      console.log('changeAppointment', payload)
      state.status = 'success'
    },
    [changeFieldAppointment.fulfilled]: (state, { payload }) => {
      console.log('changeFieldAppointment', payload)
      state.status = 'success'
    },
    [deleteAppointment.fulfilled]: (state, { payload }) => {
      console.log('deleteAppointment', payload)
      state.status = 'success'
    },
    [startAppointment.fulfilled]: (state, { payload }) => {
      console.log('startAppointment', payload)
      state.status = 'success'
    },
    [uploadFilesAppointment.fulfilled]: (state, { payload }) => {
      console.log('uploadFilesAppointment', payload)
      state.status = 'success'
    },
    [createMedicalReport.fulfilled]: (state, { payload }) => {
      console.log('createMedicalReport', payload)
      state.status = 'success'
    },
    [getDoctorCalendar.fulfilled]: (state, { payload }) => {
      console.log('getDoctorCalendar', payload)
      state.status = 'success'
    },
    [getConsultationDirection.fulfilled]: (state, { payload }) => {
      console.log('getConsultationDirection', payload)
      state.listConsultationDirection = payload.data.results
      state.status = 'success'
    },
    [getConsultationType.fulfilled]: (state, { payload }) => {
      console.log('getConsultationType', payload)
      state.listConsultationType = payload.data.results
      state.status = 'success'
    },
    [getListNotifications.fulfilled]: (state, { payload }) => {
      console.log('getListNotifications', payload)
      state.status = 'success'
    },
  },
})

const { actions, reducer } = doctorSlice

export const {
  toggleModal,
  changePageSize,
  pageChange,
  filterChange,
  filterForward,
  filterBackward,
  setCurrentPatient,
  setCurrentAppointmentsPatient,
  setDataAppointment,
  setDateAppointment,
} = actions
export default reducer
