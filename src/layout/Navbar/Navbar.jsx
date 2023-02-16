import React from 'react'
import style from './navbar.module.css'
import { Link as Anchor } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import authActions from '../../store/Login/actions'
import '@fortawesome/fontawesome-svg-core'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cart from '../../components/Cart/Cart'

const { cerrar_sesion,iniciar_sesion } = authActions

export default function Navbar({handleShow, show}) {
  let { token,is_online,is_admin } = useSelector(store => store.auth)
  const myMail = useSelector((store) => store.auth.email)
  

  let dispatch = useDispatch()

  async function signout(event) {
      await dispatch(cerrar_sesion(token))
  }

  return (
    <div  className={style.container}>
        <div>
          <img src="/assets/images/logo-black.png" alt="logo" className={style.logo}/>
        </div>
        <div className={style.anchorContainer}>
        <Anchor to={"/"} className={style.anchor}>Inicio</Anchor>
        <Anchor to={"/shopping"} className={style.anchor}>Tienda</Anchor>
      
        {is_online && is_admin ? (
            <>
                <Anchor to={"/profile"} className={style.anchor}>{myMail}</Anchor>
                <span className={style.anchor} onClick={signout}>Cerrar Sesion</span>
                <Anchor className={style.anchor} to={"/admin"}>Panel Admin</Anchor>
                </>
            ) : is_online  ? (
              <>
              <Anchor to={"/profile"} className={style.anchor}>{myMail}</Anchor>
              <button className={style.cart} onClick={handleShow} ><FontAwesomeIcon icon={faCartShopping} /></button>
              <span className={style.anchor} onClick={signout}>Cerrar Sesion</span>
              
              </>
            ) :( <>
                <Anchor className={style.anchor} to={"/signin"}>Iniciar Sesion</Anchor>
                <Anchor className={style.anchor} to={"/signup"}>Registrarse</Anchor>
            </>
            )}
        
        </div>
        <Cart show={show} handleShow={handleShow}/>
    </div>
  )
}
