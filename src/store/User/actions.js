import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const api_URL = 'http://localhost:8080/'
const get_one = createAsyncThunk(
    "get_one",
    async(token) => {
        let headers = {headers: {'Authorization':`Bearer ${token}`}}
        try{
            const response = await axios.get(`${api_URL}api/users`, headers)
            return{
                success: true,
                response: response.data.response.all
            }
        }
        catch(error){
            console.log(error);
        }  
    }
)

const userActions = {get_one}

export default userActions