import { useState } from "react";
import {
	AiFillBook,
	AiFillDollarCircle,
	AiFillHome,
	AiFillInfoCircle,
	AiFillMail,
} from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { isMobile, pagesName } from "../../utils/const";
const NavBar = () => {
	const [isOpen, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(!isOpen);
	};

	const pagesMobile = [
		{
			id: 1,
			href: "/",
			name: "Inicio",
			icon: <AiFillHome size={30} />,
		},
		{
			id: 2,
			href: "products",
			name: "Productos",
			icon: <AiFillDollarCircle size={30} />,
		},
		{
			id: 3,
			href: "services",
			name: "Servicios",
			icon: <AiFillBook size={30} />,
		},
		{
			id: 4,
			href: "contact",
			name: "Contacto",
			icon: <AiFillMail size={30} />,
		},
		{
			id: 5,
			href: "about",
			name: "Sobre Nosotros",
			icon: <AiFillInfoCircle size={30} />,
		},
	];

	return (
		<header className="h-20 bg-white flex justify-around shadow-md items-center px-4 font-monserrat animate-fade animate-once animate-duration-[1400ms]">
			{isMobile ? (
				<>
					<div className="text-center">
						<p className="font-dancing text-2xl">AllWithLove</p>
						<span className="text-gray-400">Si no es ahora, ¿cuando?</span>
					</div>
					<div
						onClick={handleOpen}
						onKeyUp={handleOpen}
						className="cursor-pointer"
					>
						{isOpen ? null : <GoThreeBars size={40} />}
					</div>

					{isOpen && (
						<div className="flex flex-col w-full z-10 h-fit absolute top-0 left-0 bg-white gap-6 text-xl p-4 animate-fade-right animate-once animate-duration-[800ms]">
							<button
								type="button"
								onClick={handleOpen}
								className="absolute top-2 right-2"
							>
								<GrClose size={30} />
							</button>
							<ul className="flex flex-col gap-6">
								{pagesMobile.map(({ id, href, name, icon }) => (
									<li
										key={id}
										onClick={handleOpen}
										onKeyUp={handleOpen}
										className="hover:text-purple-300 border-blue-200 transition-all ease-in duration-300 hover:scale:110 flex gap-2"
									>
										{icon}
										<Link to={href}>{name}</Link>
									</li>
								))}
							</ul>
						</div>
					)}
				</>
			) : (
				<>
					<div className="text-center">
						<p className="text-3xl font-bold font-dancing">AllWithLove</p>
						<span className="text-gray-400">Si no es ahora, ¿cuando?</span>
					</div>
					<ul className="flex items-center gap-6 h-full text-lg">
						{pagesName.map(({ id, href, name }) => (
							<li
								key={id}
								className="hover:text-purple-300 hover:border-y-4 border-purple-200 hover:scale:110 transition-all ease-in duration-300 h-full cursor-pointer text-center flex flex-col items-center justify-center"
							>
								<Link to={href}>{name}</Link>
							</li>
						))}
					</ul>
				</>
			)}
		</header>
	);
};

export default NavBar;
