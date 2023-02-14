import { createAction } from "@reduxjs/toolkit";

const addProduct = createAction('add-product', (idProduct) => {
  return {
    payload: idProduct
  }
})

const cartActions = { addProduct }

export default cartActions