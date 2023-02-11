import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const get_all_products = createAsyncThunk(
    'get_all_products',
    async({inputText, genre, page}) => {
       try{
        let response = await axios.get(`http://localhost:8000/api/product?name=${inputText}&genre=${genre}&page=${page}`)
        console.log(response);
        console.log(inputText);
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

const productsActions = {get_all_products}

export default productsActions