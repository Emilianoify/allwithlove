import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooksRedux";
import { getProducts } from "../../redux/products/actions";
import { isMobile } from "../../utils/const";
import { setLocalItems } from "../../utils/utils";
import Paginate from "../Paginate/Paginate";
import ProductsToolbar from "../ToolBars/ProductsToolbar";
import ProductsCard from "./ProductsCard";
import { AiOutlineSearch } from "react-icons/ai";

const Products = () => {
	const [currentPage, setCurrentPage] = useState(0);
	const [order, setOrder] = useState("");
	const dispatch = useAppDispatch();
	const products = useAppSelector((state) => state.products.allProducts);
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
		dispatch(getProducts);
		setLocalItems("products", products);
		setCurrentPage(1);
	}, [products, order]);

	return (
		<div className="w-full h-full font-monserrat p-4">
			<p className="p-4 md:p-8 text-neutral-400">
				<Link to="/">Home</Link> / Productos
			</p>
			<div className="w-full pb-4 flex justify-center items-center">
				<form className="flex border-2 p-2 rounded-xl cursor-pointer w-3/4">
					<input
						type="text"
						placeholder="Buscar producto.."
						className="border-gray-300 focus:outline-none border-r-2 w-full"
					/>
					<button
						type="submit"
						className="w-16 items-center justify-center flex"
					>
						<AiOutlineSearch size={20} />
					</button>
				</form>
			</div>
			<div className="font-lato pl-4 md:pl-8 text-base flex flex-col">
				<h1 className="text-2xl md:text-4xl">Productos Capilares</h1>
				<ProductsToolbar setCurrentPage={setCurrentPage} setOrder={setOrder} />
			</div>
			<div className="grid grid-cols-2 gap-2 mt-4 place-items-center lg:gap-8 lg:grid lg:grid-cols-4">
				{isMobile
					? mobilePosts.map(({ id, name, src, type }) => (
							<ProductsCard
								id={id}
								key={id}
								name={name}
								src={src}
								type={type}
							/>
					  ))
					: currentPosts.map(({ id, name, src, type }) => (
							<ProductsCard
								id={id}
								key={id}
								name={name}
								src={src}
								type={type}
							/>
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
