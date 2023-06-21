import { Link } from "react-router-dom";
import matizadores from "../../assets/img/products/matizadores.jpg";
import alisados from "../../assets/img/servicios/alisado.jpg";

const SecondSectionMobile = () => {
	return (
		<>
			<div className="w-full bg-gradient-to-br h-full from-red-200 to-red-100 flex rounded-lg">
				<div className="text-xl flex flex-col gap-6 justify-center items-center text-center">
					<img
						src={matizadores}
						alt="Matizadores"
						className="w-full rounded-lg"
					/>
					<h2 className="text-3xl font-dancing">Productos Capilares</h2>
					<p className="font-lato text-2xl">Con celulas madres</p>
					<span>Aptos para todo tipo de cabellos</span>
					<button
						type="button"
						className="border-2 border-red-300 rounded-lg p-2 w-full"
					>
						<Link to={"/products"}>Ver Productos</Link>
					</button>
				</div>
			</div>
			<div className="w-full bg-gradient-to-br h-full from-red-200 to-red-100 flex rounded-lg">
				<div className="text-xl flex flex-col gap-6 justify-center items-center text-center">
					<img
						src={alisados}
						alt="Matizadores"
						className="w-full h-full rounded-lg"
					/>

					<h2 className="text-3xl font-dancing">Tratamientos Capilares</h2>
					<p className="font-lato text-2xl">Peinados y Alisados</p>
					<span>Trenzas, alisado Japones y mas</span>
					<button
						type="button"
						className="border-2 border-red-300 rounded-lg p-2 w-full"
					>
						<Link to={"/services"}>Ver Servicios</Link>
					</button>
				</div>
			</div>
		</>
	);
};

export default SecondSectionMobile;
