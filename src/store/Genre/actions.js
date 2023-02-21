import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const get_genres = createAsyncThunk(
    'get_genres', 
    async() => {
        try{
            let response = await axios.get('http://localhost:8080/api/genre')
            return {
                success: true,
                response: response.data.response
            }
        }catch(error){
            console.log(error);
        }
    }
)

const genreActions = {get_genres}

export default genreActions