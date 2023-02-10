import { createReducer } from "@reduxjs/toolkit";
import productsActions from "./actions";

const {get_all_products} = productsActions

const initialState= {
    products: []
}

const productsReducers = createReducer(
    initialState, (builder) => {
        builder
            .addCase(get_all_products.fulfilled, (state, action) => {
                const newState = {
                    products: action.payload.response
                }
                return newState
            })
    })

export default productsReducers