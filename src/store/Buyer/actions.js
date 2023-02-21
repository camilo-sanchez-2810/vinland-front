import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const api_URL ="http://localhost:8080/"
const get_buyer = createAsyncThunk(
    "get_buyer",
    async(token)=>{
        try{
            let headers = {headers: {'Authorization':`Bearer ${token}`}}
            const response = await axios.get(`${api_URL}api/buyer`, headers)
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
const update_buyer = createAsyncThunk(
    "update",
    async({token, data}) => {
        try{
            let headers = {headers: {'Authorization':`Bearer ${token}`}}
            const response = await axios.put(`${api_URL}api/buyer/edit-buyer`, data, headers)
            console.log(response);
            return{
                success: true,
                response: response.data.response
            }
        }
        catch(error){

        }
    }
)
const buyerActions = {get_buyer, update_buyer}

export default buyerActions