import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiTypes } from '@app/apiTypes'
import { api } from '@app/api'

export const getUserRole = createAsyncThunk('user/getUserData', async (userId: string) => {
  const response = await api.get<apiTypes.UserData>(`user/${userId}`)
  return response.data
})

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: null,
    userData: {
      id: 0,
      name: 'Valentin Vorobyov',
      roles: [
        {
          id: 0,
          name: 'admin',
        },
      ],
    },
  },
  reducers: {
    setUserId(state, { payload }) {
      state.userId = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserRole.fulfilled, (state, { payload }) => {
      state.userData = payload
    })
  },
})

export const { setUserId } = userSlice.actions

export default userSlice.reducer
