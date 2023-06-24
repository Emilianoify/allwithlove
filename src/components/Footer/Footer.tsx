import transferencia from "../../assets/icons/bankTransfer.png";
import efectivo from "../../assets/icons/cash.png";
import instagram from "../../assets/icons/instagram.png";
const Footer = () => {
	return (
		<footer className="bg-gradient-to-br w-full flex flex-col items-center from-rose-400 to-rose-500 text-center lg:text-left font-monserrat">
			<div className="container p-6 text-neutral-200 text-center">
				<div className="grid gap-4 lg:grid-cols-3">
					<div>
						<h5 className="mb-2 text-3xl font-lato">Redes Sociales</h5>
						<div className="flex justify-center items-center">
							<button type="button" className="rounded-full w-fit">
								<a
									href="https://www.instagram.com/all.with.lovee/"
									target="_blank"
									rel="noreferrer"
								>
									<img src={instagram} alt="Instagram" />
								</a>
							</button>
						</div>
					</div>
					<div>
						<h5 className="mb-2 text-3xl font-lato">Medios de Pago</h5>
						<div className="flex gap-4 justify-center items-center">
							<img src={efectivo} alt="Efectivo" />
							<img src={transferencia} alt="Transferencia Bancaria" />
						</div>
					</div>
					<div>
						<h5 className="mb-2 text-3xl font-lato">Contacto</h5>
						<p>+54 (11) 15-3311-1585</p>
					</div>
				</div>
			</div>

			<div className="p-4 text-center text-neutral-200">
				© 2023 Copyright: AllWithLove. made by
				<a
					target="_blank"
					rel="noreferrer"
					className="text-neutral-200"
					href="https://www.linkedin.com/in/emiliano-galvan-"
				>
					{" Emilianoify."}
				</a>
			</div>
		</footer>
	);
};

export default Footer;
