import { createSlice } from '@reduxjs/toolkit'

const choieConsultationSlice = createSlice({
  name: 'choiceConsultationPage',
  initialState: {
    list: [
      {
        id: 0,
        title: 'Консультация',
        textDefault: 'Выберите направление консультации',
        isActive: true,
        isPassed: true,
        isFull: false,
        mobile: false,
      },
      {
        id: 1,
        title: 'Тип приема и консультации',
        textDefault: 'Выберите тип приема и консультации',
        isActive: false,
        isPassed: false,
        isFull: false,
        mobile: false,
      },
      {
        id: 2,
        title: 'Дата и время',
        textDefault: 'Выберите дату и время приема',
        isActive: false,
        isPassed: false,
        isFull: false,
        mobile: false,
      },
      {
        id: 3,
        title: 'Личные данные',
        textDefault: 'Укажите ваши личные данные',
        isActive: false,
        isPassed: false,
        isFull: false,
        mobile: false,
      },
    ],
    stateTotalComponent: true,
    mobilePagination: false,
    loadContainer: false,
    finishStep: false,
  },
  reducers: {
    consultationActive(state, { payload }) {
      state.list.map((item) => {
        if (payload === item.id) {
          item.isActive = true
          item.isPassed = true
          item.isFull = false
          return state
        }
        item.isActive = false
        item.isFull = item.id < payload
        return state
      })
    },

    changeTitle(state, { payload }) {
      state.list[payload.id].textDefault = payload.value
    },
    mobileState(state, { payload }) {
      state.list[payload.id].mobile = payload.value
    },
    mobileStatePagination(state, { payload }) {
      state.mobilePagination = payload
    },
    setStateTotalComponent(state, { payload }) {
      state.stateTotalComponent = payload
    },
    setLoadContainer(state, { payload }) {
      state.loadContainer = payload
    },
    setFinishStep(state, { payload }) {
      state.finishStep = payload
      state.list[3].isActive = false
    },
  },
})

export const {
  consultationActive,
  changeTitle,
  setStateTotalComponent,
  mobileState,
  mobileStatePagination,
  setLoadContainer,
  setFinishStep,
} = choieConsultationSlice.actions

export default choieConsultationSlice.reducer
