import React from "react";
import Slide from "./Slide";
import style from "./carousel.module.css";
import { Link as Anchor } from "react-router-dom";

const CaroueselItem = ({ name, description, photo, id }) => {
  return (
    <div className={style.carouselObject}>
      <Slide url={photo} />
      <div className={style.carouselText}>
        <p className={style.title}>{name}</p>
        <p>{description}</p>
        <Anchor to={`/product/${id}`} className={style.anchor}>
          Ver mas
        </Anchor>
      </div>
    </div>
  );
};

export default CaroueselItem;
