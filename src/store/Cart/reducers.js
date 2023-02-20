import cartActions from './actions'
import { createReducer } from '@reduxjs/toolkit'

const { addProduct, increaseQuantity, decreaseQuantity } = cartActions

const initialState = {
  cart: []
}
const cartReducers = createReducer(initialState, (builder) => {
  builder
    .addCase(addProduct, (state, action) => {
      const { idProduct, productStock, productName, productPrice, productPhoto } = action.payload
      const product = state.cart.find(product => product.id === idProduct)
      if(!product) {
        return void (state.cart.push({id: idProduct, name: productName, photo: productPhoto, price: productPrice, quantity: 1, stock: productStock}))
      }
      if (product.quantity <= productStock) {
        return void (product.quantity++)
      }
    })
    .addCase(increaseQuantity, (state, action) => {
      const product = state.cart.find(product => product.id === action.payload.idProduct)
      if (product.quantity <= action.payload.productStock) {
        return void (product.quantity++)
      }
      return void ({
        ...state
      })
    })
    .addCase(decreaseQuantity, (state, action) => {
      const product = state.cart.find(product => product.id === action.payload)
      if(product.quantity > 0) {
        return void (product.quantity--)
      }
      return void ({
        ...state
      })
    })
})

export default cartReducers