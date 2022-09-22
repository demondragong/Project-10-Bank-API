import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import apiBaseUrl from "../utils/constants";


// Define a service using a base URL and expected endpoints
export const argentBankApi = createApi({
    reducerPath: 'argentBankApi',
    baseQuery: fetchBaseQuery({
        baseUrl: apiBaseUrl,
        prepareHeaders: (headers) => {
            const user = JSON.parse(localStorage.getItem("user"));
            if (user && user.token) {
                headers.set('authorization', `Bearer ${user.token}`)
            }
            return headers
        }
    }),
    endpoints: (builder) => ({
      postUserProfile: builder.query({
        query: () => ({url: '/user/profile', method: 'POST' })
      }),
    }),
  })
  
  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
  export const { usePostUserProfileQuery } = argentBankApi

  