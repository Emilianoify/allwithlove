//Productos
import balsamoAzul from "../assets/img/products/balsamoAzul.png";
import balsamoBlanco from "../assets/img/products/balsamoBlanco.png";
import balsamoRosa from "../assets/img/products/balsamoRosa.png";
import balsamoVerde from "../assets/img/products/balsamoVerde.png";
import balsamoVerdeClaro from "../assets/img/products/balsamoVerdeClaro.png";
import scrunchies from "../assets/img/products/scrunchies.jpg";
import scrunchiesConLazo from "../assets/img/products/scrunchiesLazo.jpg";
import vinchasScrunchies from "../assets/img/products/vinchasScrunchies.jpg";
import colitaConLazo from "../assets/img/products/colitaLazo.jpg";
import turbantes from "../assets/img/products/turbantes.jpg";
import turbantesEstampados from "../assets/img/products/turbanteEstampado.jpg";
import matizadorRojo from "../assets/img/products/matizadorRojo.png";
import matizadorCobrizo from "../assets/img/products/matizadorCobrizo.png";
import matizadorVioleta from "../assets/img/products/matizadorVioleta.png";
import protectorTermico from "../assets/img/products/protectorTermico.png";
import banoAlmendras from "../assets/img/products/bañoAlmendras.png";
import banoColageno from "../assets/img/products/bañoColageno.png";
import banoKeratina from "../assets/img/products/bañoKeratina.png";
import setArgan from "../assets/img/products/shampooYacondArgan.png";
import alisadoBrasileroP from "../assets/img/products/alisadoBrasilero.png";
import alisadoJaponesP from "../assets/img/products/alisadoJapones.png";
import botoxLifting from "../assets/img/products/botoxLifting.png";
//Servicios
import alisadoJP from "../assets/img/servicios/alisadoJapones.jpg";
import alisadoBR from "../assets/img/servicios/alisadoBrasilero.jpg";
import botox from "../assets/img/servicios/botoxEfectoLifting.jpg";
import cauterizacion from "../assets/img/servicios/cauterizacion.jpg";
import trenzaBox from "../assets/img/servicios/trenzasBox.jpg";

//
export const isMobile = window.innerWidth < 1024;
//Paginas de navbar
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

