import React, { useEffect } from "react";
import style from "./carousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useSelector, useDispatch } from "react-redux";
import carouselActions from "../../store/Carousel/actions";
import CaroueselItem from "./CaroueselItem";
const { get_carousel } = carouselActions;

export default function CarouselHome() {
  const products = useSelector((store) => store.carousel?.products);
  const dispatch = useDispatch();
  console.log(products);

  useEffect(() => {
    dispatch(get_carousel());
  }, []);

  return (
    <div className={style.carouselContainer}>
        <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        transitionTime={200}
        interval={4000}
        >
        {products?.map((product) => {
        return (
        <CaroueselItem
              name={product.name}
              description={product.description}
              photo={product.photo}
              key={product._id}
              id={product._id}
            />
          );
        })}
      </Carousel>
    </div>
  );
}
