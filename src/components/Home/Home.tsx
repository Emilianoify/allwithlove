import { featuredProducts, featuredServices } from "../../utils/const";
import ProductsCard from "../Products/ProductsCard";
import ServicesCard from "../Services/ServicesCard";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
const Home = () => {
	return (
		<>
			<main className="w-full flex flex-col justify-center px-4 lg:px-6 lg:h-full font-monserrat relative">
				<section className="w-full h-[500px] lg:h-[800px] flex items-center justify-center text-white bg-gradient-to-tl from-red-200 via-red-300 to-red-300 font-marcellus">
					<FirstSection />
				</section>
				<section className="flex flex-col py-8 gap-2 w-full h-fit items-center animate-fade-down animate-once animate-duration-800 animate-ease-in">
					<span className="text-slate-600">Productos Populares</span>
					<p className="text-3xl lg:text-5xl font-marcellus">Mas Vendidos</p>
					<div className="grid grid-cols-2 gap-2 mt-4 place-items-center lg:gap-8 lg:grid lg:grid-cols-4">
						{featuredProducts.map(({ id, name, src }) => (
							<ProductsCard id={id} key={id} name={name} src={src} />
						))}
					</div>
				</section>
				<section className="flex flex-col py-8 gap-2 w-full h-fit items-center animate-fade-up animate-once animate-duration-800 animate-ease-in">
					<span className="text-slate-600">Servicios Populares</span>
					<p className="text-3xl lg:text-5xl font-marcellus">Mas Solicitados</p>
					<div className="grid grid-cols-2 gap-2 mt-4 place-items-center lg:gap-8 lg:grid lg:grid-cols-4">
						{featuredServices.map(({ id, name, src }) => (
							<ServicesCard id={id} key={id} name={name} src={src} />
						))}
					</div>
				</section>
				<section className="flex flex-col gap-4 lg:grid lg:grid-cols-2 pb-4 place-items-center h-full">
					<SecondSection />
				</section>
			</main>
		</>
	);
};

export default Home;
