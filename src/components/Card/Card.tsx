import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { productInterface } from "../../utils/interfaces/productsInterface";

const Card = ({ id, name, description, src }: productInterface) => {
	return (
		<div className="h-full w-full flex flex-col border rounded-t-xl gap-4  border-gray-200 md:text-xl md:w-3/4">
			<Link to={`/products/${id}`}>
				<img src={src} alt={name} className="w-full rounded-t-xl" />
				<div className="p-2">
					<p className="md:text-2xl">{name}</p>
					<p className="pt-2 md:text-lg ">{description}</p>
				</div>
			</Link>
			<div className="flex justify-center md:p-4">
				<button
					type="button"
					className="w-fit border rounded-lg p-2 transition-all duration-200 ease-in-out hover:bg-pink-200 hover:text-white hover:font-bold"
				>
					<a
						className="flex gap-2 items-center"
						target="_blank"
						href={`https://api.whatsapp.com/send?phone=5491133111585&text=¡Hola!Estoy interesado en comprar ${name}. Por favor, envíenme más información.`}
						rel="noreferrer"
					>
						<BsCart /> Comprar ahora
					</a>
				</button>
			</div>
		</div>
	);
};

export default Card;
