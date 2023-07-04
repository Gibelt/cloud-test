import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './slices/dataSlice'
import { Api } from '../api/api'

export interface Root {
  data: {
    userData: object
  }
}

export const store = configureStore({
  reducer: {
    [Api.reducerPath]: Api.reducer,
    data: dataReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
})
