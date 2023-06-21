import { Link } from "react-router-dom";
import matizadores from "../../assets/img/products/matizadores.jpg";
import alisados from "../../assets/img/servicios/alisado.jpg";

const SecondSection = () => {
	return (
		<>
			<div className="w-full h-full bg-gradient-to-br from-red-200 to-red-100 grid grid-cols-2 p-2 md:place-items-center md:p-0">
				<div className="w-full h-full text-base flex flex-col justify-center items-center text-center gap-4 md:gap-12">
					<h2 className="text-2xl md:text-5xl font-dancing">
						Productos Capilares
					</h2>
					<p className="font-lato text-xl md:text-4xl">Con celulas madres</p>
					<span className="md:text-2xl">Apto para todo tipo de cabellos</span>
					<button
						type="button"
						className=" bg-white rounded-lg p-2 w-fit transition-all duration-300 ease-in hover:bg-red-200 hover:text-white md:text-xl"
					>
						<Link to={"/products"}>Ver Productos</Link>
					</button>
				</div>
				<div className="h-full">
					<img
						src={matizadores}
						alt="Matizadores"
						className="w-full h-full md:rounded-s-full"
					/>
				</div>
			</div>
			<div className="w-full h-full bg-gradient-to-br from-orange-200 to-red-300 grid grid-cols-2 p-2 md:place-items-center md:p-0">
				<div className="h-full">
					<img
						src={alisados}
						alt="Matizadores"
						className="w-full h-full md:rounded-e-full"
					/>
				</div>
				<div className="w-full h-full text-base flex flex-col justify-center items-center text-center gap-4 md:gap-12">
					<h2 className="text-2xl md:text-5xl font-dancing">
						Tratamientos Capilares
					</h2>
					<p className="font-lato text-xl md:text-4xl">Peinados y Alisados</p>
					<span className="md:text-2xl">Trenzas, alisado Japones y mas</span>
					<button
						type="button"
						className="bg-white rounded-lg p-2 w-fit transition-all duration-300 ease-in hover:bg-red-300 hover:text-white md:text-xl"
					>
						<Link to={"/services"}>Ver Servicios</Link>
					</button>
				</div>
			</div>
		</>
	);
};

export default SecondSection;
