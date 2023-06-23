import { Link } from "react-router-dom";
import balsamos from "../../assets/img/products/balsamosGeneral.png";
import alisados from "../../assets/img/servicios/alisado.jpg";

const SecondSection = () => {
	return (
		<>
			<div className="w-full h-full bg-gradient-to-r from-rose-400 to-rose-300 text-white grid grid-cols-2 md:place-items-center md:p-0">
				<div className="w-full h-full text-base flex flex-col justify-center items-center text-center p-2 gap-4 md:gap-12">
					<h2 className="text-2xl px-4 font-dancing md:text-5xl">
						Productos Capilares
					</h2>
					<p className="font-lato text-xl md:text-4xl">Con celulas madres</p>
					<span className="md:text-2xl">Apto para todo tipo de cabellos</span>
					<button
						type="button"
						className=" bg-white rounded-lg p-2 w-fit transition-all text-black duration-300 ease-in lg:p-4 hover:bg-red-200 hover:text-white md:text-xl"
					>
						<Link to={"/products"}>Ver Productos</Link>
					</button>
				</div>
				<div className="h-full w-full">
					<img
						src={balsamos}
						alt="Productos"
						className="w-full h-full md:rounded-s-full"
					/>
				</div>
			</div>
			<div className="w-full h-full bg-gradient-to-r from-rose-300 to-rose-400 text-white grid grid-cols-2 md:place-items-center md:p-0">
				<div className="h-full w-full">
					<img
						src={alisados}
						alt="Servicios"
						className="w-full h-full md:rounded-e-full"
					/>
				</div>
				<div className="w-full h-full text-base flex flex-col justify-center items-center text-center p-2 gap-4 md:gap-12">
					<h2 className="text-2xl font-dancing md:text-5xl">
						Tratamientos Capilares
					</h2>
					<p className="font-lato text-xl md:text-4xl">Peinados y Alisados</p>
					<span className="md:text-2xl">Trenzas, Alisados y mas</span>
					<button
						type="button"
						className="bg-white rounded-lg p-2 w-fit text-black transition-all duration-300 ease-in lg:p-4 hover:bg-red-300 hover:text-white md:text-xl"
					>
						<Link to={"/services"}>Ver Servicios</Link>
					</button>
				</div>
			</div>
		</>
	);
};

export default SecondSection;
