import { configureStore } from "@reduxjs/toolkit";
import carouselReducers from "./Carousel/reducers";

const store = configureStore({
    reducer: {
        carousel: carouselReducers
    }
})

export default store