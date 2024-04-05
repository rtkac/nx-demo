import { configureStore } from "@reduxjs/toolkit";

import { commonApiClient } from "./apiClients";

export const store = configureStore({
	devTools: process.env.NODE_ENV === "development",
	reducer: {
		[commonApiClient.reducerPath]: commonApiClient.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(commonApiClient.middleware);
	},
});

export type RootState = ReturnType<typeof store.getState>;
