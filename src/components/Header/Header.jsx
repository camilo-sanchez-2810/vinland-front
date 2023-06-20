import React from "react";
import style from "./header.module.css";
export default function Header() {
  return (
    <div className={style.container}>
      <div>
      <h1>Tierra de vinilos</h1>
        <p>
          Descubre el encanto de la música en formato físico y sumérgete en un
          mundo de sonidos únicos e inolvidables. ¡Haz de tu experiencia
          auditiva algo auténtico y especial con nuestra tienda de vinilos!
        </p>
      </div>
    </div>
  );
}
