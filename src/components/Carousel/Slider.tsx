import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { featuredProducts } from "../../utils/const";

const Slider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide
			? featuredProducts.length - 1
			: currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === featuredProducts.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	let slideInterval: NodeJS.Timeout;
	const startSlider = () => {
		slideInterval = setInterval(() => {
			nextSlide();
		}, 3000);
	};

	const pauseSlider = () => {
		clearInterval(slideInterval);
	};

	useEffect(() => {
		startSlider();
		return () => {
			pauseSlider();
		};
	});

	return (
		<div className="w-full h-[500px] lg:h-[800px] lg:max-w-screen-2xl py-4 relative group">
			<div className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
				<img
					src={featuredProducts[currentIndex].src}
					alt="product"
					className="h-full w-full"
				/>
			</div>

			<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
				<BsChevronCompactLeft onClick={prevSlide} size={30} />
			</div>

			<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
				<BsChevronCompactRight onClick={nextSlide} size={30} />
			</div>
		</div>
	);
};
export default Slider;
