import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { productInterface } from "../../utils/interfaces/productsInterface";

const Card = ({ id, name, src }: productInterface) => {
	return (
		<div className="h-full w-full flex flex-col border rounded-t-xl gap-4 border-gray-200 md:text-xl hover:transition-all hover:shadow-lg hover:duration-300 hover:ease-in">
			<Link to={`/products/${id}`}>
				<img src={src} alt={name} className="rounded-t-xl" />
			</Link>
			<div className="flex flex-col h-full w-full justify-center px-2 md:p-4">
				<p className="mb-2 text-2xl font-marcellus tracking-tight">{name}</p>
				<button
					type="button"
					className="w-full border rounded-lg p-2 transition-all duration-200 ease-in-out hover:bg-pink-200 hover:text-white hover:font-bold"
				>
					<a
						className="flex gap-2 justify-center items-center"
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
