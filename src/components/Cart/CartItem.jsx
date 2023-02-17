import React from 'react'
import styles from './cart.module.css'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CartItem = ({name, photo, id, stock, quantity, price, handleIncrease, handleDecrease}) => {
  return (
    <div className={styles.product}>
            <div>
              <img className={styles.productImg} src={photo} alt={name} />
            </div>
            <div className={styles.productBody}>
              <p className={styles.productTitle}>{name}</p>
              <div className={styles.productQuantity}>
                <span>${price}</span>
                <div className={styles.quantityContent}>
                  <button onClick={() => handleIncrease(id, stock)} className={styles.quantityButtons}><FontAwesomeIcon icon={faPlus}/></button>
                  <span>{quantity}</span>
                  <button onClick={() => handleDecrease(id)} className={styles.quantityButtons}><FontAwesomeIcon icon={faMinus}/></button>
                </div>
              </div>
            </div>
          </div>
  )
}

export default CartItem