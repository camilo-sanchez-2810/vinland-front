import React from "react";
import styles from './buyerData.module.css'

const BuyerData = ({ handleEdit, buyer }) => {
	return (
		<>
			<div className={styles.buyerData}>
				<p className={styles.labels}>
					<span>Dirección: </span>
					{buyer?.address}
				</p>
				<p className={styles.labels}>
					<span>Ciudad: </span>
					{buyer?.city}
				</p>
				<p className={styles.labels}>
					<span>Pais: </span>
					{buyer?.country}
				</p>
				<p className={styles.labels}>
					<span>Email: </span>
					{buyer?.user_id.email}
				</p>
			</div>
			<div className={styles.buyerData}>
				<button onClick={handleEdit}>Actualizar datos</button>
			</div>
		</>
	);
};

export default BuyerData;
