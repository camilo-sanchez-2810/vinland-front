import React from 'react'
import styles from './cart.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Cart = ({show, handleShow}) => {
  return (
    <div className={`${styles.container} ${show ? styles.showContainer : ''}`}>
      <div className={`${styles.cart} ${show ? styles.showCart : ''}`}>
        <div className={styles.cartHeader}>
          <span className={styles.cartTitle}>Carrito</span>
          <button className={styles.closeCart} onClick={handleShow}><FontAwesomeIcon icon={faXmark}/></button>
        </div>
        <div>
          <p>No hay productos en el carrito</p>
        </div>
      </div>
    </div>
  )
}

export default Cart