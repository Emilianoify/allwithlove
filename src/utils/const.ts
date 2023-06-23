import balsamoAzul from "../assets/img/products/balsamoAzul.png";
import balsamoBlanco from "../assets/img/products/balsamoBlanco.png";
import balsamoRosa from "../assets/img/products/balsamoRosa.png";
import balsamoVerde from "../assets/img/products/balsamoVerde.png";
import balsamoVerdeClaro from "../assets/img/products/balsamoVerdeClaro.png";
import scrunchies from "../assets/img/products/scrunchies.jpg";
export const isMobile = window.innerWidth < 1024;
export const pagesName = [
	{
		id: 1,
		href: "/",
		name: "Inicio",
	},
	{
		id: 2,
		href: "products",
		name: "Productos",
	},
	{
		id: 3,
		href: "services",
		name: "Servicios",
	},
	{
		id: 4,
		href: "contact",
		name: "Contacto",
	},
	{
		id: 5,
		href: "about",
		name: "Sobre Nosotros",
	},
];

export const products = [
	{
		id: 1,
		src: balsamoAzul,
		name: "Extra Acido Con Argan",
		description:
			"Acondiciona y disciplina el cabello sin tomarlo pesado, aportándole una textura suave, sedosa, sin frizz y con intenso brillo.",
		applicationMode:
			"Lava el cabello y aplicar el producto de raiz a punta, dejar actuar por 30 minutos. Pasado el tiempo indicado anteriormente, enjuague, seque y planche.",
	},
	{
		id: 2,
		src: balsamoRosa,
		name: "Caviar",
		description:
			"Aporta propiedades antioxidantes e hidrata el cabello. Fortacele el cuero cabelludo, nutre y da brillo desde la primera aplicacion.",
		applicationMode:
			"Lava el cabello y aplicar el producto de raiz a punta, dejar actuar por 30 minutos. Pasado el tiempo indicado anteriormente, enjuague, seque y planche.",
	},
	{
		id: 3,
		src: balsamoVerde,
		name: "Emulsion Para Rulos",
		description:
			"Hidrata, Desenreda y Acondiciona profundamente el cabello con rulos, volviendolos dociles y manejables, protege la fibra capilar dejando el cabello suave, sedoso y brillante.",
		applicationMode:
			"Lava el cabello y aplicar el producto de raiz a punta, dejar actuar por 30 minutos. Pasado el tiempo indicado anteriormente, enjuague.",
	},
	{
		id: 4,
		src: balsamoBlanco,
		name: "Proteina de Coco",
		description:
			"Hidrata y nutre aportando brillo y suavidad. Protege la fibra capilar evitando la rotura del cabello, fortaleciendo el mismo.",
		applicationMode:
			"Lava el cabello y aplicar el producto de raiz a punta, dejar actuar por 30 minutos. Pasado el tiempo indicado anteriormente, enjuague, seque y planche.",
	},
	{
		id: 5,
		src: balsamoVerdeClaro,
		name: "Celulas Madres",
		description:
			"Hidrata y nutre aportando brillo y suavidad. Protege la fibra capilar evitando la rotura del cabello, fortaleciendo el mismo.",
		applicationMode:
			"Lava el cabello y aplicar el producto de raiz a punta, dejar actuar por 30 minutos. Pasado el tiempo indicado anteriormente, enjuague, seque y planche.",
	},
	{
		id: 6,
		src: scrunchies,
		name: "Scrunchies",
		description:
			"Scrunchies de tela estampada, no dañan ni quiebran el cabello y lo mantienen hidratado. Varios modelos. Lo que tu cabello necesita",
	},
];

const selectedProducts = [1, 5, 3, 4];
export const featuredProducts = selectedProducts.map((pos) => products[pos]);

export const featuredServices = [];
