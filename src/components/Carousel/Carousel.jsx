import React, { useState, useEffect } from 'react'
import style from './carousel.module.css'
import Slide from './Slide'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useSelector, useDispatch } from 'react-redux';
import carouselActions from '../../store/Carousel/actions';
const {get_carousel} = carouselActions

export default function CarouselHome() {
    const products = useSelector(store => store.carousel.products)
    const dispatch = useDispatch()
    console.log(products);
    
    useEffect(() => {
        dispatch(get_carousel())
    },[])

  return (
    <div className={style.carouselContainer}>

        <Carousel className={style.carousel}>
            <div className={style.carouselObject}>
                <div className={style.carouselText}>
                    <p className={style.title}>{products[0]?.name}</p>
                    <p className={style.description}>{products[0]?.description}</p>
                </div>
                <div>
                    <Slide url={products[0]?.photo}/>
                </div>
            </div>
            <div className={style.carouselObject}>
                <div className={style.carouselText}>
                    <p className={style.title}>{products[1]?.name}</p>
                    <p className={style.description}>{products[1]?.description}</p>
                </div>
                <div>
                    <Slide url={products[1]?.photo}/>
                </div>
            </div>
            <div className={style.carouselObject}>
                <div className={style.carouselText}>
                    <p className={style.title}>{products[2]?.name}</p>
                    <p className={style.description}>{products[2]?.description}</p>
                </div>
                <div>
                    <Slide url={products[2]?.photo}/>
                </div>
            </div>
            <div className={style.carouselObject}>
                <div className={style.carouselText}>
                    <p className={style.title}>{products[3]?.name}</p>
                    <p className={style.description}>{products[3]?.description}</p>
                </div>
                <div>
                    <Slide url={products[3]?.photo}/>
                </div>
            </div>
        </Carousel>

    </div>
  )
}
