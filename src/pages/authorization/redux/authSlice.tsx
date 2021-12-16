import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '@app/api'
import { UNAUTHORIZED } from '@app/HTTP_CODES'

export const registerUserNumber: any = createAsyncThunk('auth/registerUserNumber', async function (data) {
  const response = await api.post('user/send-code/', data)
  return response
})

export const tokenObtaining: any = createAsyncThunk('auth/tokenObtaining', async function (data) {
  const response = await api.post('user/login/', data)
  return response
})

export const tokenCheck: any = createAsyncThunk('auth/tokenCheck', async function (token) {
  const response = await api.post('token/verify/', { token })
  return response
})

export const getUser: any = createAsyncThunk('auth/getUser', async function () {
  const response = await api.get('user/me/')
  return response
})
export const getMedicalReports: any = createAsyncThunk('auth/getMedicalReports', async function () {
  const response = await api.get('medical-report/')
  return response
})

export const changeUserInfo: any = createAsyncThunk('auth/changeUserInfo', async function (data) {
  const response = await api.patch('user/me/', data)
  return response
})

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      userId: null,
      isNewUser: false,
      isLoggedIn: false,
      info: {
        avatar: null,
        birthday: null,
        email: null,
        first_name: '',
        gender: null,
        height: 0,
        id: 0,
        last_name: '',
        lifestyle: null,
        patronymic: '',
        phone: '',
        role: '',
        weight: null,
      },
    },
    token: {
      refresh: '',
      access: '',
    },
    medicalReport: {
      hasMedicalReport: false,
      data: {
        count: 0,
      },
    },
    isValidInput: {
      email: false,
      first_name: false,
      last_name: false,
      phone: false,
    },
  },
  reducers: {
    handleLogout(state) {
      state.user.isLoggedIn = false
      localStorage.removeItem('JWT')
    },
    setRole(state, { payload }) {
      state.user.info.role = payload
    },
    setIsValidInput(state, { payload }) {
      return {
        ...state,
        isValidInput: {
          ...state.isValidInput,
          [payload.key]: payload.value,
        },
      }
    },
  },
  extraReducers: {
    [registerUserNumber.fulfilled]: (state, action) => {
      state.user.userId = action.payload.data.userId
      state.user.isNewUser = action.payload.data.is_new_user
    },
    [tokenObtaining.fulfilled]: (state, action) => {
      state.token.refresh = action.payload.data.refresh
      state.token.access = action.payload.data.access
      state.user.isLoggedIn = true
      localStorage.setItem('JWT', action.payload.data.access)
    },
    [tokenCheck.fulfilled]: (state, action) => {
      if (action.payload.status === UNAUTHORIZED) {
        state.user.isLoggedIn = false
        localStorage.removeItem('JWT')
      } else {
        state.user.isLoggedIn = true
        api.setUserToken(action.meta.arg)
      }
    },
    [getUser.fulfilled]: (state, action) => {
      state.user.info = action.payload.data
    },
    [getMedicalReports.fulfilled]: (state, { payload }) => {
      state.medicalReport.data = payload.data
      state.medicalReport.hasMedicalReport = payload.data.count > 0
    },
  },
})

export const { handleLogout, setRole, setIsValidInput } = authSlice.actions
export default authSlice.reducer
