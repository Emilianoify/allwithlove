import { isMobile, mostPopular } from "../../utils/const";
import Card from "../Card/Card";
import Slider from "../Carousel/Slider";
import SecondSectionDesktop from "./SecondSectionDesktop";
import SecondSectionMobile from "./SecondSectionMobile";
const Home = () => {
	return (
		<>
			<main className="w-full flex flex-col justify-center px-4 lg:px-6 lg:h-full font-monserrat">
				<section className="w-full flex justify-center bg-gradient-to-r from-[#A37F81] to-[#BA9193]">
					<Slider />
				</section>
				<section className="flex flex-col py-8 w-full h-fit  items-center">
					<p className="text-2xl md:text-4xl font-marcellus p-4">
						Productos Populares
					</p>
					<div className="grid grid-cols-2 gap-2 md:grid md:grid-cols-4 mt-4 place-items-center">
						{mostPopular.map(({ id, name, description, src }) => (
							<Card
								id={id}
								key={id}
								name={name}
								description={
									isMobile
										? `${description.substring(0, 25)}...`
										: `${description.substring(0, 150)}...`
								}
								src={src}
							/>
						))}
					</div>
				</section>
				<section className="w-full h-full pb-4 grid grid-cols-2 gap-3 place-items-center">
					{isMobile ? <SecondSectionMobile /> : <SecondSectionDesktop />}
				</section>
			</main>
		</>
	);
};

export default Home;
