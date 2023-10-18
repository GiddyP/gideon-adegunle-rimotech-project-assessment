import { BASE_URI, LoginPayload, LoginResponse, RegisterPayload, RegisterResponse } from "@constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://wokpa.ddns.net',
		fetchFn: async (...args) => {
			const result = await fetch(...args);
			if (result.status === 401 && window.location.pathname != "/login") {
				// store.dispatch(setToken({ token: null }));
				// signOut();
			}
			return result;
		},
	}),

	endpoints: (builder) => ({
		login: builder.mutation<LoginResponse, LoginPayload>({
			query: (payload) => ({
				url: "/api/listeners/login",
				method: "POST",
				body: payload,
			}),
		}),
		register: builder.mutation<RegisterResponse, RegisterPayload>({
			query: (payload) => ({
				url: "/api/listeners/register",
				method: "POST",
				body: payload,
			}),
		}),
	}),
});

export const {useLoginMutation, useRegisterMutation} = api;
