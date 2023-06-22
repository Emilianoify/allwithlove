import balsamoAzul from "../assets/img/products/balsamoAzul.png";
import balsamoBlanco from "../assets/img/products/balsamoBlanco.png";
import balsamoRosa from "../assets/img/products/balsamoRosa.png";
import balsamoVerde from "../assets/img/products/balsamoVerde.png";

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
			"Acondiciona y disciplina el cabello sin tomarlo pesado, aportándole una textura suave, sedosa, sin frizz y con intenso brillo",
	},
	{
		id: 2,
		src: balsamoRosa,
		name: "Caviar",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non ligula non eros gravida vehicula in vitae nunc. Sed quis sem lorem. Pellentesque odio mauris, scelerisque eget ipsum sed, feugiat sollicitudin diam. In lacinia odio sed neque porttitor mattis. Donec aliquet ultricies blandit. Morbi tempor vulputate gravida. Cras ut elit eu mauris ultrices commodo non in massa. Donec ut feugiat magna, vehicula fermentum felis.",
	},
	{
		id: 3,
		src: balsamoVerde,
		name: "Emulsion Para Rulos",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non ligula non eros gravida vehicula in vitae nunc. Sed quis sem lorem. Pellentesque odio mauris, scelerisque eget ipsum sed, feugiat sollicitudin diam. In lacinia odio sed neque porttitor mattis. Donec aliquet ultricies blandit. Morbi tempor vulputate gravida. Cras ut elit eu mauris ultrices commodo non in massa. Donec ut feugiat magna, vehicula fermentum felis.",
	},
	{
		id: 4,
		src: balsamoBlanco,
		name: "Proteina de Coco",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non ligula non eros gravida vehicula in vitae nunc. Sed quis sem lorem. Pellentesque odio mauris, scelerisque eget ipsum sed, feugiat sollicitudin diam. In lacinia odio sed neque porttitor mattis. Donec aliquet ultricies blandit. Morbi tempor vulputate gravida. Cras ut elit eu mauris ultrices commodo non in massa. Donec ut feugiat magna, vehicula fermentum felis.",
	},
];

export const featuredProducts = [...products];
