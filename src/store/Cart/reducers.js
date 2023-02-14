import cartActions from './actions'
import { createReducer } from '@reduxjs/toolkit'

const { addProduct } = cartActions

const initialState = {
  products: [],
  total: 0
}

const cartReducers = createReducer(initialState, (builder) => {
  builder
    .addCase(addProduct, (state, action) => {
      const exist = state.products.some(product => product.product_id === action.payload)
      let newState = {}
      if(!exist) {
        newState = {
          products: [...state.products, { product_id: action.payload, quantity: 1 }],
          total: state.total
        }
      } else {
        newState = {
          products: state.products.map((product) => {
            return product.product_id === action.payload ? ({...product, quantity: product.quantity +1}) : product
          }),
          total: state.total
        }
      }
      return newState
    })
})

export default cartReducers