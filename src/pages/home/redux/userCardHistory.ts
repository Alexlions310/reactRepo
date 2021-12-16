import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '@app/api'
import { apiTypes } from '@app/apiTypes'

export const getUserCardHistory = createAsyncThunk('cardHistory/getUserCardHistory', async (userId: string) => {
  const response = await api.get<apiTypes.UserCard[]>(`userCardHistories/${userId}`)
  return response.data
})

export const userCardHistorySlice = createSlice({
  name: 'userCard',
  initialState: {
    userCardHistory: null,
    status: null,
  } as apiTypes.UserCardHistory,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getUserCardHistory.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(getUserCardHistory.fulfilled, (state, { payload }) => {
      state.userCardHistory = payload
      state.status = 'success'
    })
  },
})

export default userCardHistorySlice.reducer
