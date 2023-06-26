import { createSlice } from "@reduxjs/toolkit";
import { ProductsInterface } from "../../utils/interfaces/productsInterface";
import { products } from "../../utils/const";

const initialState: ProductsInterface = {
	allProducts: products,
	startedProducts: products,
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
		getProducts: (state, {payload})=>{
				state.allProducts = products;
				state.startedProducts = products;
		},
		sortAlphabetically: (state, { payload }) => {
			state.allProducts.sort((a, b): number => {
				
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
