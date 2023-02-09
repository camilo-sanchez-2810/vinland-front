import React from 'react'
import style from './home.module.css'
import CarouselHome from '../../components/Carousel/Carousel'

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.bgContainer}>
        <div className={style.bg}>
          <img src="/assets/images/logo.png" alt="logo" className={style.logo}/>
          <h2 className={style.legend}>Tierra de vinilos</h2>
        </div>
      </div>
    <div className={style.carouselContainer}>
      <CarouselHome/>
    </div>
    </div>
  )
}
