import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import apiBaseUrl from "../common/constants";

// Define a service using a base URL and expected endpoints
export const argentBankApi = createApi({
  reducerPath: "argentBankApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
    prepareHeaders: (headers) => {
      const token = JSON.parse(localStorage.getItem("token"));
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['user names'],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({username: email, password}) => ({
        url: "/user/login",
        method: "POST",
        body: {email, password}
      }),
    }),
    postUserProfile: builder.query({
      query: () => ({
        url: "/user/profile",
        method: "POST",
      }),
      providesTags: ['user names']
    }),
    editUserNames: builder.mutation({
      query: (newNames) => ({
        url: "/user/profile",
        method: "PUT",
        body: newNames,
      }),
      invalidatesTags: ['user names']
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useLoginMutation,
  usePostUserProfileQuery,
  useEditUserNamesMutation
} = argentBankApi;
