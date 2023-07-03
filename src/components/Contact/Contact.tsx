import { useState } from "react";
import Swal from "sweetalert2";
const VITE_FORM_URL = import.meta.env.VITE_FORM_URL;
const Contact = () => {
	const [input, setInput] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [validName, setValidName] = useState(true);
	const [validEmail, setValidEmail] = useState(true);
	const [validMessage, setValidMessage] = useState(true);
	const regexWhite = new RegExp(/^\s+$/);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		e.preventDefault();

		setInput({ ...input, [e.target.name]: e.target.value });
		validateName();
		validateEmail();
		validateMessage();
	};

	const validateName = () => {
		if (regexWhite.test(input.name) || input.name.length < 6) {
			setValidName(false);
		} else {
			setValidName(true);
		}
	};

	const validateEmail = () => {
		if (regexWhite.test(input.email) || input.email.length < 8) {
			setValidEmail(false);
		} else {
			setValidEmail(true);
		}
	};

	const validateMessage = () => {
		if (regexWhite.test(input.message) || input.message.length < 20) {
			setValidMessage(false);
		} else {
			setValidMessage(true);
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const target = e.target as HTMLFormElement;
		if (input.name.length < 1) {
			Swal.fire({
				title: "Error!",
				text: "Completa todos los campos",
				icon: "error",
				confirmButtonText: "OK",
			});
		} else {
			Swal.showLoading();
			const formData = new FormData(target);
			const options = {
				method: "POST",
				body: formData,
			};
			try {
				const response = await fetch(VITE_FORM_URL, options);
				if (response) {
					Swal.hideLoading();
					Swal.fire(
						"Formulario enviado",
						"Recibimos tu consulta. Nos pondremos en contacto a la brevedad",
						"success",
					);
					setInput({ name: "", email: "", message: "" });
				}
			} catch (error) {
				Swal.hideLoading();
				Swal.fire({
					title: "Error!",
					text: `${error}`,
					icon: "error",
					confirmButtonText: "Cool",
				});
			}
		}
	};

	return (
		<div className="w-full h-full p-4 flex flex-col justify-center items-center font-monserrat md:p-8">
			<div className="w-full py-2 md:py-8">
				<h1 className="text-3xl md:text-5xl">¡Contactanos!</h1>
			</div>
			<div className="w-full h-full flex flex-col gap-4 text-xl leading-9">
				<h3 className="text-2xl md:text-4xl">
					¿Tienes alguna pregunta sobre nuestros productos capilares o
					tratamientos?
				</h3>
				<p>
					Estamos aquí para ayudarte. Completa el formulario de contacto que
					aparece a continuación y nos pondremos en contacto contigo lo antes
					posible. Estamos comprometidos en ayudarte a lucir un cabello
					saludable y radpiante.
				</p>
				<p>
					Si estás interesado/a en programar un tratamiento capilar en nuestro
					centro, por favor, indícanos tus preferencias y disponibilidad en el
					formulario de contacto. Nos aseguraremos de encontrar la fecha y hora
					que mejor se adapten a ti. No dudes en contactarnos si tienes alguna
					duda, comentario o sugerencia. Valoramos tus opiniones y estamos
					constantemente trabajando para mejorar nuestros productos y servicios.
					¡Esperamos tener noticias tuyas pronto! El equipo de AllWithLove"
				</p>
				<p>
					También puedes comunicarte con nosotros a través de los siguientes
					medios:
					<br />
					<b>Teléfono:</b> +54 (11) 15-3311-1585
					<br />
					<b>Instagram:</b> all.with.lovee
				</p>

				<div className=" flex flex-col justify-center items-center">
					<p>Formulario de contacto</p>
					<form
						onSubmit={(e) => handleSubmit(e)}
						method="POST"
						className="flex flex-col w-full md:w-1/2"
					>
						<input
							required
							type="text"
							name="name"
							value={input.name}
							onKeyUp={validateName}
							onChange={(e) => handleChange(e)}
							placeholder="Tu nombre..."
							className="p-1 bg-transparent border-2 rounded-md focus:outline-none"
						/>
						<span>{!validName && "Ingrese un nombre valido"}</span>
						<input
							required
							type="email"
							name="email"
							onKeyUp={validateEmail}
							onChange={(e) => handleChange(e)}
							value={input.email}
							placeholder="Tu email..."
							className="my-2 p-1 bg-transparent border-2 rounded-md  focus:outline-none"
						/>
						<span>{!validEmail && "Ingrese un email valido"}</span>
						<textarea
							required
							name="message"
							onKeyUp={validateMessage}
							onChange={(e) => handleChange(e)}
							value={input.message}
							placeholder="Hola, queria consultar por..."
							rows={4}
							className="p-1 bg-transparent border-2 rounded-md  focus:outline-none"
						/>
						<span>
							{!validMessage &&
								"Ingrese un mensaje valido. Caracteres minimos: 20"}
						</span>
						<button
							type="submit"
							className={
								validEmail && validMessage && validName
									? " bg-gradient-to-b text-white from-rose-400 to-rose-300 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 cursor-pointer"
									: "bg-slate-100 px-6 py-3 my-8 mx-auto flex items-center rounded-md"
							}
							disabled={!validEmail || !validMessage || !validName}
						>
							Enviar Mensaje
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
