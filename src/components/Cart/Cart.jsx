import React, { useEffect, useState } from 'react'
import styles from './cart.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import axios from 'axios'

const Cart = ({show, handleShow}) => {
  const { cart } = useSelector(store => store.cart)
  const [ query, setQuery ] = useState([])
  useEffect(() => {
    Promise.all(cart?.map(product => axios.get(`http://localhost:8080/api/product/${product.product_id}`)))
     .then(response => {
        setQuery(response.map(res => res.data.response))
        console.log(query);
     })
  }, [cart])
  return (
    <div className={`${styles.container} ${show ? styles.showContainer : ''}`}>
      <div className={`${styles.cart} ${show ? styles.showCart : ''}`}>
        <div className={styles.cartHeader}>
          <span className={styles.cartTitle}>Carrito</span>
          <button className={styles.closeCart} onClick={handleShow}><FontAwesomeIcon icon={faXmark}/></button>
        </div>
        <div className={styles.products}>
          {
            cart.length ? 
              query.map((product, index) => {
                return <CartItem key={index} name={product.name} photo={product.photo} quantity={cart.find(item => product._id === item.id).quantity} id={product._id} stock={product.stock} /> 
              }) :
              <p className={styles.emptyMessage}>No hay productos en el carrito</p>
          }
        </div>
      </div>
    </div>
  )
}

export default Cart