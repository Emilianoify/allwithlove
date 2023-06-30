import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../utils/const";
import { ProductsInterface } from "../../utils/interfaces/productsInterface";

const initialState: ProductsInterface = {
	allProducts: products,
	startedProducts: products,
	productDetail: {
		id: "",
		name: "",
		src: "",
		type: "",
		applicationMode: "",
	},
};

export const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		getProducts: (state) => {
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
		filterType: (state, { payload }) => {
			const startedProducts = state.startedProducts;
			const productsFiltered = startedProducts.filter((product) => {
				return product.type.includes(payload);
			});
			if (payload === "EmptyFilters") {
				state.allProducts = startedProducts;
			} else {
				state.allProducts = productsFiltered;
			}
		},
	},
});

export const reducer = productSlice.actions;
