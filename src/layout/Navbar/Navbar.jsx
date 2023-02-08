import React from 'react'
import style from './navbar.module.css'
import { Link as Anchor } from 'react-router-dom'

export default function Navbar() {
  return (
    <div  className={style.container}>
        <div>
          <img src="/assets/images/logo.png" alt="logo" className={style.logo}/>
        </div>
        <div className={style.anchorContainer}>
        <Anchor className={style.anchor}>Inicio</Anchor>
        <Anchor className={style.anchor}>Tienda</Anchor>
        <Anchor className={style.anchor}>Mi Perfil</Anchor>
        <Anchor className={style.anchor}>Sign In</Anchor>
        <Anchor className={style.anchor}>Sign Up</Anchor>
        </div>
    </div>
  )
}
