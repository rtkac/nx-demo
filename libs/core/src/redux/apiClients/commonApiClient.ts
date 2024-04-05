import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { User } from "../../types/api";

export const commonApiClient = createApi({
	baseQuery: fetchBaseQuery({
		// baseUrl: "http://localhost:3000/api/common",
		baseUrl: "https://jsonplaceholder.typicode.com",
		headers: {},
	}),
	endpoints: (builder) => {
		return {
			users: builder.query<User[], void>({
				query: () => ({
					url: "/users",
				}),
			}),
		};
	},
});
