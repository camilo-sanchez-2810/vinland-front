import { createReducer } from "@reduxjs/toolkit";
import productActions from "./actions";

const {get_one} = productActions

const initialState = {
    product: []
}

const productReducers = createReducer(
    initialState,
    (builder) => {
        builder
        .addCase(get_one.fulfilled, (state, action) => {
            const newState = {
                products: action.payload.response
            }
            return newState
        })
    }
)

export default productReducers