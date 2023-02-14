import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const get_one = createAsyncThunk(
        "get_one",
        async(id) => {
            try{
                const response = await axios.get(`http://localhost:8080/api/product/${id}`)
                return{
                    success: true,
                    response: response.data.response
                }
            }
            catch(error){
                console.log(error);
            }
        }
)

const productActions = {get_one}

export default productActions
