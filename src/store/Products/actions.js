import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const get_all_products = createAsyncThunk(
    'get_all_products',
    async() => {
       try{
        let response = await axios.get('http://localhost:8000/api/product')
        return {
            success: true,
            response: response.data.response
        }
       }catch(error){
        console.log(error);
       }
    }
)

const productsActions = {get_all_products}

export default productsActions