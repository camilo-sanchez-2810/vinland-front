import cartActions from './actions'
import { createReducer } from '@reduxjs/toolkit'

const { addProduct } = cartActions

const initialState = []
const cartReducers = createReducer(initialState, (builder) => {
  builder
    .addCase(addProduct, (state, action) => {
      const exist = state.some(product => product.product_id === action.payload)
      console.log(state)
      let newState = []
      if(exist) {
        newState = state.map((product) => {
          if(product.product_id === action.payload) {
            return {...product, quantity: product.quantity + 1}
          }
          return product
        })
      } else {
        newState = [...state, {product_id: action.payload, quantity: 1}]
      }
      return newState
    })
})

export default cartReducers