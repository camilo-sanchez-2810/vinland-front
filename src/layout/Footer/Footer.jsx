import React from 'react'
import style from './footer.module.css'
import { Link as Anchor } from 'react-router-dom'

export default function Footer() {
  return (
    <div className={style.container}>
        <div className={style.logoContainer}>
            <Anchor to={'https://www.instagram.com/'} className={style.anchorLogo} ><img src="/assets/images/instagram.png" alt="instagram"  className={style.logo}/><p className={style.logoText}>@Vinland</p></Anchor>
            <Anchor to={'https://www.whatsapp.com/?lang=es'}className={style.anchorLogo}><img src="/assets/images/whatsapp.png" alt="instagram"  className={style.logo}/><p className={style.logoText}>+000000000</p></Anchor> 
        </div>
        <div>
            <img src="/assets/images/logo2.png" alt="" className={style.hacha}/>
        </div>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d690.4268730153807!2d-58.49786463286471!3d-34.59803657884738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb63084666ec3%3A0x7084c6222cdc4cdb!2sCuenca%203453%20Piso%202%2C%20C1417%20CABA!5e0!3m2!1ses!2sar!4v1675894577564!5m2!1ses!2sar" className={style.mapa} ></iframe>
        </div>
    </div>
  )
}
