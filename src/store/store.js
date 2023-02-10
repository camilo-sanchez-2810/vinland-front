import { configureStore } from "@reduxjs/toolkit";
import authReducer from './Login/reducers';
import carouselReducers from "./Carousel/reducers";

const store = configureStore({
    reducer: {
        auth: authReducer,
        carousel: carouselReducers

    }
})

export default store