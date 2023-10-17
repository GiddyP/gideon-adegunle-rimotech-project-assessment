import { BASE_URI } from "@constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URI,
		fetchFn: async (...args) => {
			const result = await fetch(...args);
			if (result.status === 401 && window.location.pathname != "/login") {
				// store.dispatch(setToken({ token: null }));
				// signOut();
			}
			return result;
		},
	}),

	endpoints: (builder) => ({}),
});

export const {} = api;
