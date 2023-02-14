import React from "react";
import Slide from "./Slide";
import style from "./carousel.module.css";

const CaroueselItem = ({ name, description, photo }) => {
	return (
		<div className={style.carouselObject}>
			<div className={style.carouselText}>
				<p className={style.title}>{name}</p>
				<p className={style.description}>{description}</p>
			</div>
			<div>
				<Slide url={photo} />
			</div>
		</div>
	);
};

export default CaroueselItem;
