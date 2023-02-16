import { createReducer } from "@reduxjs/toolkit";
import productsActions from "./actions";

const {get_all_products, getProducts} = productsActions

const initialState= {products: [],inputText: "",genre: [],page: 1}

const initialState2 = {products: [],message: ''}

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

    const getproductsReducer = createReducer(initialState2, (builder) => {
            builder
            .addCase(getProducts.fulfilled, (state, action)=>{
            const newState = {
                products: action.payload.response,
                message: action.payload.message
            }
            return newState
        })
    });
    

const productsReducersAll = {
    productsReducers , getproductsReducer
}  

export default productsReducersAll