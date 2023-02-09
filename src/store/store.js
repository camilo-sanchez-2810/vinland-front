import { configureStore } from "@reduxjs/toolkit";
import carouselReducers from "./Carousel/reducers";
import genreReducers from "./Genre/reducers";
import productsReducers from "./Products/reducers";

const store = configureStore({
    reducer: {
        carousel: carouselReducers,
        genres: genreReducers,
        products: productsReducers
    }
})

export default store