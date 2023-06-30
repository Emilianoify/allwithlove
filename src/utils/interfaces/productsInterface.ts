export interface ProductDetails {
	src: string;
	id: string;
	description?: string;
	applicationMode?: string;
	name: string;
	type: string;
}

export interface ProductsInterface {
	startedProducts: ProductDetails[];
	allProducts: ProductDetails[];
	productDetail: ProductDetails;
}
