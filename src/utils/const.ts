import balsamoBlanco from "../assets/img/products/balsamoBlanco.jpg";
import balsamoAzul from "../assets/img/products/matizadorazul.jpg";
import balsamoRosa from "../assets/img/products/matizadorrosa.jpg";
import balsamoVerde from "../assets/img/products/matizadorverde.jpg";
import productosCapilares from "../assets/img/products/productosCapilares.jpg";
import servicesList from "../assets/img/servicios/servicios.jpg";
import trenzas from "../assets/img/servicios/trenzabox.jpg";
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

export const featuredProducts = [
	{
		id: 1,
		src: servicesList,
		name: "Servicios",
	},
	{
		id: 2,
		src: trenzas,
		name: "Trenzas Boxeador",
	},
	{
		id: 3,
		src: productosCapilares,
		name: "Capilar1",
	},
];

export const mostPopular = [
	{
		id: 1,
		src: balsamoAzul,
		name: "Balsamo Azul",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non ligula non eros gravida vehicula in vitae nunc. Sed quis sem lorem. Pellentesque odio mauris, scelerisque eget ipsum sed, feugiat sollicitudin diam. In lacinia odio sed neque porttitor mattis. Donec aliquet ultricies blandit. Morbi tempor vulputate gravida. Cras ut elit eu mauris ultrices commodo non in massa. Donec ut feugiat magna, vehicula fermentum felis.",
	},
	{
		id: 2,
		src: balsamoRosa,
		name: "Balsamo Azul",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non ligula non eros gravida vehicula in vitae nunc. Sed quis sem lorem. Pellentesque odio mauris, scelerisque eget ipsum sed, feugiat sollicitudin diam. In lacinia odio sed neque porttitor mattis. Donec aliquet ultricies blandit. Morbi tempor vulputate gravida. Cras ut elit eu mauris ultrices commodo non in massa. Donec ut feugiat magna, vehicula fermentum felis.",
	},
	{
		id: 3,
		src: balsamoVerde,
		name: "Balsamo Verde",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non ligula non eros gravida vehicula in vitae nunc. Sed quis sem lorem. Pellentesque odio mauris, scelerisque eget ipsum sed, feugiat sollicitudin diam. In lacinia odio sed neque porttitor mattis. Donec aliquet ultricies blandit. Morbi tempor vulputate gravida. Cras ut elit eu mauris ultrices commodo non in massa. Donec ut feugiat magna, vehicula fermentum felis.",
	},
	{
		id: 4,
		src: balsamoBlanco,
		name: "Balsamo Blanco",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non ligula non eros gravida vehicula in vitae nunc. Sed quis sem lorem. Pellentesque odio mauris, scelerisque eget ipsum sed, feugiat sollicitudin diam. In lacinia odio sed neque porttitor mattis. Donec aliquet ultricies blandit. Morbi tempor vulputate gravida. Cras ut elit eu mauris ultrices commodo non in massa. Donec ut feugiat magna, vehicula fermentum felis.",
	},
];
