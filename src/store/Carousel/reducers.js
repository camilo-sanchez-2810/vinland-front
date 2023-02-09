import { createReducer } from "@reduxjs/toolkit";
import carouselActions from "./actions";

const { getCarousel } = carouselActions

const initialState = {
  products: []
}

const carouselReducers = createReducer(initialState, (builder) => {
  builder
    .addCase(getCarousel.fulfilled, (state, action) => {
      const newState = {
        comics: action.payload.response
      }
      return newState
    })
})

export default carouselReducers