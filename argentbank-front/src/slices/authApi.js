import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import apiBaseUrl from "../common/constants";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
  }),
  endpoints: (builder) => ({
    getToken: builder.mutation({
      query: ({email, password}) => ({
        url: "/user/login",
        method: "POST",
        body: {email, password}
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetTokenMutation,
} = authApi;
