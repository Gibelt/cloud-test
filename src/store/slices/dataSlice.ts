import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userData: {},
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setUserData(state, action) {
      return {
        ...state,
        userData: {
          ...state.userData,
          ...action.payload,
        },
      }
    },
  },
})

export const { setUserData } = dataSlice.actions

export default dataSlice.reducer
