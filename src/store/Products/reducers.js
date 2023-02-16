import { createReducer } from "@reduxjs/toolkit";
import productsActions from "./actions";

const {get_all_products, getproducts} = productsActions

const initialState= {
    products: [],
    inputText: "",
    genre: [],
    page: 1
}

const productsReducers = createReducer(
    initialState, (builder) => {
        builder
            .addCase(get_all_products.fulfilled, (state, action) => {
                const newState = {
                    products: action.payload.response,
                    text: action.payload.response.text,
                    genre: action.payload.response.genre,
                    page: action.payload.response.page
                }
                return newState
            })
    })


const getproductsReducer = createReducer(
    initialState, (builder) => {
        builder
            .addCase(get_all_products.fulfilled, (state, action) => {
                const newState = {
                    products: action.payload.response,
                    text: action.payload.response.text,
                    genre: action.payload.response.genre,
                    page: action.payload.response.page
                }
                return newState
            })
    })

export default productsReducers