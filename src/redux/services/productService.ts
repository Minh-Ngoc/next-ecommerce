import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL, GET_PRODUCT_LIST, GET_PRODUCT_FILTER, DISPATCH_PRODUCT_ID } from '@/api';

export const userApi = createApi({
  reducerPath: "userApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${URL}/`,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], null>({
      query: () => "users",
    }),
    getUserById: builder.query<User, { id: string }>({
      query: ({ id }) => `users/${id}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;