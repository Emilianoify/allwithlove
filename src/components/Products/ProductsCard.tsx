import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ProductDetails } from "../../utils/interfaces/productsInterface";

const ProductsCard = ({ id, name, src }: ProductDetails) => {
	return (
		<div className="h-full w-full flex flex-col border rounded-t-xl gap-4 border-gray-200 md:text-xl hover:transition-all hover:shadow-lg hover:duration-300 hover:ease-in">
			<Link to={`/products/${id}`} className="flex-grow-0">
				<div className="flex items-center justify-center h-60 md:h-[400px] 2xl:h-[620px] overflow-hidden">
					<img src={src} alt={name} className="w-full h-full rounded-t-md" />
				</div>
			</Link>
			<div className="flex flex-col h-full w-full justify-between px-2 md:p-4">
				<div className="flex flex-col">
					<p className="mb-2 text-2xl font-marcellus tracking-tight break-words">
						{name}
					</p>
					<div className="flex-grow" />
				</div>
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
						<BsCart /> Comprar ahora
					</a>
				</button>
			</div>
		</div>
	);
};

export default ProductsCard;
