import { Link } from "react-router-dom";
import matizadores from "../../assets/img/products/matizadores.jpg";
import alisados from "../../assets/img/servicios/alisado.jpg";

const SecondSectionDesktop = () => {
	return (
		<>
			<div className="w-full bg-gradient-to-br from-red-200 to-red-100 grid grid-cols-2 place-items-center">
				<div className="text-xl flex flex-col gap-12 items-center text-center">
					<h2 className="text-5xl font-dancing">Productos Capilares</h2>
					<p className="font-lato text-3xl">Con celulas madres</p>
					<span>Aptos para todo tipo de cabellos</span>
					<button
						type="button"
						className=" bg-white rounded-lg p-4 w-fit transition-all duration-300 ease-in hover:bg-red-200 hover:text-white"
					>
						<Link to={"/products"}>Ver Productos</Link>
					</button>
				</div>
				<div>
					<img
						src={matizadores}
						alt="Matizadores"
						className="w-full h-3/4 rounded-s-full"
					/>
				</div>
			</div>
			<div className="w-full h-full bg-gradient-to-br from-orange-200 to-red-300 grid grid-cols-2 place-items-center">
				<div className="h-full">
					<img
						src={alisados}
						alt="Matizadores"
						className="w-full h-full rounded-e-full"
					/>
				</div>
				<div className="text-xl flex flex-col items-center text-center gap-12">
					<h2 className="text-5xl font-dancing">Tratamientos Capilares</h2>
					<p className="font-lato text-3xl">Peinados y Alisados</p>
					<span>Trenzas, alisado Japones y mas</span>
					<button
						type="button"
						className="bg-white rounded-lg p-4 w-fit transition-all duration-300 ease-in hover:bg-red-300 hover:text-white"
					>
						<Link to={"/services"}>Ver Servicios</Link>
					</button>
				</div>
			</div>
		</>
	);
};

export default SecondSectionDesktop;
