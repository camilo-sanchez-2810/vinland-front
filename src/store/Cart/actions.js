import { createAction } from "@reduxjs/toolkit";

const addProduct = createAction('add-product', ({idProduct, stock}) => {
  return {
    payload: {idProduct, stock}
  }
})

const increaseQuantity = createAction('increase-quantity', ({idProduct, stock}) => {
  return {
    payload: {idProduct, stock}
  }
})

const decreaseQuantity = createAction('decrease-quantity', (idProduct) => {
  return {
    payload: idProduct
  }
})

const cartActions = { addProduct, increaseQuantity, decreaseQuantity }

export default cartActions