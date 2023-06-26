import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isMobile, products } from "../../utils/const";
import { setLocalItems } from "../../utils/utils";
import Paginate from "../Paginate/Paginate";
import ToolBar from "../ToolBar/ToolBar";
import ProductsCard from "./ProductsCard";

const Products = () => {
	const [currentPage, setCurrentPage] = useState(0);
	const [order, setOrder] = useState("");

	// Desktop Const
	const postPerPage = 8;
	const allPostPage = currentPage * postPerPage;
	const index = allPostPage - postPerPage;
	const currentPosts = products.slice(index, allPostPage);
	const totalPages = Math.ceil(products.length / postPerPage);
	const paginate = (pageNumber: number): void => {
		setCurrentPage(pageNumber);
	};
	// Mobile Const
	const postPerMobilePage = 4;
	const allMobilePages = currentPage * postPerMobilePage;
	const mobileIndex = allMobilePages - postPerMobilePage;
	const mobilePosts = products.slice(mobileIndex, allMobilePages);
	const totalMobilePages = Math.ceil(products.length / postPerMobilePage);

	useEffect(() => {
		setLocalItems("products", products);
		setCurrentPage(1);
	}, [products, order]);

	return (
		<div className="w-full h-full font-monserrat p-4">
			<p className="p-4 md:p-8 text-neutral-400">
				<Link to="/">Home</Link> / Productos
			</p>
			<div className="font-lato pl-4 md:pl-8 text-base flex flex-col">
				<h1 className="text-2xl md:text-4xl">Productos Capilares</h1>
				<ToolBar setCurrentPage={setCurrentPage} setOrder={setOrder} />
			</div>
			<div className="grid grid-cols-2 gap-2 mt-4 place-items-center lg:gap-8 lg:grid lg:grid-cols-4">
				{isMobile
					? mobilePosts.map(({ id, name, src }) => (
							<ProductsCard id={id} key={id} name={name} src={src} />
					  ))
					: currentPosts.map(({ id, name, src }) => (
							<ProductsCard id={id} key={id} name={name} src={src} />
					  ))}
			</div>
			{isMobile ? (
				<Paginate
					currentPage={currentPage}
					paginate={paginate}
					totalPages={totalMobilePages}
					setCurrentPage={setCurrentPage}
				/>
			) : (
				<Paginate
					currentPage={currentPage}
					totalPages={totalPages}
					paginate={paginate}
					setCurrentPage={setCurrentPage}
				/>
			)}
		</div>
	);
};

export default Products;