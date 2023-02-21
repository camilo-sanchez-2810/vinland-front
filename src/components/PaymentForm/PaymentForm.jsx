import React, { useState } from "react";
import styles from './paymentForm.module.css'

const PaymentForm = ({ handleSubmit, buyer }) => {
  const [city, setCity] = useState(buyer.city.trim())
  const [country, setCountry] = useState(buyer.country.trim())
  const [address, setAddress] = useState(buyer.address.trim())
	return (
		<form className={styles.form} onSubmit={(e) => handleSubmit(e, {city, country, address})}>
			<input type='text' placeholder="Ciudad" value={city} onChange={e => setCity(e.target.value)}/>
			<input type='text' placeholder="Pais" value={country} onChange={e => setCountry(e.target.value)}/>
			<input type='text' placeholder="Dirección" value={address} onChange={e => setAddress(e.target.value)}/>
			<input type='submit' value='Actualizar' />
		</form>
	);
};

export default PaymentForm;
