import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Data {
  userData: object
}

export const Api = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.sbercloud.ru/content/v1/bootcamp/frontend',
  }),
  endpoints: (builder) => ({
    sendData: builder.mutation<Data, Partial<Data>>({
      query: (body) => ({
        url: '',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useSendDataMutation } = Api
