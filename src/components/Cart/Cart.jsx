import React, { useState } from "react";
import styles from "./cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import cartActions from "../../store/Cart/actions";

const { increaseQuantity, decreaseQuantity } = cartActions

const Cart = ({ show, handleShow }) => {
	const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch()
  const [total, setTotal] = useState(0)
	const handleIncrease = (id, stock) => {
		dispatch(increaseQuantity({ idProduct: id, productStock: stock }));
	};
	const handleDecrease = (id) => {
		dispatch(decreaseQuantity(id));
	};
	return (
		<div className={`${styles.container} ${show ? styles.showContainer : ""}`}>
			<div className={`${styles.cart} ${show ? styles.showCart : ""}`}>
				<div className={styles.cartHeader}>
					<span className={styles.cartTitle}>Carrito</span>
					<button className={styles.closeCart} onClick={handleShow}>
						<FontAwesomeIcon icon={faXmark} />
					</button>
				</div>
				<div className={styles.products}>
					{cart.length ? (
						cart.map((product, index) => {
							return (
								<CartItem
									key={index}
									name={product.name}
									photo={product.photo}
									quantity={product.quantity}
									id={product.id}
									stock={product.stock}
									price={product.price}
									handleIncrease={handleIncrease}
									handleDecrease={handleDecrease}
								/>
							);
						})
					) : (
						<p className={styles.emptyMessage}>
							No hay productos en el carrito
						</p>
					)}
				</div>
        <div className={styles.cartFooter}>
          <span className={styles.cartTotal}>Total: ${total}</span>
          <button className={styles.cartBuy}>Comprar</button>
        </div>
			</div>
		</div>
	);
};

export default Cart;
