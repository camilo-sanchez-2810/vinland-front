import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const get_carousel = createAsyncThunk(
  'getCarousel', async () => {
    try {
      const products = await axios.get('http://localhost:8080/api/product/last')
      return {
        success: true,
        response: products.data.response
      } 
    } catch (error) {
      console.log(error);
      return {
        success: false,
        response: {
          error: error.message
        }
      }
    }
  }
)

const carouselActions = { get_carousel }

export default carouselActions

/*  */