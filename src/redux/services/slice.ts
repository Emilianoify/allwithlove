import { createSlice } from "@reduxjs/toolkit";
import { serviceInterface } from "../../utils/interfaces/servicesInterface";
import { services } from "../../utils/const";

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
	name: "services",
	initialState,
	reducers: {
		getServices: (state)=>{
			state.allServices = services;
			state.startedServices = services;
	},
	sortAlphabetically: (state, { payload }) => {
		state.allServices.sort((a, b): number => {
			
			if (payload === "A-z") {
				if (a.name < b.name) return -1;
				if (b.name < a.name) return 1;
				return 0;
			} else if (payload === "Z-a") {
				if (b.name < a.name) return -1;
				if (a.name < b.name) return 1;
				return 0;
			}
			return 0;
		});
	}
}
});

export const reducer = serviceSlice.actions;
