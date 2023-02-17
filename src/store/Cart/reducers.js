import cartActions from './actions'
import { createReducer } from '@reduxjs/toolkit'

const { addProduct, increaseQuantity, decreaseQuantity } = cartActions

const initialState = {
  cart: []
}
const cartReducers = createReducer(initialState, (builder) => {
  builder
    .addCase(addProduct, (state, action) => {
      const product = state.cart.find(product => product.id === action.payload.idProduct)
      if(!product) {
        return void (state.cart.push({id: action.payload.idProduct, product_id: action.payload.idProduct, quantity: 1}))
      }
      if (product.quantity <= action.payload.stock) {
        return void (product.quantity++)
      }
    })
    .addCase(increaseQuantity, (state, action) => {
      const product = state.cart.find(product => product.id === action.payload.idProduct)
      if (product.quantity <= action.payload.stock) {
        return void (product.quantity++)
      }
    })
    .addCase(decreaseQuantity, (state, action) => {
      const product = state.cart.find(product => product.id === action.payload)
      if(product.quantity > 0) {
        return void (product.quantity--)
      }
    })
})

export default cartReducers