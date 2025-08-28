import React from "react";
import Slider from "react-slick";

const Carousel = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
	};
	return (
		<Slider {...settings} className="px-5 m-10">
			<div >
				<img
					src="../src/assets/images/slide1.jpg"
					alt="Slide1"
					className="h-96 w-full object-cover"
				/>
			</div>
			<div>
				<img
					src="../src/assets/images/slide2.jpg"
					alt="Slide1"
					className="w-full h-96 object-cover"
				/>
			</div>
			<div>
				<img
					src="../src/assets/images/slide3.jpg"
					alt="Slide1"
					className="w-full h-96 object-cover"
				/>
			</div>
			<div>
				<img
					src="../src/assets/images/slide4.jpg"
					alt="Slide1"
					className="w-full h-96 object-cover"
				/>
			</div>
		</Slider>
	);
}


export default Carousel;