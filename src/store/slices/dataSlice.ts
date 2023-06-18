import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  phoneNumber: '',
  email: '',
  userData: {},
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData(state, action) {
      state.phoneNumber = action.payload.phoneNumber
      state.email = action.payload.email
    },
  },
})

export const { setData } = dataSlice.actions

export default dataSlice.reducer