//Productos del local
// Productos del local
export const products = [
	{
		id: "1",
		src: balsamoAzul,
		name: "Extra Acido Con Argan",
		type: "hairProduct",
		description:
			"Acondiciona y disciplina el cabello sin tomarlo pesado, aportándole una textura suave, sedosa, sin frizz y con intenso brillo.",
		applicationMode:
			"Lavar el cabello y aplicar el producto de raiz a punta. Dejar actuar por 30 minutos. Pasado el tiempo indicado anteriormente, enjuague, seque y planche.",
	},
	{
		id: "2",
		src: balsamoRosa,
		name: "Caviar",
		type: "hairProduct",
		description:
			"Aporta propiedades antioxidantes e hidrata el cabello. Fortacele el cuero cabelludo, nutre y da brillo desde la primera aplicacion.",
		applicationMode:
			"Lavar el cabello y aplicar el producto de raiz a punta. Dejar actuar por 30 minutos. Pasado el tiempo indicado anteriormente, enjuague, seque y planche.",
	},
	{
		id: "3",
		src: balsamoVerde,
		name: "Emulsion Para Rulos",
		type: "hairProduct",
		description:
			"Hidrata, Desenreda y Acondiciona profundamente el cabello con rulos, volviendolos dociles y manejables, protege la fibra capilar dejando el cabello suave, sedoso y brillante.",
		applicationMode:
			"Lavar el cabello y aplicar el producto de raiz a punta. Dejar actuar por 30 minutos. Pasado el tiempo indicado anteriormente, enjuague.",
	},
	{
		id: "4",
		src: balsamoBlanco,
		name: "Proteina de Coco",
		type: "hairProduct",
		description:
			"Hidrata y nutre aportando brillo y suavidad. Protege la fibra capilar evitando la rotura del cabello, fortaleciendo el mismo.",
		applicationMode:
			"Lavar el cabello y aplicar el producto de raiz a punta. Dejar actuar por 30 minutos. Pasado el tiempo indicado anteriormente, enjuague, seque y planche.",
	},
	{
		id: "5",
		src: balsamoVerdeClaro,
		name: "Celulas Madres",
		type: "hairProduct",
		description:
			"Hidrata y nutre aportando brillo y suavidad. Protege la fibra capilar evitando la rotura del cabello, fortaleciendo el mismo.",
		applicationMode:
			"Lavar el cabello y aplicar el producto de raiz a punta. Dejar actuar por 30 minutos. Pasado el tiempo indicado anteriormente, enjuague, seque y planche.",
	},
	{
		id: "6",
		src: scrunchies,
		name: "Scrunchies",
		type: "hairAccessory",
		description:
			"Scrunchies de tela estampada, no dañan ni quiebran el cabello y lo mantienen hidratado. Varios modelos. Lo que tu cabello necesita.",
	},
	{
		id: "7",
		src: scrunchiesConLazo,
		name: "Scrunchies con lazo",
		type: "hairAccessory",
		description:
			"Scrunchies con lazo de tela estampada, no dañan ni quiebran el cabello y lo mantienen hidratado. Varios modelos. Lo que tu cabello necesita.",
	},
	{
		id: "8",
		src: vinchasScrunchies,
		name: "Vinchas scrunchies",
		type: "hairAccessory",
		description:
			"Vinchas Scrunchies de tela estampada, no dañan ni quiebran el cabello y lo mantienen hidratado. Varios modelos. Lo que tu cabello necesita.",
	},
	{
		id: "9",
		src: protectorTermico,
		name: "Protector Termico",
		type: "hairProduct",
		description:
			"Repara y protege el cabello, aporta brillo y suavidad sellando las cuticulas, reduciendo el frizz. Protector Termico Hidratante.",
		applicationMode:
			"Agitar y aplicar sobre el cabello humedo o seco, se puede dejar secar naturalmente o antes del uso del secador o planchita.",
	},
	{
		id: "10",
		src: banoAlmendras,
		name: "Baño de Crema Almendras",
		type: "hairProduct",
		description:
			"Hidrata y nutre en profundidad, recupera el cabello dañado y reduce el encrespamiento. Define y da forma a los rulos.",
	},
	{
		id: "11",
		src: banoColageno,
		name: "Baño de Crema Colageno",
		type: "hairProduct",
		description:
			"Estimula el cabello acelerando el crecimiento. Evita la caida del cabello brindado fuerza y suavidad, nutriendolo en profundidad.",
	},
	{
		id: "12",
		src: banoKeratina,
		name: "Baño de Crema Keratina",
		type: "hairProduct",
		description:
			"Nutre el cabello. Aumenta el brillo y su color natural. Repara las puntas dañadas, dejando el cabello mas suave y sedoso.",
	},
	{
		id: "13",
		src: setArgan,
		name: "Shampoo/Acond de Argan",
		type: "hairProduct",
		description:
			"Shampoo y/o Acondicionador, limpia e hidrata en profundidad a la vez que aporta volumen, brillo, suavidad y elasticidad. Recomendado para cabellos secos, castigados y debiles.",
	},
	{
		id: "14",
		src: alisadoJaponesP,
		name: "Alisado Japones",
		type: "hairProduct",
		description:
			"El alisado japones esta potenciado con aceite de jojoba, el cual es un excelente hidratante y antioxidante. Repara y alisa cabellos muy castigados.",
		applicationMode:
			"Lavar el cabello con shampoo neutro. Secar un 100% y aplicar el producto. Dejar actuar entre 30 y 40 minutos. Secar completamente y planchar de 10 a 15 veces por mecha.",
	},
	{
		id: "15",
		src: alisadoBrasileroP,
		name: "Alisado Brasilero",
		type: "hairProduct",
		description:
			"El alisado brasilero esta compuesto por siliconas que brindan extra brillo y sellado con keratina hidrolizada y multivitaminas.",
		applicationMode:
			"Lavar el cabello con shampoo neutro. Secar un 100% y aplicar el producto. Dejar actuar entre 30 y 40 minutos. Secar completamente y planchar de 10 a 15 veces por mecha.",
	},
	{
		id: "16",
		src: matizadorCobrizo,
		name: "Matizador Cobrizo",
		type: "hairProduct",
		description:
			"Ideal para tratar cabellos naranjas, cobres y otros matrices.",
		applicationMode:
			"Con el cabello humedo aplicar el matizador con masajes suaves. Dejar actuar por 5 minutos. Enjuagar con abundante agua.",
	},
	{
		id: "17",
		src: matizadorRojo,
		name: "Matizador Rojo",
		type: "hairProduct",
		description:
			"Ideal para tratar cabellos rojos, naranjas, cobres y otros matrices rojos.",
		applicationMode:
			"Con el cabello humedo aplicar el matizador con masajes suaves. Dejar actuar por 5 minutos. Enjuagar con abundante agua.",
	},
	{
		id: "18",
		src: matizadorVioleta,
		name: "Matizador Violeta",
		type: "hairProduct",
		description:
			"Ideal para tratar cabellos naranjas, canos, naturales y decolorados.",
		applicationMode:
			"Con el cabello humedo aplicar el matizador con masajes suaves. Dejar actuar por 5 minutos. Enjuagar con abundante agua.",
	},
	{
		id: "19",
		src: turbantes,
		name: "Turbantes",
		type: "hairAccessory",
		description:
			"El semiturbante es el accesorio perfecto para lucir en el día a día gracias a sus infinitas posibilidades a la hora de combinar tus looks.",
	},
	{
		id: "20",
		src: turbantesEstampados,
		name: "Turbantes Estampados",
		type: "hairAccessory",
		description:
			"El semiturbante es el accesorio perfecto para lucir en el día a día gracias a sus infinitas posibilidades a la hora de combinar tus looks.",
	},
	{
		id: "21",
		src: colitaConLazo,
		name: "Colitas con lazo",
		type: "hairAccessory",
		description:
			"Colitas para el cabello con lazo, para que lleves un estilazo.",
	},
	{
		id: "22",
		src: botoxLifting,
		name: "Botox Efecto Lifting",
		type: "hairProduct",
		description:
			"Colitas para el cabello con lazo, para que lleves un estilazo.",
	},
];

//Seleccion de productos segun pos de array para el featured
const selectedProducts = [13, 21, 8, 20];
export const featuredProducts = selectedProducts.map((pos) => products[pos]);

//Servicios
export const services = [
	{
		id: "1",
		src: alisadoJP,
		name: "Alisado Japones",
		description: "",
	},
	{
		id: "2",
		src: trenzaBox,
		name: "Trenzas Boxeador",
		description: "",
	},
	{
		id: "3",
		src: cauterizacion,
		name: "Cauterizacion",
		description: "",
	},
	{
		id: "4",
		src: botox,
		name: "Botox Efecto Lifting",
		description: "",
	},
	{
		id: "5",
		src: alisadoBR,
		name: "Alisado Brasilero",
		description: "",
	},
];

//Seleccion de servicios segun pos de array para el featured
const selectedServices = [0, 1, 3, 4];
export const featuredServices = selectedServices.map((pos) => services[pos]);
