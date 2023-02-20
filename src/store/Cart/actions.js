import { createAction } from "@reduxjs/toolkit";

const addProduct = createAction('add-product', ({idProduct, productStock, productName, productPrice, productPhoto}) => {
  return {
    payload: {idProduct, productStock, productName, productPrice, productPhoto}
  }
})

const increaseQuantity = createAction('increase-quantity', ({idProduct, productStock}) => {
  return {
    payload: {idProduct, productStock}
  }
})

const decreaseQuantity = createAction('decrease-quantity', (idProduct) => {
  return {
    payload: idProduct
  }
})

const deleteCart = createAction('delete-all', () => {
  return {
    payload: "delete cart"
  }
})
const cartActions = { addProduct, increaseQuantity, decreaseQuantity, deleteCart }

export default cartActions