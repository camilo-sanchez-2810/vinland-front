import { createReducer } from "@reduxjs/toolkit";
import carouselActions from "./actions";

const { get_carousel } = carouselActions

const initialState = {
  products: []
}

const carouselReducers = createReducer(initialState, (builder) => {
  builder
    .addCase(get_carousel.fulfilled, (state, action) => {
      console.log(action);
      const newState = {
        products: action.payload.response
      }
      return newState
    })
})

export default carouselReducers