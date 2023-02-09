import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const getCarousel = createAsyncThunk('get-carousel', async () => {
  try {
    const comics = await axios.get('products.json')
    console.log(comics.data.response)
    return {
      success: true,
      response: comics.data.response
    } 
  } catch (error) {
    return {
      success: false,
      response: {
        error: error.message
      }
    }
  }
})

const carouselActions = { getCarousel }

export default carouselActions