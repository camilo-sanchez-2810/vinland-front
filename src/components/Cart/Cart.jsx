import React from 'react'
import styles from './cart.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const Cart = ({show, handleShow}) => {
  return (
    <div className={`${styles.container} ${show ? styles.showContainer : ''}`}>
      <div className={`${styles.cart} ${show ? styles.showCart : ''}`}>
        <div className={styles.cartHeader}>
          <span className={styles.cartTitle}>Carrito</span>
          <button className={styles.closeCart} onClick={handleShow}><FontAwesomeIcon icon={faXmark}/></button>
        </div>
        <div className={styles.products}>
          {/* {<p className={styles.emptyMessage}>No hay productos en el carrito</p>} */}
          <div className={styles.product}>
            <div>
              <img className={styles.productImg} src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/512SHoBt4YL.jpg" alt="Producto" />
            </div>
            <div className={styles.productBody}>
              <p className={styles.productTitle}>Nombre producto</p>
              <div className={styles.productQuantity}>
                <div className={styles.quantityContent}>
                  <button className={styles.quantityButtons}><FontAwesomeIcon icon={faPlus}/></button>
                  <span>1</span>
                  <button className={styles.quantityButtons}><FontAwesomeIcon icon={faMinus}/></button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.product}>
            <div>
              <img className={styles.productImg} src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/512SHoBt4YL.jpg" alt="Producto" />
            </div>
            <div className={styles.productBody}>
              <p className={styles.productTitle}>Nombre producto</p>
              <div className={styles.productQuantity}>
                <div className={styles.quantityContent}>
                  <button className={styles.quantityButtons}><FontAwesomeIcon icon={faPlus}/></button>
                  <span>1</span>
                  <button className={styles.quantityButtons}><FontAwesomeIcon icon={faMinus}/></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart