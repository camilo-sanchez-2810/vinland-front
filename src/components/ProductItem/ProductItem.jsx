import React from "react";
import style from './productItem.module.css'
import { Link as Anchor } from "react-router-dom";
import { useDispatch } from "react-redux";
import cartActions from "../../store/Cart/actions";

const { addProduct } = cartActions

const ProductItem = ({id, photo, name, price, stock}) => {
  const dispatch = useDispatch()
  const handleAdd = (idProduct, productStock) => {
    dispatch(addProduct({idProduct, productStock}))
  }
	return (
		<div className={style.card}>
			<div>
				<Anchor to={`/product/${id}`} className={style.productAnchor}>
					<img
						className={style.productPhoto}
						src={photo}
						alt={name}
					/>

				</Anchor>
			</div>
			<div className={style.legend}>
						<h2 className={style.productName}>{name}</h2>
					</div>
					<div className={style.containerCart}>
						<h2 className={style.productPrice}>{price}$</h2>
							<button className={style.carrito} onClick={e => handleAdd(id, stock)}>
								<img src='/assets/images/cart2.png' alt='' />
							</button>
					</div>
		</div>
	);
};

export default ProductItem;
