import React from 'react'
import style from './carousel.module.css'

export default function Slide({url}) {

  return (
    <>
        <img src={url} alt="" className={style.img}/>
    </>
  )
}
