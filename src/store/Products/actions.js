import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const get_all_products = createAsyncThunk(
    'get_all_products',
    async({inputText, genre, page}) => {
       try{
        let response = await axios.get(`http://localhost:8080/api/product?name=${inputText}&genre=${genre}&page=${page}`)
        return {
            success: true,
            response: response.data.response,
            text: inputText,
            genre: genre,
            page: page
        }
       }catch(error){
console.log(error.response.data);
       }
    }
)

const getProducts = createAsyncThunk(
    'get_all_products',
    async() => {
       try{
        let response = await axios.get(`http://localhost:8080/api/product`)
        return {
            success: true,
            response: response.data.response,
        }
       }catch(error){
console.log(error.response.data);
       }
    }
)

const productsActions = {get_all_products, getProducts}

export default productsActions