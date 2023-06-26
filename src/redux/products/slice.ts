import { createSlice } from "@reduxjs/toolkit";
import { ProductsInterface } from "../../utils/interfaces/productsInterface";

const initialState: ProductsInterface = {
	allProducts: [],
	startedProducts: [],
	productDetail: {
		id: "",
		name: "",
		src: "",
	},
};

export const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		sortAlphabetically: (state, { payload }) => {
			state.allProducts?.sort((a, b): number => {
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
		},
	},
});

export const reducer = productSlice.actions;
