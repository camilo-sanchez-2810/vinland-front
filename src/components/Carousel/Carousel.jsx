import React, { useState, useEffect } from 'react'
import style from './carousel.module.css'
import Slide from './Slide'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function CarouselHome() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([])
    const datos = async () => {
      try {
        const res = await fetch("./products.json");
        const data = await res.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() =>{
      datos()
    },[])
    

  return (
    <div className={style.carouselContainer}>

        <Carousel className={style.carousel}>
            <div className={style.carouselObject}>
                <div className={style.carouselText}>
                    <p className={style.title}>{products[0]?.title}</p>
                    <p className={style.description}>{products[0]?.description}</p>
                </div>
                <div>
                    <Slide url={products[0]?.photo}/>
                </div>
            </div>
            <div className={style.carouselObject}>
                <div className={style.carouselText}>
                    <p className={style.title}>{products[1]?.title}</p>
                    <p className={style.description}>{products[1]?.description}</p>
                </div>
                <div>
                    <Slide url={products[1]?.photo}/>
                </div>
            </div>
            <div className={style.carouselObject}>
                <div className={style.carouselText}>
                    <p className={style.title}>{products[2]?.title}</p>
                    <p className={style.description}>{products[2]?.description}</p>
                </div>
                <div>
                    <Slide url={products[2]?.photo}/>
                </div>
            </div>
            <div className={style.carouselObject}>
                <div className={style.carouselText}>
                    <p className={style.title}>{products[3]?.title}</p>
                    <p className={style.description}>{products[3]?.description}</p>
                </div>
                <div>
                    <Slide url={products[3]?.photo}/>
                </div>
            </div>
            <div className={style.carouselObject}>
                <div className={style.carouselText}>
                    <p className={style.title}>{products[4]?.title}</p>
                    <p className={style.description}>{products[4]?.description}</p>
                </div>
                <div>
                    <Slide url={products[4]?.photo}/>
                </div>
            </div>
        </Carousel>

{/*         <button onClick={prev} className={style.prev}>&#8249;</button>
        <div className="backtext">
            <p className="text">{products[slideActivo]?.title}</p>
            <p className="text">{products[slideActivo]?.description}</p>
        </div>
        <Slide url={products[slideActivo]?.photo}/>
        <button onClick={next} className={style.next}>&#8250;</button> */}
    </div>
  )
}
