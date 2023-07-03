import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks/hooksRedux";
import Divider from "../Divider/Divider";
import { BsCart } from "react-icons/bs";

const ProductsDetail = () => {
	const { id } = useParams();

	const products = useAppSelector((state) => state.products.allProducts);
	const product = products.filter((pid) => pid.id === id);

	const { name, description, src, applicationMode } = product[0];

	return (
		<div className="w-full h-full p-4 flex flex-col items-center font-monserrat">
			<h1 className="text-center text-3xl py-4 font-lato md:text-5xl">
				Lo mejor para tu pelo: <span className="font-dancing"> {name} </span>
			</h1>
			<div className="w-full h-full flex flex-col lg:grid lg:grid-cols-2 lg:gap-4">
				<div className="w-full flex flex-col">
					<div className="grid w-full place-items-center">
						<div>
							<img
								src={src}
								alt={"Product"}
								className="w-[400px] h-[500px] rounded-xl"
							/>
						</div>
					</div>
				</div>
				<div className="w-full items-center flex flex-col lg:items-start lg:py-8">
					<button
						type="button"
						className="w-full lg:w-fit border rounded-lg p-4 transition-all duration-200 ease-in-out hover:bg-rose-300 hover:text-white hover:font-bold"
					>
						<a
							className="flex gap-2 justify-center items-center"
							target="_blank"
							href={`https://api.whatsapp.com/send?phone=5491133111585&text=¡Hola!Estoy interesado en comprar ${name}. Por favor, envíenme más información.`}
							rel="noreferrer"
						>
							<BsCart /> Comprar ahora
						</a>
					</button>

					<ul className="text-xl mt-2 font-lustria w-full text-center lg:text-left">
						<p className="text-3xl py-2">Modo de uso</p>
						{applicationMode
							? applicationMode.split(". ").map((step, i) => (
									<li key={i + step} className="py-1.5 text-2xl">
										<span className="">{i + 1}</span> {step}
									</li>
							  ))
							: "Este producto no posee modo de uso"}
					</ul>
				</div>
			</div>
			<div className="w-full max-w-screen-xl text-center text-xl leading-9">
				<Divider />
				<h3 className="py-2 font-bold font-lustria text-3xl">
					Mas sobre: {name}
				</h3>
				<p>{description}</p>

				<Divider />
			</div>
		</div>
	);
};

export default ProductsDetail;
