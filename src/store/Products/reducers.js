import { createReducer } from "@reduxjs/toolkit";
import productsActions from "./actions";

const {get_all_products} = productsActions

const initialState= {
    products: [],
    inputText: "",
    genre: []
}

const productsReducers = createReducer(
    initialState, (builder) => {
        builder
            .addCase(get_all_products.fulfilled, (state, action) => {
                console.log(action);
                const newState = {
                    products: action.payload.response,
                    text: action.payload.response.text,
                    genre: action.payload.response.genre
                }
                return newState
            })
    })

export default productsReducers