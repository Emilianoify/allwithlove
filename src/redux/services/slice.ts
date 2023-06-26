import { createSlice } from "@reduxjs/toolkit";
import { serviceInterface } from "../../utils/interfaces/servicesInterface";

const initialState: serviceInterface = {
	allServices: [],
	startedServices: [],
	serviceDetail: {
		id: "",
		name: "",
		src: "",
	},
};

export const serviceSlice = createSlice({
	name: "product",
	initialState,
	reducers: {},
});

export default serviceSlice.reducer;
