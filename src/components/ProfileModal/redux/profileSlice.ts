import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    modal: {
      isModalOpen: false,
    },
  },
  reducers: {
    openProfileModal(state) {
      state.modal.isModalOpen = !state.modal.isModalOpen
    },
  },
  extraReducers: {},
})

export const {
  actions: { openProfileModal },
} = profileSlice

export default profileSlice.reducer
