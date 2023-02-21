import React from "react";
import Slide from "./Slide";
import style from "./carousel.module.css";
import { Link as Anchor } from "react-router-dom";

const CaroueselItem = ({ name, description, photo, id }) => {
	return (
		<div className={style.carouselObject}>
			<div className={style.carouselText}>
				<p className={style.title}>{name}</p>
				<p className={style.description}>{description}</p>
			</div>
			<div>
				<Slide url={photo} />
			</div>
			<div className={style.anchorContainer}>
				<Anchor to={`/product/${id}`} className={style.anchor}>Ver mas</Anchor>
			</div>
		</div>
	);
};

export default CaroueselItem;
