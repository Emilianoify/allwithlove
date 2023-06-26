export interface ProductDetails {
	src: string;
	id: string;
	description?: string;
	name: string;
}

export interface ProductsInterface {
	startedProducts: ProductDetails[];
	allProducts: ProductDetails[];
	productDetail: ProductDetails;
}
