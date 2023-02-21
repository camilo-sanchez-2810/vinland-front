import React from 'react'
import style from './home.module.css'
import CarouselHome from '../../components/Carousel/Carousel'
import Header from '../../components/Header/Header'

export default function Home() {
  return (
    <div className={style.container}>
      <Header>
        <h1>Tierra de vinilos</h1>
      </Header>
      <div className={style.recom}>
        <h2>Nuestras recomendaciones</h2>
      </div>
    <div className={style.carouselContainer}>
      <CarouselHome/>
    </div>
    </div>
  )
}
