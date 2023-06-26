//Productos
import balsamoAzul from "../assets/img/products/balsamoAzul.png";
import balsamoBlanco from "../assets/img/products/balsamoBlanco.png";
import balsamoRosa from "../assets/img/products/balsamoRosa.png";
import balsamoVerde from "../assets/img/products/balsamoVerde.png";
import balsamoVerdeClaro from "../assets/img/products/balsamoVerdeClaro.png";
import scrunchies from "../assets/img/products/scrunchies.jpg";
//Servicios
import alisado from "../assets/img/servicios/alisado.jpg";
import botox from "../assets/img/servicios/botox.jpg";
import cauterizacion from "../assets/img/servicios/cauterizacion.jpg";
import trenzaBox from "../assets/img/servicios/trenzabox.jpg";

//
export const isMobile = window.innerWidth < 1024;
//Paginas de navbar
// Productos del local
export const products = [
	{
		id: "1",
		src: balsamoAzul,
		name: "Extra Acido Con Argan",
		description:
			"Acondiciona y disciplina el cabello sin tomarlo pesado, aportándole una textura suave, sedosa, sin frizz y con intenso brillo.",
		applicationMode:
			"Lava el cabello y aplicar el producto de raiz a punta, dejar actuar por 30 minutos. Pasado el tiempo indicado anteriormente, enjuague, seque y planche.",
	},
	{
		id: "2",
		src: balsamoRosa,
		name: "Caviar",
		description:
			"Aporta propiedades antioxidantes e hidrata el cabello. Fortacele el cuero cabelludo, nutre y da brillo desde la primera aplicacion.",
		applicationMode:
			"Lava el cabello y aplicar el producto de raiz a punta, dejar actuar por 30 minutos. Pasado el tiempo indicado anteriormente, enjuague, seque y planche.",
	},
	{
		id: "3",
		src: balsamoVerde,
		name: "Emulsion Para Rulos",
		description:
			"Hidrata, Desenreda y Acondiciona profundamente el cabello con rulos, volviendolos dociles y manejables, protege la fibra capilar dejando el cabello suave, sedoso y brillante.",
		applicationMode:
			"Lava el cabello y aplicar el producto de raiz a punta, dejar actuar por 30 minutos. Pasado el tiempo indicado anteriormente, enjuague.",
	},
	{
		id: "4",
		src: balsamoBlanco,
		name: "Proteina de Coco",
		description:
			"Hidrata y nutre aportando brillo y suavidad. Protege la fibra capilar evitando la rotura del cabello, fortaleciendo el mismo.",
		applicationMode:
			"Lava el cabello y aplicar el producto de raiz a punta, dejar actuar por 30 minutos. Pasado el tiempo indicado anteriormente, enjuague, seque y planche.",
	},
	{
		id: "5",
		src: balsamoVerdeClaro,
		name: "Celulas Madres",
		description:
			"Hidrata y nutre aportando brillo y suavidad. Protege la fibra capilar evitando la rotura del cabello, fortaleciendo el mismo.",
		applicationMode:
			"Lava el cabello y aplicar el producto de raiz a punta, dejar actuar por 30 minutos. Pasado el tiempo indicado anteriormente, enjuague, seque y planche.",
	},
	{
		id: "6",
		src: scrunchies,
		name: "Scrunchies",
		description:
			"Scrunchies de tela estampada, no dañan ni quiebran el cabello y lo mantienen hidratado. Varios modelos. Lo que tu cabello necesita.",
	},
	{
		id: "7",
		src: scrunchies,
		name: "Protector Termico",
		description:
			"Repara y protege el cabello, aporta brillo y suavidad sellando las cuticulas, reduciendo el frizz. Protector Termico Hidratante.",
		applicationMode:
			"Agitar y aplicar sobre el cabello humedo o seco, se puede dejar secar naturalmente o antes del uso del secador o planchita.",
	},
	{
		id: "8",
		src: scrunchies,
		name: "Baño de Crema Almendras",
		description:
			"Hidrata y nutre en profundidad, recupera el cabello dañado y reduce el encrespamiento. Define y da forma a los rulos.",
	},
	{
		id: "9",
		src: scrunchies,
		name: "Baño de Crema Colageno",
		description:
			"Estimula el cabello acelerando el crecimiento. Evita la caida del cabello brindado fuerza y suavidad, nutriendolo en profundidad.",
	},
	{
		id: "10",
		src: scrunchies,
		name: "Baño de Crema Keratina",
		description:
			"Nutre el cabello. Aumenta el brillo y su color natural. Repara las puntas dañadas, dejando el cabello mas suave y sedoso.",
	},
	{
		id: "11",
		src: scrunchies,
		name: "Shampoo/Acondicionador de Argan",
		description:
			"Shampoo y/o Acondicionador, limpia e hidrata en profundidad a la vez que aporta volumen, brillo, suavidad y elasticidad. Recomendado para cabellos secos, castigados y debiles.",
	},
	{
		id: "12",
		src: scrunchies,
		name: "Alisado Japones",
		description:
			"El alisado japones esta potenciado con aceite de jojoba, el cual es un excelente hidratante y antioxidante. Repara y alisa cabellos muy castigados.",
		applicationMode:
			"Lavar el cabello con shampoo neutro. Secar un 100% y aplicar el producto. Dejar actuar entre 30 y 40 minutos. Secar completamente y planchar de 10 a 15 veces por mecha.",
	},
	{
		id: "13",
		src: scrunchies,
		name: "Alisado Brasilero",
		description:
			"El alisado brasilero esta compuesto por siliconas que brindan extra brillo y sellado con keratina hidrolizada y multivitaminas.",
		applicationMode:
			"Lavar el cabello con shampoo neutro. Secar un 100% y aplicar el producto. Dejar actuar entre 30 y 40 minutos. Secar completamente y planchar de 10 a 15 veces por mecha.",
	},
	{
		id: "14",
		src: scrunchies,
		name: "Matizador Cobrizo",
		description:
			"Ideal para tratar cabellos naranjas, cobres y otros matrices.",
		applicationMode:
			"Con el cabello humedo aplicar el matizador con masajes suaves. Dejar actuar por 5 minutos y enjuagar con abundante agua.",
	},
	{
		id: "15",
		src: scrunchies,
		name: "Matizador Rojo",
		description:
			"Ideal para tratar cabellos rojos, naranjas, cobres y otros matrices rojos.",
		applicationMode:
			"Con el cabello humedo aplicar el matizador con masajes suaves. Dejar actuar por 5 minutos y enjuagar con abundante agua.",
	},
	{
		id: "16",
		src: scrunchies,
		name: "Matizador Violeta",
		description:
			"Ideal para tratar cabellos naranjas, canos, naturales y decolorados.",
		applicationMode:
			"Con el cabello humedo aplicar el matizador con masajes suaves. Dejar actuar por 5 minutos y enjuagar con abundante agua.",
	},
];

//Seleccion de productos segun pos de array para el featured
const selectedProducts = [1, 5, 3, 4];
export const featuredProducts = selectedProducts.map((pos) => products[pos]);

//Servicios
export const services = [
	{
		id: "1",
		src: alisado,
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
		name: "Botox",
		description: "",
	},
];

//Seleccion de servicios segun pos de array para el featured
const selectedServices = [0, 1, 2, 3];
export const featuredServices = selectedServices.map((pos) => services[pos]);
