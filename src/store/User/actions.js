import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const api_URL = 'http://localhost:8080'
const get_one = createAsyncThunk(
    "get_one",
    async(token) => {
        let headers = {headers: {'Authorization':`Bearer ${token}`}}
        try{
            const response = await axios.get(`${api_URL}/api/users/user`, headers)
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
const update_one = createAsyncThunk(
    "update",
    async({token, data}) => {
        let headers = {headers: {'Authorization':`Bearer ${token}`}}
        try{
            const response = await axios.put(`${api_URL}/api/users/edit-user`, data, headers)
            console.log(response);
            return {
                success: true,
                response: response.data.response
            }
        }
        catch(error){
            return{
             response: error.data.response
            }
        }
    }
)
const userActions = {get_one, update_one}

export default userActions