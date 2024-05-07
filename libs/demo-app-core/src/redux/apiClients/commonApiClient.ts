import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { User } from '@core/types'

export const commonApiClient = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/common',
    // baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ['users'],
  keepUnusedDataFor: 5,
  endpoints: (builder) => {
    return {
      users: builder.query<User[], void>({
        query: () => ({
          url: '/users',
        }),
        providesTags: ['users'],
        keepUnusedDataFor: 2,
      }),
      createUser: builder.mutation<void, { firstName: string; lastName: string; email: string }>({
        query: (body) => ({
          url: '/users',
          method: 'POST',
          body,
        }),
        invalidatesTags: ['users'],
      }),
    }
  },
})
