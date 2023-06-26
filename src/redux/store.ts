import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./products/slice";
import { serviceSlice } from "./services/slice";

export const store = configureStore({
	reducer: {
		products: productSlice.reducer,
		services: serviceSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
