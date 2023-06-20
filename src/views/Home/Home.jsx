import React from "react";
import style from "./home.module.css";
import CarouselHome from "../../components/Carousel/Carousel";
import Header from "../../components/Header/Header";

export default function Home() {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.recom}>
        <div className={style.div}>
          <h2>Nuestras recomendaciones</h2>
          <p>
            Aquí encontrarás una amplia selección de los mejores discos de
            vinilo de todos los tiempos, desde clásicos atemporales hasta las
            últimas novedades. Nuestro catálogo es cuidadosamente seleccionado
            para que puedas disfrutar de una experiencia auditiva única y
            auténtica. Si eres un verdadero amante de la música, no puedes dejar
            pasar la oportunidad de tener en tus manos uno de estos vinilos
          </p>
        </div>
        <CarouselHome />
      </div>
    </div>
  );
}
