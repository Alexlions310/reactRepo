import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { apiTypes } from '@app/apiTypes'
import { api } from '@app/api'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const getData = createAsyncThunk('user/getData', async (payload: any) => {
  const response = await api.post<any>(`card/filter/${payload.userId}`, payload.data)
  return response.data as any
})

export const userPageSlice = createSlice({
  name: 'userPage',
  initialState: {
    pageData: [],
    status: null,
    pagination: {
      number: 0,
      size: 10,
      totalElements: null,
      totalPages: null,
    },
  } as unknown as any,

  reducers: {
    changePageSize: (state, action) => {
      state.pagination.size = action.payload
    },
    pageChange: (state, action) => {
      state.pagination.number = action.payload
    },
    checkOrder: (state, action) => {
      console.log('check ->', action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(getData.fulfilled, (state, { payload }) => {
      state.orders = payload?.content || []
      state.pagination = payload?.pageMetadata
      state.status = 'success'
    })
  },
})

const { actions, reducer } = userPageSlice
export const { changePageSize, pageChange } = actions

export default reducer
