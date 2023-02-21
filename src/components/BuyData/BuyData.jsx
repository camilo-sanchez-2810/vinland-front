import React from "react";
import moment from 'moment'
import styles from './buyData.module.css'

const BuyData = ({ purchase }) => {
	return (
		<div>
			<p className={styles.label}>
				<span>Codigo de la compra: </span>
				{purchase?._id}
			</p>
			<p className={styles.label}>
				<span>Fecha de la compra: </span>
				{moment(purchase?.createdAt).format("L")}
			</p>
			<h5 className={styles.label}>Productos</h5>
			<div className={styles.products}>
				{purchase?.products.map((product) => {
					return (
						<div className={styles.product}>
							<img
								src={product.product_id.photo}
								alt={product.product_id.name}
							/>
							<span>{product.product_id.name}</span>
							<span>cantidad: {product.quantity}</span>
						</div>
					);
				})}
			</div>
			<div className={`${styles.label} ${styles.goPay}`}>
				<span>Total: {purchase?.total}</span>
				<button>Comprar</button>
			</div>
		</div>
	);
};

export default BuyData;
