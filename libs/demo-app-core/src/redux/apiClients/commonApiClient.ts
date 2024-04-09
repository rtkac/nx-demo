import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { User } from "@core/types";

export const commonApiClient = createApi({
	baseQuery: fetchBaseQuery({
		// baseUrl: "http://localhost:3000/api/common",
		baseUrl: "https://jsonplaceholder.typicode.com",
		headers: {},
	}),
	tagTypes: ["users"],
	endpoints: (builder) => {
		return {
			users: builder.query<User[], void>({
				query: () => ({
					url: "/users",
				}),
				providesTags: ["users"],
			}),
			createUser: builder.mutation<
				void,
				{ firstName: string; lastName: string; email: string }
			>({
				query: (body) => ({
					url: "/users",
					method: "POST",
					body,
				}),
				invalidatesTags: ["users"],
			}),
		};
	},
});
